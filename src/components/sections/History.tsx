'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/ButtonComponent';
import styles from './History.module.scss';
import { Card } from '../ui/Card';

export default function History() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section className={styles.history} id="history" ref={ref}>
            <motion.div style={{ y: yBg }} className={styles.background}>
                {/* Background image handled in CSS, or could benefit from next/image if absolute */}
            </motion.div>

            <div className={styles.contentWrapper}>
                <Card className={styles.content}>
                    <h2 className={styles.title}>Nuestra Historia</h2>
                    <p className={styles.text}>
                        Nacimos en las montañas, donde el viento acaricia los cafetales y el sol madura cada grano con paciencia.
                        Combinamos tradición con innovación para traerte lo mejor de nuestra tierra.
                    </p>
                    <Button variant="outline">Leer Más</Button>
                </Card>
            </div>
        </section>
    );
}
