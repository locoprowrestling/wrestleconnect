# WrestleConnect Brand & Design System

## Brand Foundations
- **Mission:** Empower independent wrestling talent, promotions, and schools with a trusted platform that elevates their stories and makes collaboration seamless.
- **Core Values:** Authenticity, solidarity, professionalism, momentum.
- **Voice & Tone:** Confident, respectful, energetic. Copy should read like an experienced promoter hyping a card—punchy headlines, informative subtext, never gimmicky.
- **Audience Moodboard Keywords:** Electric arena lights, backstage camaraderie, modern sports broadcast graphics, crafted athletic gear, community bulletin boards.

### Brand Personality
- **Guides:** Experienced, connected, resourceful.
- **Inspires:** Belief in the grind, sense of belonging, excitement for the next booking.
- **Protects:** Safety, inclusion, and professional standards within wrestling communities.

### Messaging Pillars
1. **Showcase Talent:** Wrestlers own their narrative with polished profiles and verified references.
2. **Build Credibility:** Promotions and schools demonstrate track records and endorsements.
3. **Grow Together:** Highlight cross-promotion and ongoing development opportunities.

## Visual System

### Logo Direction
- **Primary Mark:** Wordmark “WrestleConnect” in a custom geometric sans with angled cuts on the “W” and “C” to echo ring corners.
- **Secondary Mark:** Interlocking “WC” monogram inside a squared ring outline; used for avatars, favicons, and watermark.
- **Usage Notes:** Wordmark for headers, hero sections, and email templates; monogram for app icon, social avatars, and UI accents.

### Color Palette
| Role | Color | Hex | Notes |
| --- | --- | --- | --- |
| Primary | Spotlight Royal | `#1B1EFF` | Main CTAs, links, and hero typography accents. |
| Secondary | Midnight Rope | `#00039F` | Hover states, outlines, focus rings, dark mode buttons. |
| Neutral Dark | Arena Maroon | `#772321` | App chrome, footer backgrounds, modal overlays. |
| Neutral Mid | Hammered Brass | `#CEB87D` | Card borders, dividers, secondary backgrounds. |
| Neutral Light | Ring Canvas | `#F0D794` | Primary surface color for cards and sections. |
| Support | Tag Team Clay | `#934948` | Verification badges, ratings highlights, alert accents. |
| Highlight | Handshake Glow | `#F6C193` | Subtle gradients, hover fills, onboarding illustrations. |

- Maintain 4.5:1 contrast for text (white on Arena Maroon, Midnight Rope; Midnight Rope text on Hammered Brass).
- Gradient overlays can transition Spotlight Royal → Arena Maroon for dramatic hero treatments; apply at 60% opacity over photography.

### Typography
- **Headlines:** Manrope (600/700/800). Slightly tightened letter spacing (-1%), mixed case for readability; use for H1–H4 and CTA copy.
- **Body Text:** Inter (400/500). Comfortable line height (1.6). Use for paragraphs, descriptions, metadata.
- **Display Accent (optional):** Space Grotesk (500/600) for stat blocks or numerical highlights.
- **Fallback Stack:** `font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;`
- Pair typographic scale with 12px base spacing: H1 48px, H2 36px, H3 28px, H4 22px, body 16px, caption 14px.

### Imagery
- Showcase high-resolution action shots, backstage portraits, and crowd reactions.
- Apply subtle dark vignette overlays to keep headlines legible.
- Encourage user-uploaded photography guidelines: landscape orientation, minimum 1600px width, focus on subjects, avoid heavy filters.
- Curate hero background images for each persona: wrestler poses, promotion group shots, school training sessions.

### Iconography & Graphic Elements
- Linear icons with rounded 2px strokes matching Midnight Rope color.
- Use geometric divider motifs inspired by turnbuckle straps (angled 45° corners).
- Badge system: circular medallions with Hammered Brass strokes for verification, Spotlight Royal accents for pending.
- Motion language: quick slide-in transitions, 150ms ease-out, mimicking entrance ramp energy.

## UI System Guidelines

### Layout & Grid
- 12-column responsive grid; default max width 1200px with 24px gutters.
- Mobile (≤640px): stack sections with 16px padding, cards full-width.
- Tablet (641–1024px): two-column layout for profile sections, sticky side panel for quick actions.
- Desktop: hero sections split with media on right, content left; roster/event lists use vertical tabs or segmented controls.

### Core Components
- **Navigation Bar:** Sticky top bar in Arena Maroon; logo left, global search centered, user menu right. On mobile, use collapsible drawer with segmented role shortcuts.
- **Hero Banner:** Full-width image with gradient overlay (top left → bottom right). Primary CTA button in Spotlight Royal, secondary in outline Midnight Rope.
- **Profile Card:** Rounded 12px corners, drop shadow `0 12px 24px rgba(15,23,42,0.18)`, headline in Manrope, stats row using Inter captions. Include verification badge in top-right corner.
- **Event Card:** Date pill, match count, venue, ticket CTA. Background tinted using Ring Canvas with subtle diagonal texture.
- **Recommendation Tile:** Speech-bubble style with Tail fin accent, rating stars in Hammered Brass, testimonial text 16px italic. Display promotion logo avatar.
- **Seminar Highlight:** Vertical card with session time, price, primary CTA. Use icon for format (in-person/live stream).
- **Tab System:** Underline animation sliding from tab to tab in Spotlight Royal, 4px thickness.
- **Buttons:** 
  - Primary: Spotlight Royal background, white text, 8px radius, medium weight.
  - Secondary: Midnight Rope border, white fill on dark surfaces or transparent fill on light; text Midnight Rope.
  - Tertiary: Text-only in Midnight Rope at 80% opacity with hover underline.
- **Form Elements:** Ring Canvas backgrounds, 1px border Midnight Rope at 20% opacity, focus ring Spotlight Royal 2px glow.
- **Badges/Chips:** Pill shape, uppercase label 12px. Status colors: Verified (Hammered Brass fill with Midnight Rope text), Pending (Spotlight Royal outline), Declined (Arena Maroon outline, transparent fill).

### States & Feedback
- **Success Toasts:** Spotlight Royal background, white text, icon check in Handshake Glow.
- **Warning/Errors:** Arena Maroon background, white text; inline error states with Arena Maroon left border and icon.
- **Empty States:** Illustrations of ring equipment in Midnight Rope outlines with encouraging copy; primary CTA present.
- **Skeleton Loading:** Use Ring Canvas base with animated shimmer overlay.

### Accessibility Guidelines
- Maintain focus indicators on all interactive elements, 3px Spotlight Royal outline offset by 2px.
- Support reduced motion by disabling entrance animations when prefers-reduced-motion is set.
- Ensure copywriting avoids jargon; include tooltips or glossary for wrestling-specific terms when needed.
