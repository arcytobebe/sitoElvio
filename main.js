/* =========================
   MENU MOBILE
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = navLinks.classList.toggle("open");
    toggle.textContent = open ? "✕" : "☰";
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    });
});

document.addEventListener("click", e => {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
    }
});

/* =========================
   INSTAGRAM SOLO MOBILE
========================= */
const instagramLink = document.querySelector(".ig-link");

function toggleInstagram() {
    instagramLink.style.display = window.innerWidth <= 600 ? "flex" : "none";
}

toggleInstagram();
window.addEventListener("resize", toggleInstagram);

/* =========================
   STAGGER ANIMATION
========================= */
const items = document.querySelectorAll(".gallery .item");
const columns = 3;

items.forEach((item, index) => {
    const row = Math.floor(index / columns);
    item.style.animationDelay = `${row * 0.15}s`;
});

/* =========================
   TOUCH HIGHLIGHT MOBILE
========================= */
items.forEach(item => {

    item.addEventListener("touchstart", () => {
        if (window.innerWidth <= 600) {
            item.classList.add("touch-active");
        }
    });

    item.addEventListener("touchmove", () => {
        if (window.innerWidth <= 600) {
            item.classList.add("touch-active");
        }
    });

    item.addEventListener("touchend", () => {
        item.classList.remove("touch-active");
    });

    item.addEventListener("touchcancel", () => {
        item.classList.remove("touch-active");
    });
});
