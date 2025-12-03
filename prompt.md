# Onset Parallax Landing Page - Build Specification

## Hero Layout & Visual Style

Create a full-screen hero section with this layout:

### Background
- The entire hero background is a WebP image sequence that fills the screen
- As the user scrolls down, the sequence plays forward; scrolling up reverses it
- This animation should feel cinematic and smooth
- Sequence shows the Tasso blood collection device in use / blood vial filling / health data visualization

### Overlay Text Block (Left Side)
- Below the logo: Large, bold, uppercase panel name (e.g., "MONTHLY")
- Under the name: smaller subtitle line, light font weight (e.g., "CORE PANEL")
- Under the subtitle: a short descriptive paragraph
- Below the paragraph: two full rounded CTA buttons side by side
  - Left button: transparent background, white text (e.g., "HOW IT WORKS")
  - Right button: accent background, black text (e.g., "GET STARTED")
- All text overlays directly on top of the moving background

### Center Area
- Keep the center visually clean and mostly empty of additional UI
- The animated background (Tasso device / health visualization) is clearly visible behind the text

### Right Side Panel Navigation
- On the right, vertically centered, display a large number representing the current panel index (01, 02, 03)
- Beside or near that number, include a slim vertical navigation strip with:
  - A small "PREV" label and arrow for the previous panel
  - A thin vertical divider line
  - A small "NEXT" label and arrow for the next panel
- Clicking PREV/NEXT switches panel variant (text, theme color, and WebP sequence)

### Bottom Center
- A small row of social icons (Twitter/X, Instagram, LinkedIn), minimal and monochrome

