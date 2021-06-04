const hamburger = document.querySelector(".hamburger");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const width = document.documentElement.clientWidth;
const closeButton = document.querySelector(".fullscreen-menu__close");
const body = document.querySelector("body");

if (width <= 768) {
  hamburger.addEventListener("click", e => {
    e.preventDefault();
    fullscreenMenu.classList.add('active');
    body.style.overflow = 'hidden';
  });
};

closeButton.addEventListener("click", e => {
  e.preventDefault();
  fullscreenMenu.classList.remove('active');
  body.style.overflow = '';
});

