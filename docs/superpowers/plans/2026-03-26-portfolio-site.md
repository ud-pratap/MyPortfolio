# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page personal portfolio site for a Principal Product Manager that recruiters can scan in under 90 seconds.

**Architecture:** Plain HTML/CSS/JS — no build tooling, no frameworks. One `index.html`, one `styles.css`, one `main.js`. All sections live on a single scrollable page with a sticky nav. Content is placeholder — the owner will replace it.

**Tech Stack:** HTML5, CSS3 (custom properties, clamp(), container queries), vanilla JS (scroll behavior only), Google Fonts (Playfair Display + Bricolage Grotesque as free alternative to Neue Montreal)

> **Font note:** Neue Montreal is a paid typeface. This plan uses **Bricolage Grotesque** from Google Fonts as the body font — same design-brief category (grotesque with warmth and personality), no license cost. Swap it for Neue Montreal later if you acquire a license.

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | All HTML structure — nav, five sections, semantic markup |
| `styles.css` | All visual styles — tokens, layout, typography, components, responsive |
| `main.js` | Active nav highlight on scroll; nothing else |
| `assets/headshot-placeholder.svg` | Gray placeholder SVG used until a real photo is dropped in |

---

## Task 1: Project Scaffold

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `main.js`
- Create: `assets/headshot-placeholder.svg`

- [ ] **Step 1: Create the placeholder headshot SVG**

Create `assets/headshot-placeholder.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
  <rect width="320" height="320" fill="#D9D4CC"/>
  <circle cx="160" cy="130" r="55" fill="#B8B0A6"/>
  <ellipse cx="160" cy="290" rx="90" ry="70" fill="#B8B0A6"/>
</svg>
```

- [ ] **Step 2: Create `styles.css` with design tokens only**

```css
/* ============================================================
   DESIGN TOKENS
   ============================================================ */
:root {
  /* Colors */
  --color-bg:           #F8F5F0;
  --color-text:         #1A1A1A;
  --color-text-muted:   #6B6560;
  --color-accent:       #0D7377;
  --color-accent-hover: #0A5F62;
  --color-border:       #E0DAD3;
  --color-surface:      #F0EBE4;

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Bricolage Grotesque', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* Spacing (8px base grid) */
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-6:  48px;
  --space-8:  64px;
  --space-12: 96px;
  --space-16: 128px;

  /* Radius hierarchy */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  /* Nav height (used for scroll offset) */
  --nav-height: 64px;
}
```

- [ ] **Step 3: Create `main.js` as an empty file with a comment**

```js
// Active nav link highlight — populated in Task 7
```

- [ ] **Step 4: Create `index.html` shell linking all assets**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name — Principal Product Manager</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Scaffold OK</p>
  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 5: Open `index.html` in a browser and confirm "Scaffold OK" renders in Bricolage Grotesque**

Open the file directly: `File > Open` in any browser, or drag `index.html` onto a browser tab. Check DevTools → Elements → Computed → font-family to confirm the Google Font loaded.

- [ ] **Step 6: Commit**

```bash
git init
git add index.html styles.css main.js assets/headshot-placeholder.svg
git commit -m "feat: project scaffold with design tokens and font loading"
```

---

## Task 2: Global Base Styles + Nav

**Files:**
- Modify: `styles.css`
- Modify: `index.html`

- [ ] **Step 1: Add CSS reset and base styles to `styles.css`** (append after tokens block)

```css
/* ============================================================
   RESET & BASE
   ============================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: clamp(1rem, 0.5rem + 1vw, 1.125rem);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--color-accent);
  text-decoration: none;
}

a:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}

h1, h2, h3 {
  font-family: var(--font-display);
  line-height: 1.2;
  font-weight: 500;
}

img {
  max-width: 100%;
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.01ms !important; }
}
```

- [ ] **Step 2: Add nav styles to `styles.css`** (append after base block)

```css
/* ============================================================
   NAVIGATION
   ============================================================ */
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(248, 245, 240, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 var(--space-4);
}

.nav-inner {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-text);
  letter-spacing: 0.01em;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: var(--space-4);
}

.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-muted);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--color-accent);
  text-decoration: none;
}

/* Mobile: hide nav links, show hamburger placeholder */
@media (max-width: 600px) {
  .nav-links {
    display: none;
  }
}
```

- [ ] **Step 3: Replace `<body>` content in `index.html` with the nav**

```html
<body>

  <nav class="site-nav" aria-label="Main navigation">
    <div class="nav-inner">
      <span class="nav-name">Your Name</span>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <!-- sections go here -->
  </main>

  <script src="main.js"></script>
</body>
```

- [ ] **Step 4: Open in browser and verify**

