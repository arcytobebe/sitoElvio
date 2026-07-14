/* =========================
   LIGHTBOX
========================= */
const galleryItems = document.querySelectorAll('.gallery .item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxCaption.textContent = galleryItems[currentIndex].dataset.title || '';
    lightbox.classList.add('show');
}

function closeLightbox() {
    lightbox.classList.remove('show');
}

function showPrev() {
    openLightbox((currentIndex - 1 + galleryItems.length) % galleryItems.length);
}

function showNext() {
    openLightbox((currentIndex + 1) % galleryItems.length);
}

galleryItems.forEach((img, index) =>
    img.addEventListener('click', () => openLightbox(index))
);

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

/* =========================
   MENU MOBILE TOGGLE
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // evita che il click chiuda subito
    const isOpen = navLinks.classList.toggle("open");
    toggle.textContent = isOpen ? "✕" : "☰";
});

// chiusura menu quando clicchi un link
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    });
});

// chiusura menu quando clicchi fuori
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    }
});

/* =========================
   TOUCH HIGHLIGHT MOBILE
========================= */
const items = document.querySelectorAll(".gallery .item");

items.forEach(item => {
    item.addEventListener("touchstart", () => {
        if (window.innerWidth <= 600) item.classList.add("touch-active");
    });
    item.addEventListener("touchend", () => item.classList.remove("touch-active"));
});

/* =========================
   STAGGER ANIMATION PER GALLERY
========================= */
const columns = 3; // numero colonne masonry

items.forEach((item, index) => {
    const row = Math.floor(index / columns);
    item.style.animationDelay = `${row * 0.15}s`;
    item.classList.add("reveal"); // opzionale per ulteriori effetti CSS
});

/* =========================
   LINK INSTAGRAM MOBILE
========================= */
const instagramLink = document.querySelector('.nav-links > a');

function toggleInstagram() {
    if (!instagramLink) return;
    // Mostra solo quando il menu è mobile (≤600px)
    if (window.innerWidth <= 600) {
        instagramLink.style.display = 'flex';
    } else {
        instagramLink.style.display = 'none';
    }
}

// Controllo iniziale
toggleInstagram();

// Aggiornamento al resize
window.addEventListener('resize', toggleInstagram);
