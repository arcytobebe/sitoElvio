/* =========================
   MENU MOBILE TOGGLE
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

// Apri/chiudi il menu quando clicchi l'icona
toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.textContent = isOpen ? "✕" : "☰";
});

// Chiudi il menu se clicchi su una voce
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    });
});

// Chiudi il menu se clicchi fuori dal menu (opzionale)
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    }
});

/* =========================
   STAGGER ANIMATION IMMAGINI
========================= */
const items = document.querySelectorAll(".item");

// Applica ritardo sequenziale e animazione
items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.12}s`;
    item.classList.add("reveal");
});


/* =========================
    INSTAGRAM LINK DESKTOP
========================= */

const instagramLink = document.querySelector('.nav-links > a');

function toggleInstagram() {
    if (window.innerWidth >= 1200) {
        instagramLink.style.display = 'none';
    } else {
        instagramLink.style.display = 'block';
    }
}

toggleInstagram();
window.addEventListener('resize', toggleInstagram);
