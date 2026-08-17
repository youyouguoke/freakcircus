/**
 * Freak Circus Hub — The Forbidden Archive
 * Design System v1.0
 *
 * Visual Identity: Dark Fandom Archive / Horror Editorial
 * "一份被藏在马戏团地下的秘密档案"
 */

// ═══════════════════════════════════════════════
// COLOR TOKENS
// ═══════════════════════════════════════════════

export const colors = {
  // Base
  voidBlack: '#09090D',
  archiveBlack: '#111116',
  darkSurface: '#18171D',
  darkSurfaceHover: '#1F1E26',
  darkBorder: '#2A2935',

  // Paper / Text
  paper: '#F2ECE3',
  mutedPaper: '#B8AEA5',
  faintPaper: '#8A8078',
  dimPaper: '#5C5650',

  // Brand
  circusRed: '#8E2525',
  bloodRed: '#B33A35',
  dustPink: '#D99A9A',
  crimson: '#C0392B',
  deepRed: '#5A1A1A',

  // Accent — used sparingly
  amber: '#C49A3C',
  amberFaint: 'rgba(196, 154, 60, 0.15)',

  // Character Accent Colors
  character: {
    pierrot: {
      primary: '#6B7FC7',    // 冷蓝
      secondary: '#8B6BBF',  // 暗紫
      glow: 'rgba(107, 127, 199, 0.25)',
      bg: 'rgba(107, 127, 199, 0.08)',
    },
    harlequin: {
      primary: '#4CAF6E',    // 绿色
      secondary: '#2E8B57',
      glow: 'rgba(76, 175, 110, 0.25)',
      bg: 'rgba(76, 175, 110, 0.08)',
    },
    doctor: {
      primary: '#8B6BBF',    // 暗紫
      secondary: '#6A4C93',
      glow: 'rgba(139, 107, 191, 0.25)',
      bg: 'rgba(139, 107, 191, 0.08)',
    },
    ticketTaker: {
      primary: '#D4789C',    // 粉色
      secondary: '#B85C80',
      glow: 'rgba(212, 120, 156, 0.25)',
      bg: 'rgba(212, 120, 156, 0.08)',
    },
    jester: {
      primary: '#D46A3C',    // 橙红
      secondary: '#B8522A',
      glow: 'rgba(212, 106, 60, 0.25)',
      bg: 'rgba(212, 106, 60, 0.08)',
    },
    columbina: {
      primary: '#7EB8D4',    // 淡蓝
      secondary: '#5A9AB8',
      glow: 'rgba(126, 184, 212, 0.25)',
      bg: 'rgba(126, 184, 212, 0.08)',
    },
  },

  // Status / Classification
  status: {
    confirmed: '#4CAF6E',
    likely: '#C49A3C',
    unverified: '#8A8078',
    corrupted: '#B33A35',
    active: '#4CAF6E',
    inactive: '#5C5650',
    unknown: '#8B6BBF',
  },
} as const;

// ═══════════════════════════════════════════════
// TYPOGRAPHY
// ═══════════════════════════════════════════════

export const typography = {
  fonts: {
    display: '"Special Elite", "Courier New", monospace',  // Archive / Case File headers
    horror: '"Creepster", cursive',                         // Horror accent only
    heading: '"Epilogue", sans-serif',                      // Section headings
    body: '"Inter", sans-serif',                            // Body text
    mono: '"JetBrains Mono", monospace',                    // Data / labels
  },
  sizes: {
    // Archive display (CASE FILE, EVIDENCE, etc.)
    archiveXL: 'clamp(2.5rem, 5vw, 4rem)',      // 40-64px
    archiveLG: 'clamp(1.75rem, 3vw, 2.5rem)',   // 28-40px
    archiveMD: 'clamp(1.25rem, 2vw, 1.75rem)',   // 20-28px

    // Standard headings
    h1: 'clamp(2rem, 4vw, 3rem)',                // 32-48px
    h2: 'clamp(1.5rem, 3vw, 2rem)',              // 24-32px
    h3: 'clamp(1.125rem, 2vw, 1.5rem)',          // 18-24px

    // Body
    bodyLG: '1.125rem',                           // 18px
    body: '1rem',                                 // 16px
    bodySM: '0.875rem',                           // 14px
    caption: '0.75rem',                           // 12px
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  tracking: {
    archive: '0.25em',    // CASE FILE headers
    label: '0.15em',      // STATUS, CLASSIFICATION
    normal: '0',
    tight: '-0.02em',
  },
} as const;

// ═══════════════════════════════════════════════
// SPACING
// ═══════════════════════════════════════════════

export const spacing = {
  sectionGap: 'clamp(4rem, 8vw, 8rem)',
  containerPadding: 'clamp(1rem, 4vw, 2rem)',
  cardPadding: 'clamp(1.25rem, 3vw, 2rem)',
  elementGap: 'clamp(1rem, 2vw, 1.5rem)',
} as const;

// ═══════════════════════════════════════════════
// ANIMATION TOKENS
// ═══════════════════════════════════════════════

export const animation = {
  // Entrance
  fadeIn: {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  fadeInSlow: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },

  // Image hover
  imageHover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: 'easeOut' },
  },

  // Card hover
  cardHover: {
    y: -4,
    transition: { duration: 0.3, ease: 'easeOut' },
  },

  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },
} as const;

// ═══════════════════════════════════════════════
// BORDER & RADIUS
// ═══════════════════════════════════════════════

export const border = {
  radius: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  width: {
    thin: '1px',
    normal: '2px',
    thick: '3px',
  },
} as const;

// ═══════════════════════════════════════════════
// CARD TYPES
// ═══════════════════════════════════════════════

export const cardStyles = {
  // ① Archive Card — Lore / Evidence
  archive: {
    bg: 'var(--archive-black)',
    border: '1px solid var(--dark-border)',
    accent: 'var(--circus-red)',
    labelFont: 'var(--font-mono)',
  },
  // ② Character Card
  character: {
    bg: 'var(--archive-black)',
    border: '1px solid var(--dark-border)',
    imageHeight: '240px',
    hoverGlow: true,
  },
  // ③ Theory Card
  theory: {
    bg: 'var(--archive-black)',
    border: '1px solid var(--dark-border)',
    statusIndicator: true,
    evidenceCount: true,
  },
} as const;

// ═══════════════════════════════════════════════
// BREAKPOINTS
// ═══════════════════════════════════════════════

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
