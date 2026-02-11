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
    const img = galleryItems[currentIndex];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.title || img.alt;
    lightbox.classList.add('show');
}

function closeLightbox() { lightbox.classList.remove('show'); }
function showPrev() { openLightbox((currentIndex - 1 + galleryItems.length) % galleryItems.length); }
function showNext() { openLightbox((currentIndex + 1) % galleryItems.length); }

galleryItems.forEach((img, index) => img.addEventListener('click', () => openLightbox(index)));
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);
lightbox.addEventListener('click', (e) => { if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeLightbox();
});

/* =========================
   MENU MOBILE TOGGLE + BLOCCO SCROLL
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.textContent = isOpen ? "✕" : "☰";
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        document.body.classList.remove("menu-open");
        toggle.textContent = "☰";
    });
});

document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("open");
        document.body.classList.remove("menu-open");
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
   SCROLL TO TOP
========================= */
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollBtn.classList.add("show");
    else scrollBtn.classList.remove("show");
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
