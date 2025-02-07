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

    // Intersection Observer to reveal sections when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(section);
    });

    // Reveal sections already visible on load
    revealSection();

    const contactLinks = document.querySelectorAll(".contact a");

    contactLinks.forEach((link) => {
        link.addEventListener("mouseover", (event) => {
            const tooltip = document.createElement("span");
            tooltip.textContent = `Abrir ${link.textContent}`;
            tooltip.classList.add("tooltip");
            
            document.body.appendChild(tooltip);
            const rect = link.getBoundingClientRect();

            tooltip.style.position = "absolute";
            tooltip.style.backgroundColor = "#000";
            tooltip.style.color = "#fff";
            tooltip.style.padding = "5px";
            tooltip.style.borderRadius = "5px";
            tooltip.style.fontSize = "12px";
            tooltip.style.zIndex = "1000";
            tooltip.style.top = `${rect.top + window.scrollY - 30}px`;
            tooltip.style.left = `${rect.left}px`;

            link.dataset.tooltipId = tooltip;
        });

        link.addEventListener("mouseout", () => {
            document.querySelector(".tooltip")?.remove();
        });
    });

    document.getElementById("print-cv").addEventListener("click", () => {
        window.print();
    });

    document.getElementById("toggle-theme").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    const title = document.getElementById("presentation-title");
    const letter = document.getElementById("cover-letter");

    let coverTimeout;

    title.addEventListener("mouseover", () => {
        clearTimeout(coverTimeout);
        letter.style.display = "block";
        setTimeout(() => {
            letter.style.opacity = "1";
        }, 10);
    });

    title.addEventListener("mouseout", () => {
        letter.style.opacity = "0";
        coverTimeout = setTimeout(() => {
            letter.style.display = "none";
        }, 500);
    });
});
