document.addEventListener('DOMContentLoaded', () => {
    // Navigazione
    const homeBtn = document.getElementById('goToHomeBtn');
    const contBtn = document.getElementById('goToCont');

    if (homeBtn) homeBtn.addEventListener('click', () => window.location.href = '/index.html');
    if (contBtn) contBtn.addEventListener('click', () => window.location.href = '/Contact/contact.html');

    // Carousel
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    const gap = 15;
    const item = document.querySelector('.carousel-item');
    const itemWidth = item.offsetWidth + gap;

    // Funzione di scroll lento usando requestAnimationFrame
    function smoothScrollBy(distance, duration = 0) {
        const start = carousel.scrollLeft;
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 0.5 - Math.cos(progress * Math.PI) / 2; // easing
            carousel.scrollLeft = start + distance * ease;
            if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }

    function scrollNext() {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
            smoothScrollBy(-carousel.scrollLeft); // torna all'inizio
        } else {
            smoothScrollBy(itemWidth);
        }
    }

    function scrollPrev() {
        if (carousel.scrollLeft <= 0) {
            smoothScrollBy(carousel.scrollWidth - carousel.scrollLeft); // porta alla fine
        } else {
            smoothScrollBy(-itemWidth);
        }
    }

    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);

    // Auto-scroll lento ogni 3 secondi
    let autoScroll = setInterval(scrollNext, 4000);
    carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
    carousel.addEventListener('mouseleave', () => {
        autoScroll = setInterval(scrollNext, 4000);
    });
});