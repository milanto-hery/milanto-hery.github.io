// ---------- REVEAL ON SCROLL ----------
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ---------- DARK MODE TOGGLE ----------
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    // Save preference
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  if (themeToggle) themeToggle.textContent = '☀️';
}

// ---------- READ MORE FADE LOGIC ----------
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.previousElementSibling;
    if (container && container.classList.contains('text-fade-container')) {
      const isExpanded = container.classList.toggle('expanded');
      button.innerHTML = isExpanded ? 'Read Less &uarr;' : 'Read More &rarr;';
    }
  });
});
