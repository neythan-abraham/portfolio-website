// Typing effect for the terminal hero line
const messages = [
  "whoami",
  "Neythan Abraham — CS student, Monash University",
  "cat interests.txt",
  "Data Science, AI, Problem Solving"
];

const typedEl = document.getElementById('typed-line');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeLoop() {
  if (!typedEl) return;

  if (prefersReducedMotion) {
    typedEl.textContent = messages[1];
    return;
  }

  let msgIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = messages[msgIndex];

    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
      }
    }

    setTimeout(tick, deleting ? 35 : 55);
  }

  tick();
}

typeLoop();
