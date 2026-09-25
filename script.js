// =========================================================
// Ford Ingenious Minds Academy 2026 - Script
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  // Animación simple de aparición al hacer scroll
  const revealElements = document.querySelectorAll(
    ".intro, .featured-image, .cta, .pdf-banner-section, .videos-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
  });

  // Cuando el elemento se vuelve visible, se restaura su estado
  const style = document.createElement("style");
  style.innerHTML = `
    .is-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // Log informativo para verificar que el botón de registro tenga el link correcto
  const registerBtn = document.querySelector(".btn-register");
  if (registerBtn && registerBtn.href.includes("REEMPLAZAR-CON-EL-LINK-DEL-FORMULARIO")) {
    console.warn(
      "⚠️ Recuerda actualizar el enlace del botón 'Registra tu idea' con el link real del formulario de Microsoft Forms."
    );
  }

});
