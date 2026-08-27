document.querySelectorAll('.current-year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('.portrait-placeholder img').forEach((image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
    const fallback = image.parentElement.querySelector('.portrait-fallback');
    if (fallback) fallback.style.display = 'grid';
  });
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.querySelector('#contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  if (new URLSearchParams(window.location.search).get('sent') === '1') {
    status.textContent = 'Thank you — your message has been sent. We will be in touch soon.';
  }
}
