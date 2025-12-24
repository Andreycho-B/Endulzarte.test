'use client';

import { motion } from 'framer-motion';
import { TraceabilityStep } from '@/data/products';
import styles from './TraceabilityTimeline.module.scss';

interface Props {
    steps: TraceabilityStep[];
}

export default function TraceabilityTimeline({ steps }: Props) {
    if (!steps || steps.length === 0) return null;

    return (
        <div className={styles.timelineContainer}>
            <h3 className={styles.heading}>Línea de Vida</h3>
            <div className={styles.timeline}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={styles.step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>{step.icon}</span>
                            {index !== steps.length - 1 && <div className={styles.line} />}
                        </div>

                        <div className={styles.content}>
                            <span className={styles.label}>{step.label}</span>
                            <strong className={styles.value}>{step.value}</strong>
                            <div className={styles.tooltip}>{step.tooltip}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
