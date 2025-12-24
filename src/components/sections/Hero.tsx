'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/ButtonComponent';
import InteractiveCard from '../ui/InteractiveCard';
import styles from './Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            {/* 1. Grain Overlay */}
            <div className={styles.grain} />

            {/* Background Fluid Shape Only (No CoffeeScene) */}
            <div className={styles.visualLayer}>
                <div className={styles.fluidShape} />
            </div>

            <div className={styles.layoutGrid}>
                <div className={styles.content}>
                    {/* 2. Live Status Badge */}
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className={styles.dot} />
                        Abierto Ahora • Envíos Disponibles
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.titleWrapper}
                    >
                        <h1 className={styles.title}>
                            El Arte <br />
                            <span className={styles.highlight}>del Origen.</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Café de especialidad cultivado en alturas volcánicas.
                            Una experiencia sensorial diseñada para ti.
                        </p>

                        <div className={styles.actions}>
                            <Link href="/products">
                                <Button variant="primary">Explorar Menú</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* 4. Interactive Cards Showcase */}
                <div className={styles.cardsShowcase}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <InteractiveCard
                            variant="donut"
                            title="Donut Glaseado"
                            description="Sabores clásicos y modernos."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className={styles.cardOffset}
                    >
                        <InteractiveCard
                            variant="cupcake"
                            title="Cupcake Vainilla"
                            description="Frosting suave y ligero."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <InteractiveCard
                            variant="candy"
                            title="Dulce Abstracto"
                            description="Explosión de sabor."
                        />
                    </motion.div>
                </div>
            </div>

            {/* 3. Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className={styles.mouse} />
                <span>Scroll</span>
            </motion.div>
        </section>
    );
}
