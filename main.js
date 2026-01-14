/* =========================
   MENU MOBILE TOGGLE
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
   STAGGER ANIMATION PER RIGHE
========================= */
const items = document.querySelectorAll(".gallery .item");
const columns = 3; // numero colonne del masonry

items.forEach((item, index) => {
    const row = Math.floor(index / columns);
    item.style.animationDelay = `${row * 0.15}s`; // delay tra righe
    item.classList.add("reveal"); // se vuoi usare una classe per animazioni aggiuntive
});
