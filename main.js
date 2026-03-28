// Highlight the nav link whose section is currently in the viewport
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function getActiveId() {
    const scrollY = window.scrollY;
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    );
    let activeId = sections[0].id;

    sections.forEach((section) => {
      if (section.offsetTop - navHeight - 16 <= scrollY) {
        activeId = section.id;
      }
    });

    return activeId;
  }

  function updateNav() {
    const activeId = getActiveId();
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // set initial state
})();

// Career timeline scroll-reveal animations
(function () {
  const nodes = document.querySelectorAll('.career-node');
  if (!nodes.length) return;

  // Immediately reveal all nodes if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  nodes.forEach((node, i) => {
    node.style.transitionDelay = (i * 0.12) + 's';
    observer.observe(node);
  });
})();
