// =========================
// HAMBURGER MENU MOBILE
// =========================
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// =========================
// GESTIONE FORM
// =========================
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    formMessage.style.display = 'block';
    formMessage.style.color = 'green';
    formMessage.textContent = "Messaggio inviato! Grazie per avermi contattato.";
});

