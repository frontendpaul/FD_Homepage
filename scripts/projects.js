const toggler = document.querySelector('.mobile-menu-toggler');
const mobileMenu = document.querySelector('.mobile-menu-container');
const bar = document.querySelector('.top-bar-for-mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');
const links = document.querySelectorAll('.menu-link');


const open = function() {
  mobileMenu.style.top = '0';
  bar.style.display = 'flex';
}

const close = function() {
  mobileMenu.style.top = '-100vh';  
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
