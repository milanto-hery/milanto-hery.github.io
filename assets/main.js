/* =========================
   REVEAL ON SCROLL
========================= */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${id}`
                );
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => sectionObserver.observe(section));
