const hamburger = document.querySelector(".hamburger");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const width = document.documentElement.clientWidth;

if (width <= 768) {
  hamburger.addEventListener("click", e => {
    console.log('клик по кнопке');
    e.preventDefault();
    fullscreenMenu.style.display = "flex";
    fullscreenMenu.classList.add('active'); 
  })
}