'use client';

import React from 'react';

// ═══════════════════════════════════════════════
// STATUS BADGE
// ═══════════════════════════════════════════════

type StatusType = 'active' | 'confirmed' | 'likely' | 'unverified' | 'corrupted' | 'inactive' | 'unknown';

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  pulse?: boolean;
  className?: string;
}

const statusConfig: Record<StatusType, { color: string; bg: string; border: string }> = {
  active: { color: 'var(--status-confirmed)', bg: 'rgba(76, 175, 110, 0.08)', border: 'rgba(76, 175, 110, 0.3)' },
  confirmed: { color: 'var(--status-confirmed)', bg: 'rgba(76, 175, 110, 0.08)', border: 'rgba(76, 175, 110, 0.3)' },
  likely: { color: 'var(--status-likely)', bg: 'rgba(196, 154, 60, 0.08)', border: 'rgba(196, 154, 60, 0.3)' },
  unverified: { color: 'var(--status-unverified)', bg: 'rgba(138, 128, 120, 0.08)', border: 'rgba(138, 128, 120, 0.3)' },
  corrupted: { color: 'var(--status-corrupted)', bg: 'rgba(179, 58, 53, 0.08)', border: 'rgba(179, 58, 53, 0.3)' },
  inactive: { color: 'var(--dim-paper)', bg: 'rgba(92, 86, 80, 0.08)', border: 'rgba(92, 86, 80, 0.3)' },
  unknown: { color: 'var(--doctor)', bg: 'rgba(139, 107, 191, 0.08)', border: 'rgba(139, 107, 191, 0.3)' },
};

export function StatusBadge({ status, label, pulse, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-label ${className}`}
      style={{
        color: config.color,
        background: config.bg,
        border: `1px solid ${config.border}`,
        padding: '0.25rem 0.625rem',
      }}
    >
      {pulse && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-slow"
          style={{ background: config.color }}
        />
      )}
      {label || status.toUpperCase()}
    </span>
  );
}

// ═══════════════════════════════════════════════
// CASE FILE NUMBER
// ═══════════════════════════════════════════════

interface CaseFileNumberProps {
  number: string | number;
  prefix?: string;
  className?: string;
}

export function CaseFileNumber({ number, prefix = 'CASE FILE', className = '' }: CaseFileNumberProps) {
  return (
    <div className={`case-file-number ${className}`}>
      {prefix} {String(number).padStart(2, '0')}
    </div>
  );
}

// ═══════════════════════════════════════════════
// ARCHIVE HEADER — Character dossier header
// ═══════════════════════════════════════════════

interface ArchiveHeaderProps {
  caseNumber: string | number;
  title: string;
  subtitle?: string;
  status?: StatusType;
  classification?: string;
  accentColor?: string;
  className?: string;
}

export function ArchiveHeader({
  caseNumber,
  title,
  subtitle,
  status,
  classification,
  accentColor = 'var(--circus-red)',
  className = '',
}: ArchiveHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <CaseFileNumber number={caseNumber} />
      <h1
        className="font-archive text-4xl md:text-5xl lg:text-6xl mt-4 mb-2"
        style={{ color: accentColor }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="font-label text-muted-paper mt-2">{subtitle}</p>
      )}
      <div className="flex items-center gap-4 mt-4">
        {status && <StatusBadge status={status} pulse />}
        {classification && (
          <span className="font-label text-faint-paper">
            CLASSIFICATION: {classification}
          </span>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// STAT BAR — Character profile stats
// ═══════════════════════════════════════════════

interface StatBarProps {
  label: string;
  value: number; // 0-100
  color?: string;
  className?: string;
}

export function StatBar({ label, value, color = 'var(--circus-red)', className = '' }: StatBarProps) {
  return (
    <div className={`stat-bar ${className}`}>
      <span className="stat-bar__label">{label}</span>
      <div className="stat-bar__track">
        <div
          className="stat-bar__fill"
          style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: color }}
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// ARCHIVE CARD
// ═══════════════════════════════════════════════

interface ArchiveCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
  caseNumber?: string | number;
  onClick?: () => void;
  hoverable?: boolean;
}

export function ArchiveCard({
  children,
  className = '',
  accentColor,
  caseNumber,
  onClick,
  hoverable = true,
}: ArchiveCardProps) {
  return (
    <div
      className={`archive-card ${hoverable ? 'cursor-pointer' : ''} ${className}`}
      style={accentColor ? { borderLeft: `3px solid ${accentColor}` } : undefined}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {caseNumber !== undefined && (
        <CaseFileNumber number={caseNumber} />
      )}
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════
// ARCHIVE FIELD — label: value pair
// ═══════════════════════════════════════════════

interface ArchiveFieldProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export function ArchiveField({ label, value, className = '' }: ArchiveFieldProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="archive-label">{label}</span>
      <span className="archive-value">{value}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════
// EVIDENCE MARKER
// ═══════════════════════════════════════════════

interface EvidenceMarkerProps {
  id: string | number;
  className?: string;
}

export function EvidenceMarker({ id, className = '' }: EvidenceMarkerProps) {
  return (
    <span className={`evidence-marker ${className}`}>
      EVIDENCE {String(id).padStart(3, '0')}
    </span>
  );
}

// ═══════════════════════════════════════════════
// ARCHIVE DIVIDER
// ═══════════════════════════════════════════════

interface ArchiveDividerProps {
  variant?: 'line' | 'dots' | 'ink';
  className?: string;
}

export function ArchiveDivider({ variant = 'line', className = '' }: ArchiveDividerProps) {
  if (variant === 'dots') {
    return <hr className={`archive-dots ${className}`} />;
  }
  if (variant === 'ink') {
    return <div className={`ink-scratch ${className}`} />;
  }
  return <hr className={`archive-divider ${className}`} />;
}

// ═══════════════════════════════════════════════
// ARCHIVE SECTION HEADER
// ═══════════════════════════════════════════════

interface ArchiveSectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function ArchiveSectionHeader({ title, subtitle, className = '' }: ArchiveSectionHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-paper">{title}</h2>
      {subtitle && (
        <p className="font-label text-faint-paper mt-2">{subtitle}</p>
      )}
      <div className="h-px bg-dark-border mt-4" />
    </div>
  );
}

// ═══════════════════════════════════════════════
// CLASSIFICATION TAG
// ═══════════════════════════════════════════════

interface ClassificationTagProps {
  label: string;
  color?: string;
  className?: string;
}

export function ClassificationTag({ label, color = 'var(--faint-paper)', className = '' }: ClassificationTagProps) {
  return (
    <span
      className={`font-label inline-block ${className}`}
      style={{
        color,
        padding: '0.125rem 0.5rem',
        border: `1px solid ${color}33`,
      }}
    >
      {label}
    </span>
  );
}
