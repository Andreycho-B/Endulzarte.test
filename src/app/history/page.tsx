'use client';

import { motion } from 'framer-motion';
import styles from './History.module.scss';

export default function HistoryPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className={styles.label}>Nuestra Historia</span>
                    <h1 className={styles.title}>
                        Tradición que <br /> trasciende generaciones.
                    </h1>
                    <p className={styles.text}>
                        En las laderas de nuestras montañas volcánicas, cada grano de café cuenta una historia de paciencia, dedicación y amor por la tierra. Desde 1985, hemos perfeccionado el arte de cultivar armonía.
                    </p>
                </motion.div>

                <div className={styles.visual}>
                    {/* Abstract visual or image placeholder */}
                    <div className={styles.circle} />
                </div>
            </section>
        </main>
    );
}
