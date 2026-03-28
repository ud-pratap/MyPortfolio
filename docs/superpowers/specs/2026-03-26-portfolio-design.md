# Portfolio Website — Design Spec
**Date:** 2026-03-26

---

## Overview

A personal portfolio website for a Principal Product Manager targeting recruiters and hiring managers. The goal is to support a job search for principal PM roles. The site is a polished, minimal, professional web presence — a step above a resume, not a creative showcase.

---

## Audience & Goal

- **Primary audience:** Recruiters and hiring managers
- **Goal:** Land a new Principal Product Manager job
- **User behavior:** Recruiters spend seconds per candidate — the design must be fast to scan and hard to get wrong

---

## Architecture

- **Structure:** Single-page scrolling site
- **Navigation:** Sticky top nav bar with anchor links — About, Experience, Education, Skills, Contact
- **Scroll behavior:** Smooth scroll to section anchors on nav click
- **Tech stack:** Plain HTML, CSS, minimal vanilla JS (no framework required)
- **Responsive:** Mobile-first, fully responsive

---

## Visual Design

References `design-brief.md` in the project root for all aesthetic decisions.

### Typography
- **Display / headings:** Playfair Display — editorial authority, used for name and section headings
- **Body / UI:** Neue Montreal — versatile grotesque, used for all body text and nav

### Color Palette
- **Background:** Warm off-white `#F8F5F0` (not pure white)
- **Text:** Near-black `#1A1A1A` (not pure black)
- **Accent:** Deep teal — used sparingly for links, CTAs, and focal points
- **No dark mode** — light-only for a clean professional document feel

### Layout Principles
- Sections vary in composition — no uniform card grid throughout
- About: asymmetric two-column (text left, photo right)
- Experience: vertical timeline
- Skills: flat tag/pill layout
- Asymmetry and intentional negative space over template symmetry

### Texture & Depth
- Subtle grain overlay on the hero/About section to avoid the flat AI-smooth aesthetic
- Minimal shadow use, consistent with a single light source

---

## Sections

### 1. Hero / About
- Full-width strip
- Content: name, title ("Principal Product Manager"), 2–3 sentence bio, headshot (placeholder)
- Layout: asymmetric — text left, photo right

### 2. Experience
- Vertical timeline, most recent role first
- Each entry: company name, job title, date range, 3–5 impact-focused bullet points
- No decorative elements — content carries the section

### 3. Education
- Compact two-column grid
- Each entry: institution, degree, graduation year
- No extra decoration

### 4. Skills
- Flat pill/tag list
- Grouped by category (e.g., Product Strategy, Stakeholder Management, Tools)
- No skill bars, percentages, or star ratings — these read as noise to recruiters

### 5. Contact
- Email address
- LinkedIn URL
- Optional short CTA line (e.g., "Open to principal PM roles starting Q3 2026")

---

## Copy & Voice

- Tone: clean, professional, minimal — lets credentials speak
- Avoid: buzzwords, filler phrases ("passionate about", "proven track record"), skill percentages
- Every line should be specific and credible

---

## Out of Scope

- Blog or writing section
- Case studies / project deep-dives
- Dark mode
- Animations beyond smooth scroll
- Contact form (email link is sufficient)

---

## Success Criteria

- A recruiter can read the full page in under 90 seconds
- All key information (name, current/target title, top experience, contact) is visible without horizontal scrolling on any device
- The design has a point of view — it does not look like a generic template
