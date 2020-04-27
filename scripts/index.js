const toggler = document.querySelector('.mobile-menu-toggler');
const mobileMenu = document.querySelector('.mobile-menu-container');
const bar = document.querySelector('.top-bar-for-mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');
const links = document.querySelectorAll('.menu-link');

const cards = document.querySelectorAll('.card');
const cardLinks = document.querySelector('.card-href');

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

const projectLinks = {
  card1: 'https://makerdelivery.com',
  card2: 'https://LEONARDSYSTEM.COM',
  card3: 'https://PRICEGOD.IT'
};

for (const card of cards) {
  card.addEventListener('click', e => {
    for (const card of cards) {
      // if (card.classList.contains('active')) {
      //   // Wrap card in href
      //     const cardContainer = document.querySelector('.card-container');
      //     const getHTML = cardContainer.innerHTML;
      //     const projektLink = projectLinks[card.id];
      //     const newHTML = `<a href="${projektLink}">` + getHTML + '</a>';
      //     cardContainer.innerHTML = newHTML;
      // }

      card.classList.remove('active');
    }
    card.classList.add('active');
    
    // Wrap card in href
    // addLink(card);
  });
}

const addLink = function(card) {
  const cardContainer = document.querySelector('.card-container');
  const getHTML = cardContainer.innerHTML;
  const projektLink = projectLinks[card.id];
  const newHTML = `<a href="${projektLink}">` + getHTML + '</a>';
  cardContainer.innerHTML = newHTML;
}



// cardLinks.addEventListener('click', e => {
//   if (this.parentElement.classList.contains('is-disabled')) {
//     e.preventDefault();
//   }
// });

const onProjects = () => {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let target = document.querySelector('#projects');
  
  let callback = (entries) => {
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
  
  let observer = new IntersectionObserver(callback, options);
  
  observer.observe(target);
}

const onHome = () => {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let target = document.querySelector('#home');
  
  let callback = (entries) => {
    entries.forEach(entry => {
      for (const text of navigatrorPageTexts) {
        text.innerHTML = target.id;
        for (const counter of scrollCounters) {
          counter.innerHTML = '1';
        }
      }
    });
  };
  
  let observer = new IntersectionObserver(callback, options);
  
  observer.observe(target);
}

onProjects();
onHome();




if (window.screen.width >=760) {
  navigatrorPrefix.innerHTML = 'page';
}
