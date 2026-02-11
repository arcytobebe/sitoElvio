/* =========================
   MENU MOBILE TOGGLE + BLOCCO SCROLL
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // evita che il document click chiuda subito
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.textContent = isOpen ? "✕" : "☰";
});

// chiusura menu quando clicchi un link
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        document.body.classList.remove("menu-open");
        toggle.textContent = "☰";
    });
});

// chiusura menu quando clicchi fuori
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
   LINK INSTAGRAM MOBILE
========================= */
const instagramLink = document.querySelector('.nav-links > a');

function toggleInstagram() {
    if (!instagramLink) return;
    if (window.innerWidth < 1200) {
        instagramLink.style.display = 'flex';
    } else {
        instagramLink.style.display = 'none';
    }
}

// controllo iniziale
toggleInstagram();

// aggiornamento al resize
window.addEventListener('resize', toggleInstagram);
