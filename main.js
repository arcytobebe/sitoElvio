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
    instagramLink.style.display = window.innerWidth >= 600 ? "none" : "flex";
}

toggleInstagram();
window.addEventListener("resize", toggleInstagram);

/* =========================
   STAGGER ANIMATION PER RIGHE
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


/* =========================
   SCROLL TO TOP
========================= */
const scrollBtn = document.getElementById("scrollToTop");

// mostra / nasconde
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// scroll smooth
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
