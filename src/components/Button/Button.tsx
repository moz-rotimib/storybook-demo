import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'disabled' | 'onClick'
  > {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  onClick,
  className,
  ...restProps
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        className || ''
      }`}
      disabled={disabled || loading}
      onClick={onClick}
      {...restProps}
    >
      {loading && <span className={styles.spinner}></span>}
      <span className={loading ? styles.loadingText : ''}>{children}</span>
    </button>
  );
};
