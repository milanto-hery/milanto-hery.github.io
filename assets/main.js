// ---------- REVEAL ON SCROLL ----------
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ---------- DARK MODE TOGGLE ----------
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// ---------- PAGE TRANSITION (simple fade) ----------
window.addEventListener('pageshow', () => {
  document.body.classList.add('fade-in');
});
