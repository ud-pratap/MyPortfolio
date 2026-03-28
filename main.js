// Theme toggle (dark/light)
(function () {
  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function applyTheme(theme) {
    if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
      toggle.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      html.removeAttribute('data-theme');
      toggle.setAttribute('aria-label', 'Switch to light mode');
    }
  }

  // Sync aria-label with the state already set by the anti-FOUC inline script
  applyTheme(html.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
})();

// Hamburger menu toggle
(function () {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
  });

  // Close on nav link click
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMenu();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) closeMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

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

// Section fade-in animations
(function () {
  const sections = document.querySelectorAll('.section-reveal');
  if (!sections.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach((s) => s.classList.add('is-visible'));
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
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach((s) => observer.observe(s));
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
