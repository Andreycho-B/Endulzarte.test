import React from 'react';
import styles from './Card.module.scss';

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`${styles.card} ${className || ''}`}>{children}</div>;
};
