document.addEventListener('DOMContentLoaded', () => {
  // ---------- THEME SWITCHER (Midnight vs Obsidian) ----------
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const logoIcon = document.getElementById('logo-icon');

  function updateTheme(theme) {
    if (theme === 'theme-obsidian') {
      body.classList.remove('theme-midnight');
      body.classList.add('theme-obsidian');
      if (themeToggle) themeToggle.textContent = '🌲';
      if (logoIcon) {
        logoIcon.classList.remove('from-indigo-500', 'to-sky-500');
        logoIcon.classList.add('from-emerald-600', 'to-teal-500');
      }
    } else {
      body.classList.remove('theme-obsidian');
      body.classList.add('theme-midnight');
      if (themeToggle) themeToggle.textContent = '🌌';
      if (logoIcon) {
        logoIcon.classList.remove('from-emerald-600', 'to-teal-500');
        logoIcon.classList.add('from-indigo-500', 'to-sky-500');
      }
    }
    localStorage.setItem('portfolio-theme', theme);
  }

  // Load saved theme or default to midnight
  const savedTheme = localStorage.getItem('portfolio-theme') || 'theme-midnight';
  updateTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.classList.contains('theme-midnight') ? 'theme-obsidian' : 'theme-midnight';
      updateTheme(currentTheme);
    });
  }

  // ---------- REVEAL ON SCROLL ----------
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---------- NAVBAR SCROLL EFFECT ----------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('py-2', 'bg-opacity-90', 'shadow-2xl');
      navbar.classList.remove('py-4', 'bg-opacity-100');
    } else {
      navbar.classList.remove('py-2', 'bg-opacity-90', 'shadow-2xl');
      navbar.classList.add('py-4', 'bg-opacity-100');
    }
  });
});
