const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');
const WHATSAPP_NUMBER = '91XXXXXXXXXX';

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('mobile-open', !open);
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('mobile-open');
  });
});

const getBookingDetails = () => ({
  pickup: document.querySelector('.booking-bar input[placeholder="City or airport"]')?.value.trim() || '',
  pickupDate: document.querySelectorAll('.booking-bar input[type="date"]')[0]?.value || '',
  returnDate: document.querySelectorAll('.booking-bar input[type="date"]')[1]?.value || ''
});

document.querySelectorAll('.book-car').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.car-card');
    if (!card) return;

    const { pickup, pickupDate, returnDate } = getBookingDetails();
    if (pickupDate && returnDate && new Date(returnDate) < new Date(pickupDate)) {
      alert('Please choose a return date after the pick-up date.');
      return;
    }

    const message = [
      'Hello Gaurav Thar, I would like to book a car.', '',
      `Car: ${card.dataset.car}`,
      `Category: ${card.dataset.category}`,
      `Details: ${card.dataset.details}`,
      `Price: ${card.dataset.price}`,
      pickup ? `Pick-up location: ${pickup}` : '',
      pickupDate ? `Pick-up date: ${pickupDate}` : '',
      returnDate ? `Return date: ${returnDate}` : '', '',
      'Please confirm availability and booking details.'
    ].filter(Boolean).join('\n');

    if (WHATSAPP_NUMBER.includes('X')) {
      alert('Add the business WhatsApp number in script.js to activate the final WhatsApp redirect.');
      return;
    }

    button.classList.add('is-loading');
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
});

document.querySelector('.search-button')?.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
