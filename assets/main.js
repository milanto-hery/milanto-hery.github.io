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

// ---------- READ MORE (AUTO HEIGHT MATCH IMAGE) ----------
document.querySelectorAll(".about-block").forEach(block => {
  const img = block.querySelector(".about-image img");
  const text = block.querySelector(".about-text");
  const btn = block.querySelector(".read-more");

  if (!img || !text || !btn) return;

  // wait until image loads to get correct height
  const applyClamp = () => {
    const imgHeight = img.clientHeight;
    text.style.maxHeight = imgHeight + "px";
    text.classList.add("collapsed");
  };

  if (img.complete) {
    applyClamp();
  } else {
    img.onload = applyClamp;
  }

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";

    if (expanded) {
      applyClamp();
      btn.textContent = "Read more";
      btn.setAttribute("aria-expanded", "false");
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
      text.classList.remove("collapsed");
      btn.textContent = "Read less";
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

document.querySelectorAll(".project").forEach(card => {
  const img = card.querySelector("img");
  const text = card.querySelector(".project-text");
  const btn = card.querySelector(".project-read-more");

  function syncHeight() {
    text.style.maxHeight = img.clientHeight + "px";
  }

  if (img.complete) syncHeight();
  else img.onload = syncHeight;

  btn.addEventListener("click", () => {
    const expanded = card.classList.toggle("expanded");

    if (expanded) {
      text.style.maxHeight = text.scrollHeight + "px";
      btn.textContent = "Read less";
    } else {
      syncHeight();
      btn.textContent = "Read more";
    }
  });
});

