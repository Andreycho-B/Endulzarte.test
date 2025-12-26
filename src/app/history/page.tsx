'use client';

import Image from 'next/image';
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
                        El arte de <br /> honrar el origen.
                    </h1>
                    <div className={styles.textWrapper}>
                        <p className={styles.text}>
                            Todo comenzó con un sueño simple: recuperar la esencia del sabor real. En 1985, en las tierras altas donde la niebla besa los cultivos, descubrimos que el verdadero secreto no estaba en la receta, sino en el respeto por el ingrediente.
                        </p>
                        <p className={styles.text}>
                            A lo largo de los años, hemos fusionado técnicas artesanales olvidadas con una visión moderna de la repostería y el café. Cada postre, cada taza, es un tributo a nuestras raíces volcánicas y a la creencia de que endulzar la vida es un arte que requiere tiempo, alma y manos que aman lo que hacen.
                        </p>
                    </div>
                </motion.div>

                <div className={styles.visual}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={styles.imageMain}
                    >
                        <Image src="/assets/img/Geisha.jpg" alt="Café de Especialidad" fill style={{ objectFit: 'cover' }} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className={styles.imageSecondary}
                    >
                        <Image src="/assets/img/Tiramisu Artesanal.jpg" alt="Repostería Artesanal" fill style={{ objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
