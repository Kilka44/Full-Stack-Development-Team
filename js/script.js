// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});




const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

leftBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

rightBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});




const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {
    let index = 0;
    const slides = slider.querySelectorAll("img");
    const project = slider.dataset.project;

    const leftBtn = document.querySelector(`.arrow.left[data-project="${project}"]`);
    const rightBtn = document.querySelector(`.arrow.right[data-project="${project}"]`);

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    rightBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    leftBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });
});



