const toggler = document.querySelector('.mobile-menu-toggler');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const bar = document.querySelector('.top-bar-for-mobile-menu');
const close = document.querySelector('.mobile-menu-close');

toggler.addEventListener('click', function() {  
  mobileMenu.style.top = '0';
  bar.style.display = 'flex';
  // toggler.classList.toggle('is-activ');
  // document.querySelector('.main-menu').classList.toggle('mobile-menu-visible');
});

close.addEventListener('click', function() {
  mobileMenu.style.top = '-100vh';
  bar.style.display = 'none';
});