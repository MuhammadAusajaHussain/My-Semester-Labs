let slideIndex = 0;
const slides = document.querySelectorAll('#slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    setTimeout(autoSlide, 3000);
});