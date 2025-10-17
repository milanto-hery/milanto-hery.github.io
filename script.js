const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // deactivate all
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // activate clicked
    button.classList.add("active");
    document.getElementById(button.dataset.section).classList.add("active");
  });
});
