document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carousel = document.querySelector('.carousel');
    const articles = document.querySelectorAll('.artigo');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = articles.length - 1; // Loop para o último artigo
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < articles.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop para o primeiro artigo
        }
        updateCarousel();
    });

    updateCarousel();
});
