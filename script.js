document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
      sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
              section.style.opacity = "1";
              section.style.transform = "translateY(0)";
          }
      });
  };

  window.addEventListener("scroll", revealSection);

  // Inicializa las secciones con estilo oculto
  sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Revela las secciones que ya están visibles al cargar
  revealSection();
});

const contactLinks = document.querySelectorAll(".contact a");

contactLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
      const tooltip = document.createElement("span");
      tooltip.textContent = `Abrir ${link.textContent}`;
      tooltip.style.position = "absolute";
      tooltip.style.backgroundColor = "#000";
      tooltip.style.color = "#fff";
      tooltip.style.padding = "5px";
      tooltip.style.borderRadius = "5px";
      tooltip.style.fontSize = "12px";
      tooltip.style.top = `${link.getBoundingClientRect().top - 30}px`;
      tooltip.style.left = `${link.getBoundingClientRect().left}px`;
      tooltip.style.zIndex = "1000";
      tooltip.classList.add("tooltip");
      document.body.appendChild(tooltip);
  });

  link.addEventListener("mouseout", () => {
      document.querySelector(".tooltip").remove();
  });
});

document.getElementById("print-cv").addEventListener("click", () => {
  window.print();
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
