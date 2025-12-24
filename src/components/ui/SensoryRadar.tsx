'use client';

import { motion } from 'framer-motion';
import { SensoryProfile } from '@/data/products';
import styles from './SensoryRadar.module.scss';

interface Props {
    data: SensoryProfile;
}

export default function SensoryRadar({ data }: Props) {
    if (!data) return null;

    // Chart Logic
    const labels = ['Acidez', 'Cuerpo', 'Dulzor', 'Aroma', 'Retrogusto'];
    const values = [data.acidity, data.body, data.sweetness, data.aroma, data.aftertaste];
    const maxVal = 10;
    const radius = 100;
    const center = 150;
    const angleStep = (Math.PI * 2) / 5;

    // Helper to get coordinates
    const getPoint = (value: number, index: number) => {
        const angle = index * angleStep - Math.PI / 2; // Start at top
        const r = (value / maxVal) * radius;
        const x = center + Math.cos(angle) * r;
        const y = center + Math.sin(angle) * r;
        return `${x},${y}`;
    };

    // Generate polygon points
    const points = values.map((v, i) => getPoint(v, i)).join(' ');
    const bgPoints = values.map((_, i) => getPoint(10, i)).join(' ');

    return (
        <div className={styles.chartContainer}>
            <h3 className={styles.heading}>Perfil Sensorial</h3>
            <div className={styles.svgWrapper}>
                <svg viewBox="0 0 300 300" className={styles.svg}>
                    {/* Background Grid (Pentagon) */}
                    {[2, 4, 6, 8, 10].map((level) => (
                        <polygon
                            key={level}
                            points={values.map((_, i) => getPoint(level, i)).join(' ')}
                            className={styles.gridLine}
                        />
                    ))}

                    {/* Data Polygon */}
                    <motion.polygon
                        points={points}
                        className={styles.dataPoly}
                        fill="rgba(212, 175, 55, 0.5)"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0, originX: '50%', originY: '50%' }}
                        animate={{ scale: 1, opacity: 0.8 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />

                    {/* Labels */}
                    {labels.map((label, i) => {
                        const angle = i * angleStep - Math.PI / 2;
                        const x = center + Math.cos(angle) * (radius + 25);
                        const y = center + Math.sin(angle) * (radius + 25);
                        return (
                            <text key={label} x={x} y={y} className={styles.axisLabel} textAnchor="middle">
                                {label}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}
