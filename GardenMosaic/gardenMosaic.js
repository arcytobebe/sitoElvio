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
    if (e.key==='ArrowLeft') showPrev();
    if (e.key==='ArrowRight') showNext();
    if (e.key==='Escape') closeLightbox();
});

/* =========================
   MENU MOBILE
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.textContent = isOpen ? "✕" : "☰";
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    });
});

document.addEventListener("click", (e) => {
    if(!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    }
});

/* =========================
   STAGGER ANIMATION IMMAGINI
========================= */
const items = document.querySelectorAll(".item");
items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.12}s`;
    item.classList.add("reveal");
});

/* =========================
   LINK INSTAGRAM MOBILE
========================= */
const instagramLink = document.querySelector('.nav-links > a');
function toggleInstagram() {
    instagramLink.style.display = window.innerWidth >= 1200 ? 'none' : 'block';
}
toggleInstagram();
window.addEventListener('resize', toggleInstagram);
