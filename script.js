document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Smooth scrolling
  // =========================
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // =========================
  // Cursor glow
  // =========================
  const cursor = document.querySelector(".cursor-glow");
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }
  });

  // =========================
  // Fade-in section animation
  // =========================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
  );

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });

  // =========================
  // Skill bar fill animation
  // =========================
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector(".skill-progress");
          if (bar && entry.target.dataset.level) {
            bar.style.width = entry.target.dataset.level;
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".skill-bar").forEach((bar) => {
    skillObserver.observe(bar);
  });

  // =========================
  // Social links
  // =========================
  window.openGitHub = function () {
    window.open("https://github.com/Nikhcodes", "_blank");
  };

  window.openLinkedIn = function () {
    window.open("https://www.linkedin.com/in/nikhiel-lingard-88b3a4311/", "_blank");
  };

  window.openEmail = function () {
    window.location.href = "mailto:nikhiel.lingard.dev@gmail.com";
  };

  // =========================
  // Expose scrolling functions globally (for nav onclick)
  // =========================
  window.scrollToSection = scrollToSection;
  window.scrollToTop = scrollToTop;

});
