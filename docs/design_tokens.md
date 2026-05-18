# WrestleConnect Design Tokens

These tokens translate the brand system into implementation-ready values for Tailwind CSS and CSS variables. All hex codes reflect the palette sampled from `webimages/WrestleConnect.PNG`.

## Color Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `color-primary` | `#1B1EFF` (Spotlight Royal) | Primary CTAs, interactive highlights |
| `color-primary-dark` | `#00039F` (Midnight Rope) | Hover states, outlines, focus rings |
| `color-background-dark` | `#772321` (Arena Maroon) | App chrome, hero backgrounds, modals |
| `color-surface` | `#F0D794` (Ring Canvas) | Card surfaces, section backgrounds |
| `color-surface-alt` | `#CEB87D` (Hammered Brass) | Borders, dividers, secondary surfaces |
| `color-accent` | `#934948` (Tag Team Clay) | Verification badges, rating accents |
| `color-highlight` | `#F6C193` (Handshake Glow) | Gradients, hover fills, illustrations |
| `color-on-dark` | `#FFFFFF` | Text/icons on dark backgrounds |
| `color-on-light` | `#0B0B0B` | Text/icons on light backgrounds |

## Typography Tokens

| Token | Value | Notes |
| --- | --- | --- |
| `font-heading` | `"Manrope", sans-serif` | H1–H3 |
| `font-body` | `"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif` | Paragraphs, metadata |
| `font-display` | `"Space Grotesk", sans-serif` | Optional stat blocks, event cards |
| `font-size-h1` | `48px` |
| `font-size-h2` | `36px` |
| `font-size-h3` | `28px` |
| `font-size-h4` | `22px` |
| `font-size-body` | `16px` |
| `font-size-caption` | `14px` |
| `letter-spacing-heading` | `-0.01em` | Tighten uppercase headings |
| `line-height-body` | `1.6` |

## Spacing & Radius

| Token | Value |
| --- | --- |
| `space-unit` | `12px` |
| `space-xs` | `4px` |
| `space-sm` | `8px` |
| `space-md` | `16px` |
| `space-lg` | `24px` |
| `space-xl` | `32px` |
| `radius-card` | `12px` |
| `radius-button` | `8px` |
| `radius-pill` | `999px` |

## Shadows

| Token | Value |
| --- | --- |
| `shadow-card` | `0 12px 24px rgba(15, 23, 42, 0.18)` |
| `shadow-hover` | `0 16px 32px rgba(15, 23, 42, 0.24)` |

## Motion

| Token | Value |
| --- | --- |
| `transition-duration` | `150ms` |
| `transition-timing` | `cubic-bezier(0.18, 0.89, 0.32, 1.28)` |

## CSS Variable Template

```css
:root {
  --wc-color-primary: #1B1EFF;
  --wc-color-primary-dark: #00039F;
  --wc-color-background-dark: #772321;
  --wc-color-surface: #F0D794;
  --wc-color-surface-alt: #CEB87D;
  --wc-color-accent: #934948;
  --wc-color-highlight: #F6C193;
  --wc-color-on-dark: #FFFFFF;
  --wc-color-on-light: #0B0B0B;

  --wc-font-heading: "Manrope", sans-serif;
  --wc-font-body: "Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --wc-font-display: "Space Grotesk", sans-serif;

  --wc-font-size-h1: 48px;
  --wc-font-size-h2: 36px;
  --wc-font-size-h3: 28px;
  --wc-font-size-h4: 22px;
  --wc-font-size-body: 16px;
  --wc-font-size-caption: 14px;

  --wc-letter-spacing-heading: -0.01em;
  --wc-line-height-body: 1.6;

  --wc-space-xs: 4px;
  --wc-space-sm: 8px;
  --wc-space-md: 16px;
  --wc-space-lg: 24px;
  --wc-space-xl: 32px;

  --wc-radius-card: 12px;
  --wc-radius-button: 8px;
  --wc-radius-pill: 999px;

  --wc-shadow-card: 0 12px 24px rgba(15, 23, 42, 0.18);
  --wc-shadow-hover: 0 16px 32px rgba(15, 23, 42, 0.24);

  --wc-transition-duration: 150ms;
  --wc-transition-timing: cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
```

## Tailwind Configuration Snippet

```js
// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B1EFF',
        'primary-dark': '#00039F',
        background: {
          dark: '#772321',
        },
        surface: {
          DEFAULT: '#F0D794',
          alt: '#CEB87D',
        },
        accent: '#934948',
        highlight: '#F6C193',
        'on-dark': '#FFFFFF',
        'on-light': '#0B0B0B',
      },
      fontFamily: {
        heading: ['\"Manrope\"', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['\"Space Grotesk\"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: '0 12px 24px rgba(15, 23, 42, 0.18)',
        hover: '0 16px 32px rgba(15, 23, 42, 0.24)',
      },
      borderRadius: {
        card: '12px',
        button: '8px',
        pill: '999px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      letterSpacing: {
        tightest: '-0.01em',
      },
      transitionTimingFunction: {
        snappy: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
      },
      transitionDuration: {
        fast: '150ms',
      },
    },
  },
  plugins: [],
};
```

> When Tailwind is in use, apply fonts via the `font-heading`, `font-body`, and `font-display` utilities, and use custom classes (e.g., `bg-surface-alt`, `text-on-dark`) to maintain consistency with the brand palette.
