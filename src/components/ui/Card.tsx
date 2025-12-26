'use client';

import styles from './Card.module.scss';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    );
};
