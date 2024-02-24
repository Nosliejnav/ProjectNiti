document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const arrow = document.querySelector('.arrow');
    let currentIndex = 0;

    function toggleArrowVisibility() {
        if (currentIndex < slides.length - 1) {
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
    }

    arrow.addEventListener('click', function () {
        slides[currentIndex].classList.remove('current');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('current');
        toggleArrowVisibility();
    });

    toggleArrowVisibility();
});
