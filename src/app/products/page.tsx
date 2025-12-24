'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonComponent';
import { PRODUCTS } from '@/data/products';
import styles from './Products.module.scss';


export default function ProductsPage() {
    return (
        <main className={styles.main}>
            <section className={styles.header}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Nuestro Menú
                </motion.h1>
            </section>

            <section className={styles.grid}>
                {PRODUCTS.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={styles.productCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className={styles.image}
                                    style={{ objectFit: 'contain', padding: '2rem' }}
                                />
                                <span className={styles.tag}>{item.tag}</span>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.meta}>
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                </div>
                                <Link href={`/products/${item.id}`}>
                                    <Button variant="outline" className={styles.btn}>Ver Detalle</Button>
                                </Link>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}
