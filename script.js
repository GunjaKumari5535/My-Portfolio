// DARK MODE TOGGLE
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// SCROLL TO TOP BUTTON
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
