'use client';

import React from 'react';
import styles from './Button.module.scss'; // We can likely reuse the module if not locked, or I should make a new one too just in case. Let's reuse first.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
};
