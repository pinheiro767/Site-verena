// Ano no rodapé
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile (só se existir na página)
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Cards accordion (só se existirem)
document.querySelectorAll("[data-accordion]").forEach((card) => {
  const head = card.querySelector(".card-head");
  const body = card.querySelector(".card-body");
  const chev = card.querySelector(".chev");

  if (!head || !body) return;

  // começa fechado
  body.style.display = "none";

  head.addEventListener("click", () => {
    const isOpen = body.style.display === "block";
    body.style.display = isOpen ? "none" : "block";
    if (chev) chev.textContent = isOpen ? "⌄" : "⌃";
  });
});