### Theme & Mode
- Dark mode only: near-black background (#0A0A0A), bright white text
- Theme accent color: Teal (#14B8A6) for CTAs, accents, active indicators, and subtle highlights
- Secondary accent: Warm white (#F5F5F4) for text highlights

---

## Parallax Scroll Behavior

- Map scroll position to the frame index of the WebP sequence
- Scrolling down advances frames
- Scrolling up reverses frames
- The animation should feel tied to the page scroll, not just time-based autoplay
- Keep performance smooth and responsive (60fps target)

---

## Multiple Panel Variants

Support an array of testing panel variants, where each variant has:
- Name
- Subtitle
- Description
- Theme accent color
- Path or list of URLs for its WebP frame sequence

When the user clicks PREV/NEXT:
- Update the hero overlay text to the new panel's name/subtitle/description
- Update the text with a fade out/fade in animation (300ms ease)
- Change the theme accent color if specified
- Swap to the corresponding WebP background sequence
- Update the large index number (01, 02, 03)

---

## Panel Variant Data

### Panel Variant 1
- **Panel Name:** MONTHLY
- **Panel Subtitle:** Core Panel
- **Panel Description:** 17 biomarkers tracking your metabolic, cardiovascular, and hormonal health. No needles. No lab visits. Results in 3 days.
- **Theme Accent:** Teal (#14B8A6)
- **WebP Sequence Path:** /sequences/monthly/frame_0001.webp
- **Frame Count:** 240

### Panel Variant 2
- **Panel Name:** QUARTERLY
- **Panel Subtitle:** Expanded Panel
- **Panel Description:** Everything in Monthly plus vitamins, minerals, and growth markers. Fine-tune your supplements and recovery protocol.
- **Theme Accent:** Amber (#F59E0B)
- **WebP Sequence Path:** /sequences/quarterly/frame_0001.webp
- **Frame Count:** 240

### Panel Variant 3
- **Panel Name:** INSIGHTS
- **Panel Subtitle:** Trend Analysis
- **Panel Description:** Your biomarkers over time. See patterns, track interventions, and watch your metabolic age improve month over month.
- **Theme Accent:** Violet (#8B5CF6)
- **WebP Sequence Path:** /sequences/insights/frame_0001.webp
- **Frame Count:** 240

### Placeholder
```
https://placehold.co/1920x1080/0A0A0A/14B8A6/webp
```

---

## Loading Experience

Because the site uses WebP sequences:

### Initial Load
Before showing the hero, display a full-screen loading overlay with:
- Onset logo (minimal, white on black)
- A horizontal loading bar that fills as frames are loaded
- Percentage indicator (e.g., "Loading 72%")
- Subtle pulse animation on the logo
- Only reveal the hero after the initial sequence is fully preloaded

### Variant Switch
- When switching panels, show a small loading indicator near the PREV/NEXT controls
- Fade transition between sequences (200ms)

---

## Navigation & Sections

### Sticky Navigation Bar
- **Left:** Onset logo (wordmark, white)
- **Right:** Links that smooth-scroll to main sections:
  - How It Works
  - Panels
  - Science
  - Pricing
  - FAQ
- Indicate active section while scrolling (underline or accent color)
- Navigation becomes slightly opaque on scroll (backdrop blur)

---

## Page Sections (Below Hero)

### Section 1: How It Works
**Layout:** 3-step horizontal cards with icons

1. **Order Your Kit**
   - Icon: Box/package
   - Text: "Your Tasso kit arrives monthly. No appointments needed."

2. **Collect at Home**
   - Icon: Tasso device silhouette
   - Text: "5 minutes. No needles. Just place on your arm and relax."

3. **Get Insights**
   - Icon: Chart/trending up
   - Text: "Results in 3 days. Trends, actions, and your monthly win."

**Visual:** Subtle parallax on background, cards fade in on scroll

---

### Section 2: The Panels
**Layout:** Two-column feature blocks

#### Monthly Core Panel
- **17 Biomarkers**
- Lipids: LDL-C, HDL-C, Triglycerides, Non-HDL-C
- Metabolic: Fasting Glucose, HbA1c
- Inflammation: hs-CRP
- Liver: ALT, AST, GGT, Albumin, Total Protein
- Kidney: Creatinine, eGFR
- Thyroid: TSH, Free T4
- Hormones: Total T, Free T, SHBG

#### Quarterly Expanded Panel
- Everything in Monthly, plus:
- Vitamin D, B12, Folate
- Ferritin, Magnesium, Calcium
- IGF-1 (where available)

**Visual:** Dark cards with accent borders, biomarker pills/tags

---

### Section 3: The Science
**Layout:** Full-width with centered content

**Headline:** "Lab-Grade Results. Zero Lab Visits."

**Content blocks:**
- **Tasso+ Technology:** FDA Class II cleared. 300-600µL capillary blood. Lower hemolysis than finger pricks.
- **Partner Labs:** ARUP Laboratories and CLIA-certified network.
- **Validated Panels:** Every biomarker validated for capillary blood accuracy.

**Visual:** Device imagery, lab partnership logos, trust badges

---

### Section 4: Results Preview
**Layout:** Mock dashboard/phone screen

Show a sample results card:
```
[October Results - Sample]

Overall Status: 🟢 On Track

Key Insights:
• LDL-C down 12% since starting Zone 2 cardio
• HbA1c stable at 5.2% — metabolic health strong
• Testosterone trending up after sleep protocol change

Actions This Month:
1. Maintain current cardio volume (150 min/week)
2. Add 200mg Magnesium Glycinate before bed
3. Retest Vitamin D next quarter after supplementation
```

**Visual:** Dark phone mockup, glowing screen, floating UI elements

---

### Section 5: The Promise
**Layout:** Centered text block with large typography

**Headline:** "No Needles. No Lab Visits. Ever."

**Subtext:** "Unless something concerning shows up. Then we'll recommend a confirmatory draw—and help you book it."

**Visual:** Subtle background gradient, accent color glow

---

### Section 6: Pricing
**Layout:** Single pricing card (or toggle for annual)

**Monthly Plan**
- $149/month
- Monthly Core Panel (17 biomarkers)
- Quarterly Expanded Panel included
- Trend tracking & insights
- Protocol recommendations
- Free shipping both ways

**CTA:** "Start Your First Month" (accent button)

**Note:** "Cancel anytime. No commitment."

**Visual:** Floating card with subtle shadow, accent border

---

### Section 7: FAQ
**Layout:** Accordion style

**Questions:**
1. How does the Tasso device work?
2. Does it hurt?
3. How accurate are the results compared to a lab draw?
4. What if my results show something concerning?
5. Can I use this if I'm on TRT?
6. How long until I get my results?
7. What's included in each panel?
8. Can I cancel anytime?

**Visual:** Clean accordion, plus/minus icons, smooth expand animation

---

### Section 8: Final CTA
**Layout:** Full-width dark section

**Headline:** "Your Blood Tells a Story. Start Reading It."

**Subtext:** "Join thousands of men tracking their health the smarter way."

**Buttons:**
- "Get Started" (accent, primary)
- "See Sample Results" (ghost/outline)

**Visual:** Subtle animated gradient background, floating biomarker icons

---

## Footer

**Layout:** Dark background (#050505), 4-column grid

**Column 1:** Onset logo + tagline "Track. Trend. Transform."

**Column 2:** Product links
- How It Works
- Panels
- Pricing
- Science

**Column 3:** Company links
- About
- Blog
- Careers
- Press

**Column 4:** Legal links
- Privacy Policy
- Terms of Service
- HIPAA Notice
- Contact

**Bottom row:**
- Social icons (Twitter/X, Instagram, LinkedIn)
- Copyright: "© 2025 Onset Health, Inc. All rights reserved."

---

## Company Information

- **Company Name:** Onset
- **Company Description:** A subscription blood testing service for men. Track 17+ biomarkers monthly from home using needle-free Tasso technology. No lab visits unless something needs a closer look.
- **Website Theme:** Dark Mode Only
- **Primary Color:** Black (#0A0A0A)
- **Accent Color:** Teal (#14B8A6)
- **Text Color:** White (#FFFFFF) / Off-white (#F5F5F4)

---

## CTA Images

Create hero/product images in this style:

**Monthly Panel Visual:**
- Dark gradient background (black to charcoal)
- Tasso+ device centered, clean studio lighting
- Subtle glow effect in teal accent color
- Floating biomarker icons orbiting the device
- Modern, medical-tech aesthetic

**Results Dashboard Visual:**
- Dark phone/tablet mockup
- Glowing screen showing trend charts
- Green/yellow/red status indicators visible
- Clean data visualization aesthetic

**Lifestyle Visual:**
- Man in morning routine setting (bathroom/bedroom)
- Tasso device on upper arm, relaxed posture
- Warm but desaturated color grade
- Aspirational but accessible feeling

---

## Technical Notes

### Performance
- Lazy load sections below the fold
- Preload first 60 frames of initial sequence
- Use IntersectionObserver for scroll animations
- Target 60fps on scroll-linked animations

### Responsive
- Hero text scales down on mobile
- PREV/NEXT controls move to bottom on mobile
- Section layouts stack vertically on tablet/mobile
- Touch-friendly tap targets (44px minimum)

### Accessibility
- Reduced motion preference disables scroll animation (show static frame)
- High contrast text maintained throughout
- Keyboard navigation for all interactive elements
- ARIA labels on navigation and controls
