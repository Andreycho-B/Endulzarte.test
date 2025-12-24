'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Navbar.module.scss';

const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Menú', path: '/products' },
    { name: 'Historia', path: '/history' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navContainer}>
            <motion.div
                className={styles.nav}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className={styles.logo}>Endulzarte</div>
                <ul className={styles.links}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={item.path} className={isActive ? styles.active : ''}>
                                <Link href={item.path}>
                                    {item.name}
                                    {isActive && <motion.div layoutId="navHighlight" className={styles.highlight} />}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {/* Cart Icon Removed as requested */}
            </motion.div>
        </nav>
    );
}
