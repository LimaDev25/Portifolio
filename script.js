// Animação simples de entrada para as seções
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});

// Efeito CSS (adicione no style.css se quiser):
// .fade-in { opacity: 0; transform: translateY(20px); }
// .fade-in.visible { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease; }
