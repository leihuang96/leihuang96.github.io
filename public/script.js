const nav = document.querySelector('#mainNav');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileMenuIcons = mobileMenu.querySelectorAll('svg');
const mainMenu = document.querySelector('#mainMenu');

// navigation functions
function toggleBurger() {
  mobileMenuIcons.forEach((mmi) => {
    if (mmi.classList.contains('hidden')) {
      mmi.classList.remove('hidden');
    } else {
      mmi.classList.add('hidden');
    }
  });
}

mobileMenu.addEventListener('click', (e) => {
  e.preventDefault();

  if (mainMenu.classList.contains('hidden')) {
    mainMenu.classList.remove('hidden');
  } else {
    mainMenu.classList.add('hidden');
  }

  toggleBurger();
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY >= 400) {
    nav.classList.add('stickyNav');
  } else {
    nav.classList.remove('stickyNav');
  }
});

//Tailwind Animate on Scroll

const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn');
    } else {
      entry.target.classList.remove('animate-fadeIn');
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll('.show-on-scroll');
targets.forEach(function (target) {
  target.classList.add('opacity-0');
  observer.observe(target);
});