- Nav sticks at top when you scroll
- Glassmorphism blur is visible (put some text below the nav to scroll past)
- On a window narrower than 600px the nav links disappear

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css
git commit -m "feat: sticky glassmorphism nav with responsive hide"
```

---

## Task 3: Hero / About Section

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

- [ ] **Step 1: Add About section HTML inside `<main>` in `index.html`**

```html
<section id="about" class="section-about">
  <!-- Grain texture overlay (CSS pseudo-element, no extra markup needed) -->
  <div class="about-inner">
    <div class="about-text">
      <p class="about-label">Principal Product Manager</p>
      <h1 class="about-name">Your Name</h1>
      <p class="about-bio">
        I've spent the last ten years turning ambiguous problems into shipping products.
        Most recently at [Company], leading a team of five PMs across [area].
        I care about the craft of product work — the strategy, the writing, the decisions that don't show up on a roadmap.
      </p>
      <a href="#contact" class="about-cta">Get in touch</a>
    </div>
    <div class="about-photo">
      <img src="assets/headshot-placeholder.svg" alt="Photo of Your Name" width="280" height="280">
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add About section styles to `styles.css`**

```css
/* ============================================================
   ABOUT / HERO
   ============================================================ */
.section-about {
  position: relative;
  padding: var(--space-16) var(--space-4) var(--space-12);
  overflow: hidden;
}

/* Grain texture overlay */
.section-about::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.about-inner {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: var(--space-8);
  align-items: center;
}

.about-label {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-2);
}

.about-name {
  font-size: clamp(2.5rem, 2rem + 3vw, 4rem);
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.about-bio {
  font-size: clamp(1rem, 0.75rem + 0.8vw, 1.125rem);
  color: var(--color-text-muted);
  max-width: 52ch;
  margin-bottom: var(--space-4);
  line-height: 1.75;
}

.about-cta {
  display: inline-block;
  padding: 10px 24px;
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: background 0.15s ease;
}

.about-cta:hover {
  background: var(--color-accent-hover);
  text-decoration: none;
  color: #fff;
}

.about-photo img {
  border-radius: var(--radius-lg);
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

/* Responsive: stack on mobile */
@media (max-width: 700px) {
  .about-inner {
    grid-template-columns: 1fr;
  }
  .about-photo {
    order: -1;
    max-width: 160px;
  }
}
```

- [ ] **Step 3: Open in browser and verify**

- Name renders in Playfair Display, large
- Bio is in Bricolage Grotesque, muted color
- Photo placeholder is on the right on desktop, above on mobile
- Grain texture is subtly visible on the background
- "Get in touch" button is teal

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: hero/about section with grain texture and asymmetric layout"
```

---

## Task 4: Experience Section

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

- [ ] **Step 1: Add Experience HTML to `<main>` in `index.html`** (after `section-about`)

```html
<section id="experience" class="section-content">
  <div class="content-inner">
    <h2 class="section-heading">Experience</h2>

    <div class="timeline">

      <article class="timeline-entry">
        <div class="timeline-meta">
          <span class="timeline-company">Company Name</span>
          <span class="timeline-dates">2021 — Present</span>
        </div>
        <div class="timeline-body">
          <h3 class="timeline-role">Principal Product Manager</h3>
          <ul class="timeline-bullets">
            <li>Led product strategy for [area], growing [metric] by X% over 18 months.</li>
            <li>Managed a team of 5 PMs, establishing the quarterly planning process used across the org.</li>
            <li>Shipped [major feature] used by [N] customers, reducing [problem] by X%.</li>
            <li>Partnered with Engineering and Design to halve time-to-market for new features.</li>
          </ul>
        </div>
      </article>

      <article class="timeline-entry">
        <div class="timeline-meta">
          <span class="timeline-company">Previous Company</span>
          <span class="timeline-dates">2017 — 2021</span>
        </div>
        <div class="timeline-body">
          <h3 class="timeline-role">Senior Product Manager</h3>
          <ul class="timeline-bullets">
            <li>Owned the [product area] roadmap end-to-end, from discovery through launch.</li>
            <li>Launched [feature] that became the #1 driver of new user activation.</li>
            <li>Defined the data model and API contracts for a platform used by 12 internal teams.</li>
          </ul>
        </div>
      </article>

      <article class="timeline-entry">
        <div class="timeline-meta">
          <span class="timeline-company">Earlier Company</span>
          <span class="timeline-dates">2014 — 2017</span>
        </div>
        <div class="timeline-body">
          <h3 class="timeline-role">Product Manager</h3>
          <ul class="timeline-bullets">
            <li>First PM hire. Built the product process from scratch alongside a 6-person engineering team.</li>
            <li>Shipped [product] from 0 to [N] paying customers in 14 months.</li>
          </ul>
        </div>
      </article>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add shared section layout styles + Experience styles to `styles.css`**

