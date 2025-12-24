'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>Endulzarte</div>
            <p className={styles.catchphrase}>El Arte del Origen, en cada bocado.</p>

            <div className={styles.contactInfo}>
                <div className={styles.infoBlock}>
                    <h4>Visítanos</h4>
                    <p>Cra. 14 #13-15</p>
                    <p>Duitama, Boyacá</p>
                </div>
                <div className={styles.infoBlock}>
                    <h4>Contacto</h4>
                    <p>+57 313 272 1024</p>
                    <p>2:00 p.m. - 6:00 p.m.</p>
                </div>
            </div>

            <div className={styles.socials}>
                <Link href="#">Instagram</Link>
                <Link href="#">Facebook</Link>
                <Link href="https://wa.me/573132721024" target="_blank">WhatsApp</Link>
            </div>

            <p className={styles.copyright}>
                © {new Date().getFullYear()} Vitrina Digital Endulzarte. Todos los derechos reservados.
            </p>
        </footer>
    );
}
