const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const images = document.querySelectorAll('.gallery .item img');
let currentIndex = 0;

// Apri lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
    });
});

function showLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.title || img.alt;
    lightbox.classList.remove('hidden');
}

// Chiudi lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Navigazione
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showLightbox();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showLightbox();
});

// Chiudi cliccando fuori immagine
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.classList.add('hidden');
    }
});

// Scorrimento con frecce tastiera
document.addEventListener('keydown', (e) => {
    if(lightbox.classList.contains('hidden')) return;
    if(e.key === 'ArrowLeft') prevBtn.click();
    if(e.key === 'ArrowRight') nextBtn.click();
    if(e.key === 'Escape') closeBtn.click();
});
