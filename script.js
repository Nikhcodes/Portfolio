// Smooth scrolling
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Cursor glow
const cursor = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Fade-in section animation
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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });

  // Skill bar animation
  document.querySelectorAll(".skill-bar").forEach((bar) => {
    skillObserver.observe(bar);
  });
});

// Social links
function openEmail() {
  window.location.href = "mailto:nikhiel.lingard.dev@gmail.com";
}

function openGitHub() {
  window.open("https://github.com/Nikhcodes", "_blank");
}

function openLinkedIn() {
  window.open("https://linkedin.com/in/nikhiel-lingard", "_blank");
}

// Skill bar fill animation
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector(".skill-progress");
        bar.style.width = entry.target.dataset.level;
      }
    });
  },
  { threshold: 0.5 }
);
