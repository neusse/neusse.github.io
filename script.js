const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const hero = document.querySelector(".hero");

window.addEventListener(
  "scroll",
  () => {
    if (!hero) return;
    const offset = Math.min(window.scrollY * 0.08, 36);
    hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
  },
  { passive: true }
);
