// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});


// === MAIN SLIDER (Our Project) ===

(function () {
    const slider = document.querySelector('.slider'); // OK, class exists
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const leftBtn = document.querySelector('.left-btn');  // FIX class exists
    const rightBtn = document.querySelector('.right-btn'); // FIX class exists

    let index = 0;

    function showSlide(i) {
        slides.forEach((s, n) => s.classList.toggle('active', n === i));
    }

    if (leftBtn) {
        leftBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });
    }

    if (rightBtn) {
        rightBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });
    }
})();


// === PROJECT SLIDERS (Other Projects) ===

document.querySelectorAll('.project').forEach(project => {
    const slider = project.querySelector('.project-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const left = project.querySelector('.arrow.left');
    const right = project.querySelector('.arrow.right');

    let index = 0;

    function show(i) {
        slides.forEach((s, n) => s.classList.toggle('active', n === i));
    }

    if (left) {
        left.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            show(index);
        });
    }

    if (right) {
        right.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            show(index);
        });
    }
});