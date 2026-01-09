const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Update active link
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Show matching section
    const targetId = link.getAttribute('data-target');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  });
});
