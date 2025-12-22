// =========================
// SELEZIONI ELEMENTI
// =========================
const galleryItems = document.querySelectorAll('.gallery .item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// =========================
// FUNZIONI LIGHTBOX
// =========================
function openLightbox(index) {
    currentIndex = index;
    const img = galleryItems[currentIndex];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.title || img.alt;
    lightbox.classList.add('show'); 
    lightbox.classList.remove('hidden'); // aggiungi questa riga se usi hidden
}
function closeLightbox() {
    lightbox.classList.remove('show'); 
    lightbox.classList.add('hidden'); // aggiungi questa riga se usi hidden
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
}

// =========================
// EVENTI LIGHTBOX
// =========================
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Chiudi lightbox cliccando fuori dall'immagine
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Navigazione con tastiera
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeLightbox();
});

// =========================
// NAVIGAZIONE RAPIDA
// =========================
document.addEventListener('DOMContentLoaded', () => {
    const goToHomeBtn = document.getElementById('goToHomeBtn');
    const goToAbtBtn = document.getElementById('goToAbt');
    const goToContBtn = document.getElementById('goToCont');

    if (goToHomeBtn) goToHomeBtn.addEventListener('click', () => {
        window.location.href = '/index.html';
    });

    if (goToAbtBtn) goToAbtBtn.addEventListener('click', () => {
        window.location.href = '/About/about.html';
    });

    if (goToContBtn) goToContBtn.addEventListener('click', () => {
        window.location.href = '/Contact/contact.html';
    });
});
