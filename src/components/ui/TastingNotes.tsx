'use client';

import { TastingNote } from '@/data/products';
import styles from './TastingNotes.module.scss';
import { motion } from 'framer-motion';

interface Props {
    notes: TastingNote[];
    story: string;
}

export default function TastingNotes({ notes, story }: Props) {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Notas de Cata</h3>

            <div className={styles.notesGrid}>
                {notes.map((note, idx) => (
                    <motion.div
                        key={idx}
                        className={styles.noteCard}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className={styles.iconCircle}>{note.icon}</div>
                        <h4>{note.label}</h4>
                        <p>{note.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className={styles.storySection}>
                <h3>Storytelling</h3>
                <p className={styles.narrative}>"{story}"</p>
            </div>
        </div>
    );
}
