// navbar scroll 
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        nav.classList.add('nav__scroll');
    }else{
        nav.classList.remove('nav__scroll');
    }
});

// scrolling movie tiles

const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.inner-slider');

let dragged = false;
let startX;
let x;

// Desktop Version

slider.addEventListener("mousedown", e => {
    dragged = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
    dragged = false;
});

slider.addEventListener("mousemove", e => {
    if (!dragged) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();

});