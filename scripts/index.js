const toggler = document.querySelector('.mobile-menu-toggler');
const mobileMenu = document.querySelector('.mobile-menu-container');
const bar = document.querySelector('.top-bar-for-mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');
const links = document.querySelectorAll('.menu-link');
const main = document.body;

const navigatrorPrefix  = document.querySelector('.navigator-prefix');



toggler.addEventListener('click', function() {  
  mobileMenu.style.top = '0';
  bar.style.display = 'flex';
  main.style.overflow = 'hidden';
});

const open = function() {
  mobileMenu.style.top = '0';
  bar.style.display = 'flex';
  main.style.overflow = 'hidden';
}

const close = function() {
  mobileMenu.style.top = '-100vh';  
  main.style.overflow = 'visible';
  setTimeout(function(){ bar.style.display = 'none'; }, 300);
}

toggler.addEventListener('click', e => {
  open();
  e.preventDefault();  
});

closeBtn.addEventListener('click', e => {
  close();
  e.preventDefault();  
});

for(const link of links) {
  link.addEventListener('click', e => {
    close();
  });
}


if (window.screen.width >=760) {
  navigatrorPrefix.innerHTML = 'page';
}