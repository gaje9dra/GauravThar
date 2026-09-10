const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');

// Replace this with the business WhatsApp number in international format.
// Example for India: 919876543210 (no +, spaces, or dashes).
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

document.querySelectorAll('.book-car').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.car-card');
    if (!card) return;

    const car = card.dataset.car;
    const category = card.dataset.category;
    const details = card.dataset.details;
    const price = card.dataset.price;
    const pickup = document.querySelector('.booking-bar input[placeholder="City or airport"]')?.value.trim();
    const pickupDate = document.querySelectorAll('.booking-bar input[type="date"]')[0]?.value;
    const returnDate = document.querySelectorAll('.booking-bar input[type="date"]')[1]?.value;

    const message = [
      'Hello Gaurav Thar, I would like to book a car.',
      '',
      `Car: ${car}`,
      `Category: ${category}`,
      `Details: ${details}`,
      `Price: ${price}`,
      pickup ? `Pick-up location: ${pickup}` : '',
      pickupDate ? `Pick-up date: ${pickupDate}` : '',
      returnDate ? `Return date: ${returnDate}` : '',
      '',
      'Please confirm availability and booking details.'
    ].filter(Boolean).join('\n');

    if (WHATSAPP_NUMBER.includes('X')) {
      alert('Please add your Gaurav Thar WhatsApp number in script.js before accepting bookings.');
      return;
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
});

document.querySelector('.search-button')?.addEventListener('click', () => {
  document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' });
});
