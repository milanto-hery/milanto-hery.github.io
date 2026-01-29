// Optional: floating shapes animation already handled by CSS
// Reveal sections (if any extra scroll animation desired)
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if(elementTop < windowHeight - revealPoint){
      el.classList.add('active');
    }
  });
});
