import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'highlighted';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  variant = 'default',
  onClick,
}) => {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${
        onClick ? styles.clickable : ''
      }`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};
