import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const classNames = [
    'badge',
    `badge-${variant}`,
    `badge-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
};
