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
        if (window.innerWidth <= 600) item.classList.add("touch-active");
    });
    item.addEventListener("touchmove", () => {
        if (window.innerWidth <= 600) item.classList.add("touch-active");
    });
    item.addEventListener("touchend", () => item.classList.remove("touch-active"));
    item.addEventListener("touchcancel", () => item.classList.remove("touch-active"));
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
   COLORE DOMINANTE PER LE IMMAGINI
========================= */
function getDominantColor(img, callback) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0, g = 0, b = 0, count = 0;
    for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i+1];
        b += data[i+2];
        count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    callback(`rgb(${r},${g},${b})`);
}

items.forEach(item => {
    const img = item.querySelector("img");

    if (img.complete) {
        getDominantColor(img, color => item.style.backgroundColor = color);
    } else {
        img.addEventListener("load", () => {
            getDominantColor(img, color => item.style.backgroundColor = color);
        });
    }
});
