const toggler = document.querySelector('.mobile-menu-toggler');
const mobileMenu = document.querySelector('.mobile-menu-container');
const bar = document.querySelector('.top-bar-for-mobile-menu');
const close = document.querySelector('.mobile-menu-close');
const main = document.querySelector('body');

const navigatrorPrefix  = document.querySelector('.navigator-prefix');



toggler.addEventListener('click', function() {  
  mobileMenu.style.top = '0';
  bar.style.display = 'flex';
  main.style.overflow = 'hidden';
  // toggler.classList.toggle('is-activ');
  // document.querySelector('.main-menu').classList.toggle('mobile-menu-visible');
});

close.addEventListener('click', function() {
  mobileMenu.style.top = '-100vh';  
  main.style.overflow = 'visible';
  setTimeout(function(){ bar.style.display = 'none'; }, 300);
});

if (window.screen.width >=760) {
  navigatrorPrefix.innerHTML = 'page';
}