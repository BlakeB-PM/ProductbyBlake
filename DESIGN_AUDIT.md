# UX/Design Audit: Blake Beal Portfolio v2

**Prepared by:** Senior Product Design Review  
**Date:** January 2026  
**Scope:** Structural improvements to communicate "Product Manager + Builder" identity  
**Constraint:** No changes to color palette, theme, or typography

---

## Executive Summary

The current portfolio has strong bones—clean typography, intentional spacing, and solid content. However, the structure dilutes rather than amplifies the core narrative: **Blake is a PM who builds.**

The key issues:

1. **Proof comes too late.** The metrics (6x, 3x, 83%) are buried below the fold and visually subordinate to the headline.
2. **The zigzag timeline creates cognitive load** rather than communicating career velocity.
3. **Projects and Experience compete** rather than complement—there's no clear story of "what I achieved" → "how I built it."
4. **The primary CTA undersells the journey.** "See what I've built" sounds like a side hustle, not a portfolio of serious technical work.

---

## 1. Hero Section Hierarchy

### Current State

```
Hi, I'm Blake.
Product Manager. Builder.
[Subheadline paragraph]
[Stats row: 6x | 3x | 83%]
[CTAs]
```

**Issues:**
- The stats row is visually subordinate—small type, no emphasis, treated as supporting content.
- The headline "Product Manager. Builder." makes the claim, but the proof (the metrics) is 3 visual layers down.
- The subheadline competes with the stats for attention.

### Proposed Structure

```
Hi, I'm Blake.
Product Manager. Builder.

┌─────────────────────────────────────────────────────┐
│  6x              3x              53%                │
│  ARR Growth      User            PMF Score          │
│                  Productivity    (from 12%)         │
└─────────────────────────────────────────────────────┘

[Subheadline - condensed]
[CTAs]
```

**Specific Changes:**

| Element | Current | Proposed |
|---------|---------|----------|
| Stats size | `text-2xl/3xl` | `text-4xl/5xl` — make them the visual anchor |
| Stats container | Inline row, no background | Full-width card with subtle `bg-ink-50` and `border-ink-100` |
| Stats label | Below the number | Inline or stacked, with context (e.g., "53% PMF (from 12%)") |
| Subheadline | 3 lines, detailed | 1-2 lines max. Move details to About section |
| Visual weight | Headline > Stats | Headline = Stats (dual anchors) |

**Rationale:** When a hiring manager lands on this page, the numbers should hit before they even read the headline. The stats *are* the headline. "Builder" is a claim—6x growth is proof.

---

## 2. Experience Timeline: Information Density & Scannability

### Current State

The alternating zigzag layout:
- Forces the eye to jump left-right-left across the page
- Creates wasted whitespace (empty columns on each row)
- Hides career progression—the visual doesn't show growth, just alternation

### Proposed Structure: Single-Column Vertical Timeline

```
EXPERIENCE
Where I've worked

────────────────────────────────────────────────────
│
● ConstructConnect · July 2024 – Present
│ Product Manager → Senior Product Manager, AI
│ 2,000+ employees | >$180M revenue
│ → Scaled AI takeoff automation 6x in under 12 months
│ → Drove PMF from 12% to 53%
│ → Led 2 AI/ML teams (15+ engineers)
│
● Rightworks · Aug 2023 – July 2024
│ Product Manager / Product Owner  
│ 700+ employees | >$73M revenue
│ → Unified 2 RESTful API services
│ → Led 3 agile teams → 800+ users at launch
│
● Tyler Technologies · May 2019 – July 2023
│ Product Analyst → Lead Analyst → PM/Owner
│ 7,000+ employees | >$1.2B revenue
│ → Modernized 50+ cities with ERP launch
│ → Unified 5 ERP products into one mobile app
│
────────────────────────────────────────────────────
```

**Specific Changes:**

| Element | Current | Proposed |
|---------|---------|----------|
| Layout | 2-column alternating | Single-column, left-aligned |
| Timeline visual | Center line with dots | Left-edge vertical line with dots |
| Card style | Full card with background | Minimal—no card background, just content |
| Highlights | 4 bullets each | 2-3 bullets max (most impactful only) |
| Company scale | Small text below title | Emphasized—this shows career progression |

**Rationale:** 

A single-column timeline:
1. **Reads like a resume**—familiar mental model for hiring managers
2. **Shows career velocity**—company scale grows as you scroll up
3. **Reduces cognitive load**—no zigzag scanning
4. **Compresses vertical space**—more content above the fold

---

## 3. Intentional Transitions: Experience vs. Projects

### Current State

Page flow: `Hero → About → Projects → Experience → Contact`

