/* =========================
   MENU MOBILE TOGGLE
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

// Apertura/chiusura menu mobile
toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("active"); // usa .active
    toggle.classList.toggle("active", isOpen);          // anima hamburger
});

// Chiude il menu se clicchi su un link
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        toggle.classList.remove("active");
    });
});

// Chiude il menu se clicchi fuori
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("active");
        toggle.classList.remove("active");
    }
});

/* =========================
   INSTAGRAM LINK (SOLO MOBILE)
========================= */
const instagramLink = document.querySelector(".ig-link");

function toggleInstagram() {
    if (window.innerWidth >= 600) {
        instagramLink.style.display = "none";
    } else {
        instagramLink.style.display = "flex";
    }
}

toggleInstagram();
window.addEventListener("resize", toggleInstagram);

/* =========================
   STAGGER ANIMATION PER GALLERY
========================= */
const items = document.querySelectorAll(".gallery .item");
const columns = 3;

items.forEach((item, index) => {
    const row = Math.floor(index / columns);
    item.style.animationDelay = `${row * 0.15}s`;
    item.classList.add("reveal");
});