```css
/* ============================================================
   SHARED SECTION LAYOUT
   ============================================================ */
.section-content {
  padding: var(--space-12) var(--space-4);
  border-top: 1px solid var(--color-border);
}

.content-inner {
  max-width: 900px;
  margin: 0 auto;
}

.section-heading {
  font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);
  font-weight: 400;
  margin-bottom: var(--space-8);
  color: var(--color-text);
}

/* ============================================================
   EXPERIENCE TIMELINE
   ============================================================ */
.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.timeline-entry {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-4);
}

.timeline-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
}

.timeline-company {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-text);
}

.timeline-dates {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
}

.timeline-role {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.timeline-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.timeline-bullets li {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  padding-left: var(--space-2);
  border-left: 2px solid var(--color-border);
}

@media (max-width: 600px) {
  .timeline-entry {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }
}
```

- [ ] **Step 3: Open in browser and verify**

- Three experience entries render in a two-column timeline layout
- Company name is on the left, role + bullets on the right
- Bullets have a left border accent
- Stacks to single column on mobile

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: experience section with two-column timeline layout"
```

---

## Task 5: Education Section

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

- [ ] **Step 1: Add Education HTML to `<main>` in `index.html`** (after experience section)

```html
<section id="education" class="section-content section-education">
  <div class="content-inner">
    <h2 class="section-heading">Education</h2>
    <div class="education-grid">

      <div class="education-entry">
        <span class="education-institution">University Name</span>
        <span class="education-degree">B.S. Computer Science</span>
        <span class="education-year">2014</span>
      </div>

      <div class="education-entry">
        <span class="education-institution">Another University</span>
        <span class="education-degree">M.B.A.</span>
        <span class="education-year">2017</span>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Education styles to `styles.css`**

```css
/* ============================================================
   EDUCATION
   ============================================================ */
.section-education {
  background: var(--color-surface);
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
}

.education-entry {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg);
}

.education-institution {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-text);
}

.education-degree {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
}

.education-year {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
  margin-top: 2px;
}
```

- [ ] **Step 3: Open in browser and verify**

- Education section has a slightly different background (`--color-surface`) — visible contrast with adjacent sections
- Two education entries render side by side on desktop
- Stack to single column on narrow screens

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: education section with surface-tinted background"
```

---

## Task 6: Skills Section

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

- [ ] **Step 1: Add Skills HTML to `<main>` in `index.html`** (after education section)

```html
<section id="skills" class="section-content">
  <div class="content-inner">
    <h2 class="section-heading">Skills</h2>

    <div class="skills-groups">

      <div class="skills-group">
        <h3 class="skills-group-label">Product Strategy</h3>
        <div class="skills-pills">
          <span class="pill">Product Vision</span>
          <span class="pill">Roadmapping</span>
          <span class="pill">OKR Planning</span>
          <span class="pill">Go-to-Market</span>
          <span class="pill">Pricing Strategy</span>
        </div>
      </div>

      <div class="skills-group">
        <h3 class="skills-group-label">Stakeholder Management</h3>
        <div class="skills-pills">
          <span class="pill">Executive Communication</span>
          <span class="pill">Cross-functional Alignment</span>
          <span class="pill">Customer Discovery</span>
          <span class="pill">Data-driven Prioritization</span>
        </div>
      </div>

      <div class="skills-group">
        <h3 class="skills-group-label">Tools &amp; Methods</h3>
        <div class="skills-pills">
          <span class="pill">Figma</span>
          <span class="pill">SQL</span>
          <span class="pill">Amplitude</span>
          <span class="pill">Jira</span>
          <span class="pill">Linear</span>
          <span class="pill">Notion</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Skills styles to `styles.css`**

```css
/* ============================================================
   SKILLS
   ============================================================ */
.skills-groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.skills-group-label {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.skills-pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.pill {
  display: inline-block;
  padding: 6px 14px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  color: var(--color-text);
  white-space: nowrap;
}
```

- [ ] **Step 3: Open in browser and verify**

- Three skill groups render with category labels above pill rows
- Pills wrap naturally when the window is narrow
- No percentages, bars, or rating indicators — flat text pills only

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: skills section with grouped pill tags"
```

---

## Task 7: Contact Section + Active Nav JS

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `main.js`

- [ ] **Step 1: Add Contact HTML to `<main>` in `index.html`** (after skills section)

```html
<section id="contact" class="section-content section-contact">
  <div class="content-inner">
    <h2 class="section-heading">Contact</h2>
    <p class="contact-cta-line">Open to principal PM roles starting Q3 2026.</p>
    <ul class="contact-list">
      <li>
        <span class="contact-label">Email</span>
        <a href="mailto:your@email.com" class="contact-value">your@email.com</a>
      </li>
      <li>
        <span class="contact-label">LinkedIn</span>
        <a href="https://linkedin.com/in/yourhandle" class="contact-value" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourhandle</a>
      </li>
    </ul>
  </div>
