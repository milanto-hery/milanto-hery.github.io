// Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Optional: smooth fade for project cards on hover
const projects = document.querySelectorAll(".project");
projects.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-6px)";
        card.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 15px 40px rgba(0,0,0,0.06)";
    });
});
