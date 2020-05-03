const toggler = document.querySelector('.mobile-menu-toggler');
const mobileMenu = document.querySelector('.mobile-menu-container');
const bar = document.querySelector('.top-bar-for-mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');
const links = document.querySelectorAll('.menu-link');

const cards = document.querySelectorAll('.card');

const main = document.body;

const navigatrorPrefix  = document.querySelector('.navigator-prefix');
const navigatrorPageTexts  = document.querySelectorAll('.what-page');
const scrollCounters  = document.querySelectorAll('.scroll-counter-x');




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


for (const card of cards) {
  card.addEventListener('click', e => {
    for (const card of cards) {
      card.classList.remove('active');
    }
    card.classList.add('active');
  });
}

const onFuture = () => {
  const options = {
    root: null,
    rootMargin: '0px'
  }
  
  const target = document.querySelector('#future');
  
  const callback = (entries) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        for (const text of navigatrorPageTexts) {
          text.innerHTML = target.id;
          for (const counter of scrollCounters) {
            counter.innerHTML = '1';
          }
        }
      }   
    });
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  observer.observe(target);
}

const onProjects = () => {
  const options = {
    root: null,
    rootMargin: '0px'
  }
  
  const target = document.querySelector('#projects');
  
  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        for (const text of navigatrorPageTexts) {
          text.innerHTML = target.id;
          for (const counter of scrollCounters) {
            counter.innerHTML = '2';
          }
        }
      }
    });
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  observer.observe(target);
}

const onHome = () => {
  const options = {
    root: null,
    rootMargin: '0px'
  }
  
  const target = document.querySelector('#home');
  
  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        for (const text of navigatrorPageTexts) {
          text.innerHTML = target.id;
          for (const counter of scrollCounters) {
            counter.innerHTML = '1';
          }
        }
      }      
    });
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  observer.observe(target);
}

onFuture();
onProjects();
onHome();




if (window.screen.width >=760) {
  navigatrorPrefix.innerHTML = 'page';
}
