import { PRODUCTS } from '@/data/products';
import Image from 'next/image';
import TraceabilityTimeline from '@/components/ui/TraceabilityTimeline';
import SensoryRadar from '@/components/ui/SensoryRadar';
import TastingNotes from '@/components/ui/TastingNotes';
import { Button } from '@/components/ui/ButtonComponent';
import Link from 'next/link';
import styles from './ProductDetail.module.scss';

// Static Params for generating pages at build time
export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id.toString(),
    }));
}

// Next.js 16+ requires awaiting params
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <main className={styles.detailMain}>
            {/* Back Button */}
            <Link href="/products" className={styles.backLink}>
                ← Volver al Catálogo
            </Link>

            <div className={styles.topSection}>
                {/* Left: Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageCard}>
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={500}
                            height={500}
                            style={{ objectFit: 'contain' }}
                        />
                        <span className={styles.tag}>{product.tag}</span>
                    </div>
                </div>

                {/* Right: Intro Info */}
                <div className={styles.infoColumn}>
                    <h1>{product.name}</h1>
                    <p className={styles.price}>{product.price}</p>
                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.actions}>
                        <Button variant="primary">Añadir al Carrito</Button>
                        <Link href={`https://wa.me/573132721024?text=Hola,%20me%20interesa%20el%20producto%20${encodeURIComponent(product.name)}`} target="_blank">
                            <Button variant="outline">Consultar WhatsApp</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.technicalSection}>
                <div className={styles.techGrid}>
                    {/* Col 1: Traceability */}
                    <TraceabilityTimeline steps={product.traceability} />

                    {/* Col 2: Sensory Radar (Only if exists) */}
                    {product.sensory && <SensoryRadar data={product.sensory} />}
                </div>
            </div>

            <TastingNotes notes={product.notes} story={product.story} />
        </main>
    );
}
