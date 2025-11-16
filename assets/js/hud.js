// assets/js/hud.js
// small HUD helpers: subtle reveal on scroll for hud-card and small accent pulses

document.addEventListener('DOMContentLoaded', function () {
  // Reveal on scroll: add .is-visible when element appears
  const revealElements = document.querySelectorAll('.hud-card, .project-item');

  const onEntry = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, { threshold: 0.12 });
  revealElements.forEach(el => observer.observe(el));

  // subtle accent pulse: rotate CSS variable by toggling class
  const pulses = document.querySelectorAll('.hud-card');
  setInterval(() => {
    pulses.forEach((el, i) => {
      el.classList.toggle('pulse-'+(i%3));
      // classes can be used to trigger CSS keyframes if desired
    });
  }, 4200);
});