**Issues:**
- About and Experience are separated by Projects, breaking the career narrative
- Projects appear mid-page without context—why should I care about side projects before I know your professional credibility?
- No visual or semantic distinction between "professional achievements" and "technical proof"

### Proposed Page Flow

```
Hero
  ↓
Experience (Professional Credibility)
  "Where I've worked"
  ↓
[TRANSITION ELEMENT]
  "But I don't just manage products. I build them."
  ↓
Projects (Technical Proof)
  "Things I've built"
  ↓
About (Philosophy & Traits)
  "How I work"
  ↓
Contact
```

**Transition Element Design:**

Between Experience and Projects, insert a full-width statement block:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  "But I don't just manage products. I build them."         │
│                                                             │
│  ↓ See the proof                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Styling:**
- Full-width background: `bg-ink-900` or subtle gradient
- Text: Large serif, centered, `text-ink-50`
- Optional: Subtle scroll indicator or arrow

**Rationale:**

This creates a narrative arc:
1. **Act 1 (Experience):** "Here's my career. I've worked at serious companies and driven serious results."
2. **Transition:** "But here's what makes me different..."
3. **Act 2 (Projects):** "I actually build things. With my hands. In code."
4. **Denouement (About):** "Here's how I think about product work."

The transition is the pivot point—it reframes the Projects section from "side projects" to "proof of the Builder claim."

---

## 4. CTA Strategy

### Current State

Primary CTA: **"See what I've built"** → links to `#projects`

**Issues:**
- "What I've built" sounds like hobby projects, not professional-grade work
- The arrow points down (↓), suggesting "just scroll"—low commitment
- Secondary CTA ("Get in touch") competes equally for attention

### Proposed CTA Hierarchy

**Option A: Portfolio Journey Framing**

| Current | Proposed |
|---------|----------|
| "See what I've built" | "Explore the full portfolio" |
| Arrow: ↓ | Arrow: → (implies depth, not just scrolling) |

**Option B: Outcome-Oriented Framing**

| Current | Proposed |
|---------|----------|
| "See what I've built" | "See how I ship" |

**Option C: Proof-Oriented Framing**

| Current | Proposed |
|---------|----------|
| "See what I've built" | "See the proof" |

**Recommended: Option A or B**

- "Explore the full portfolio" positions this as a curated experience, not a scroll
- "See how I ship" ties back to the "Builder" identity and implies process, not just output

**Placement Adjustment:**

Move the secondary CTA ("Get in touch") further from the primary. Current gap is `gap-4`. Propose increasing to `gap-6` or adding a visual separator (e.g., "or") to create clear hierarchy.

---

## 5. Additional Observations

### About Section Positioning

**Current:** About appears second (after Hero), before Projects.

**Issue:** The About section is introspective ("Here's how I think") but appears before the reader has any reason to care. Credibility (Experience) and Proof (Projects) should come first.

**Proposed:** Move About to after Projects, before Contact. Rename section header from "What I bring" to "How I work" for clearer intent.

---

### Skills Section Density

**Current:** Skills appear at the bottom of Experience, easily missed.

**Proposed:** Keep current placement, but consider a more compact horizontal layout:

```
SKILLS & TOOLS
AI/ML: Model evaluation, Computer Vision, LLMs | Technical: Python, SQL, Cursor, APIs | Product: Dovetail, Jira, Figma, Pendo
```

This reduces vertical space and increases scannability.

---

## Summary of Proposed Changes

| Area | Current Issue | Proposed Fix |
|------|---------------|--------------|
| Hero Stats | Small, subordinate | Large, prominent card—visual anchor |
| Hero Subheadline | Too long, competes with stats | Condense to 1-2 lines |
| Experience Layout | Zigzag, cognitive load | Single-column vertical timeline |
| Experience Bullets | 4 per role | 2-3 max (highest impact) |
| Page Flow | About → Projects → Experience | Experience → Transition → Projects → About |
| Transition | None | Full-width statement block |
| Primary CTA | "See what I've built" | "Explore the full portfolio" or "See how I ship" |
| About Position | 2nd section | 4th section (after Projects) |

---

## Next Steps

1. **Review this proposal** and confirm which changes align with your intent.
2. **Prioritize:** Hero stats and Experience layout changes will have the highest impact.
3. **Implement iteratively:** Start with structural changes (page flow), then refine individual components.

---

## Implementation Checklist

Reference these individually when ready to implement:

### Hero Section
1. Increase stats font size from `text-2xl/3xl` to `text-4xl/5xl`
2. Wrap stats row in a card container with `bg-ink-50` and `border-ink-100`
4. Condense subheadline to 1-2 lines

### Skills Section
17. Consider compact horizontal layout for skills (single line per category)

---

*This audit focuses on intent, hierarchy, and user flow. No changes to color palette, typography, or theme are proposed.*
