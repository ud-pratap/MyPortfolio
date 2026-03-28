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
