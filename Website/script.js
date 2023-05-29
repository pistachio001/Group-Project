"use strict";
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
function moveSlider(direction) {
    const slideWidth = slider.clientWidth / 3;
    const totalSlides = slider.children.length;
    if (direction === -1 && currentIndex > 0) {
        currentIndex--;
    }
    else if (direction === 1 && currentIndex < totalSlides - 3) {
        currentIndex++;
    }
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
prevBtn.addEventListener('click', () => moveSlider(-1));
nextBtn.addEventListener('click', () => moveSlider(1));