</section>

<footer class="site-footer">
  <div class="content-inner">
    <p>Your Name &mdash; Principal Product Manager</p>
  </div>
</footer>
```

- [ ] **Step 2: Add Contact and Footer styles to `styles.css`**

```css
/* ============================================================
   CONTACT
   ============================================================ */
.section-contact {
  background: var(--color-surface);
}

.contact-cta-line {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
  font-style: italic;
}

.contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-list li {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.contact-label {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  min-width: 80px;
}

.contact-value {
  font-size: 1rem;
  color: var(--color-accent);
}

/* ============================================================
   FOOTER
   ============================================================ */
.site-footer {
  padding: var(--space-4);
  border-top: 1px solid var(--color-border);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
```

- [ ] **Step 3: Write the active nav JS in `main.js`**

```js
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
```

- [ ] **Step 4: Open in browser and verify the full page end-to-end**

Walk through this checklist:

- [ ] Scroll slowly from top to bottom — nav active link updates for each section
- [ ] Clicking a nav link smooth-scrolls to that section and the section is not hidden behind the nav
- [ ] Contact email link opens your mail client
- [ ] LinkedIn link opens in a new tab
- [ ] Resize window to 375px wide — all content readable, no horizontal scroll
- [ ] Footer visible at page bottom

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css main.js
git commit -m "feat: contact section, footer, active nav highlight on scroll"
```

---

## Task 8: Pre-delivery Checklist & Final Polish

**Files:**
- Modify: `styles.css` (minor tweaks only if checklist items fail)
- Modify: `index.html` (title tag update)

Walk through every item in `design-brief.md`'s Pre-Delivery Checklist. For each failure, the fix is noted below.

- [ ] **Step 1: Font check**
  - Open DevTools → Elements → Computed. Confirm body font is `Bricolage Grotesque`, headings are `Playfair Display`.
  - Fix if failing: hard-reload with Cmd/Ctrl+Shift+R to bust font cache.

- [ ] **Step 2: No purple-to-blue gradient**
  - Visually confirm. There is no gradient in this design. Should pass automatically.

- [ ] **Step 3: Background is not pure white**
  - Confirm `--color-bg: #F8F5F0` is rendering (not white). Use DevTools color picker on the body background.

- [ ] **Step 4: Layout varies between sections**
  - Confirm: About = two-column asymmetric, Experience = timeline, Education = surface-tinted grid, Skills = pills, Contact = list. Five different compositions. Should pass.

- [ ] **Step 5: Border-radius varies by element scale**
  - Buttons/CTAs use `--radius-sm` (4px). Cards (education entries) use `--radius-md` (8px). Should pass.

- [ ] **Step 6: At least one texture/depth element**
  - Confirm the grain overlay is visible in the About section. If too subtle, increase the SVG noise opacity from `0.04` to `0.06` in the `section-about::before` CSS.

- [ ] **Step 7: Copy uses specific language**
  - Read every bullet in Experience. Each must name a real metric, outcome, or number. Replace any placeholder text before going live.

- [ ] **Step 8: Animations respect `prefers-reduced-motion`**
  - The `@media (prefers-reduced-motion: reduce)` block in the base styles disables scroll behavior. Verify it's present in `styles.css`.

- [ ] **Step 9: Update `<title>` in `index.html`**

Change:
```html
<title>Your Name — Principal Product Manager</title>
```
To your actual name before going live. This is a placeholder — the pattern is correct.

- [ ] **Step 10: Final commit**

```bash
git add index.html styles.css
git commit -m "chore: pre-delivery checklist pass, ready for content"
```

---

## Replacing Placeholder Content

After the site is built, replace these placeholders before sharing with recruiters:

| Placeholder | Where | Replace with |
|-------------|-------|-------------|
| `Your Name` | `index.html` (nav, about, footer, `<title>`) | Your actual name |
| `Principal Product Manager` (label) | `index.html` about section | Your actual title |
| About bio paragraph | `index.html` | 2–3 sentences, specific and credible |
| `assets/headshot-placeholder.svg` | `index.html` img src | A real headshot (JPG/WebP, ~400×400px) |
| Company names, roles, dates, bullets | `index.html` experience entries | Your actual work history |
| Education entries | `index.html` | Your actual degrees |
| Skill pills | `index.html` | Your actual skills |
| `your@email.com` | `index.html` contact | Your actual email |
| `yourhandle` | `index.html` LinkedIn href | Your actual LinkedIn slug |
| `Q3 2026` | `index.html` contact CTA line | Adjust or remove |
