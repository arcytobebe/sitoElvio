/* =========================
   MENU MOBILE TOGGLE + BLOCCO SCROLL
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks ? navLinks.querySelectorAll("a") : [];

function closeMenu() {
    if (!navLinks || !toggle) return;

    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.textContent = "☰";
}

if (toggle) {
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle("open");
        document.body.classList.toggle("menu-open", isOpen);
        toggle.textContent = isOpen ? "✕" : "☰";
    });
}

links.forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
    if (!navLinks || !toggle) return;

    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        closeMenu();
    }
});

/* =========================
   TOUCH HIGHLIGHT MOBILE
========================= */
const items = document.querySelectorAll(".gallery .item");

items.forEach(item => {
    item.addEventListener("touchstart", () => {
        if (window.innerWidth <= 600) item.classList.add("touch-active");
    }, { passive: true });

    item.addEventListener("touchend", () => item.classList.remove("touch-active"), { passive: true });
});

/* =========================
   SCROLL TO TOP
========================= */
const scrollBtn = document.getElementById("scrollToTop");
let isScrollBtnVisible = false;

function updateScrollButton() {
    if (!scrollBtn) return;

    const shouldShow = window.scrollY > 300;
    if (shouldShow === isScrollBtnVisible) return;

    isScrollBtnVisible = shouldShow;
    scrollBtn.classList.toggle("show", shouldShow);
}

window.addEventListener("scroll", updateScrollButton, { passive: true });
updateScrollButton();

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
