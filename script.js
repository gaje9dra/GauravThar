const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');

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

document.querySelector('.search-button')?.addEventListener('click', () => {
  document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' });
});
