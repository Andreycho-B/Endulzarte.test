export interface TraceabilityStep {
    icon: string;
    label: string;
    value: string;
    tooltip: string;
}

export interface SensoryProfile {
    acidity: number;
    body: number;
    sweetness: number;
    aroma: number;
    aftertaste: number;
}

export interface TastingNote {
    icon: string; // Emoji or asset path
    label: string;
    description: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    tag: string;
    img: string; // Main image
    description: string; // Short description

    // Detailed Page Data
    traceability: TraceabilityStep[];
    sensory: SensoryProfile;
    notes: TastingNote[];
    story: string;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Geisha Inmaculada',
        price: '$70.000',
        tag: 'Premium',
        img: '/assets/img/Geisha.jpg',
        description: 'El rey de los cafés. Notas florales y delicadeza única.',
        traceability: [
            { icon: '📍', label: 'Origen', value: 'Finca El Paraíso, Cauca', tooltip: 'Región volcánica rica en minerales.' },
            { icon: '⛰️', label: 'Altura', value: '1.950 m.s.n.m.', tooltip: 'Mayor altura = Mayor acidez y complejidad.' },
            { icon: '🍒', label: 'Variedad', value: 'Geisha', tooltip: 'Variedad exótica galardonada mundialmente.' },
            { icon: '☀️', label: 'Proceso', value: 'Lavado Doble Fermentación', tooltip: 'Destaca la limpieza y notas florales.' },
            { icon: '👨‍🌾', label: 'Productor', value: 'Diego Samuel Bermúdez', tooltip: 'Pionero en caficultura experimental.' },
        ],
        sensory: {
            acidity: 9,
            body: 6,
            sweetness: 8,
            aroma: 10,
            aftertaste: 9,
        },
        notes: [
            { icon: '🌸', label: 'Jazmín', description: 'Aroma floral intenso y elegante.' },
            { icon: '🍋', label: 'Limoncillo', description: 'Acidez cítrica brillante y refrescante.' },
            { icon: '🍯', label: 'Miel', description: 'Dulzura residual suave y sedosa.' },
        ],
        story: "Este lote es una joya escasa. Cultivado en las alturas del Cauca, cada grano de Geisha ha sido seleccionado manualmente para ofrecer una experiencia que solo se encuentra en competiciones de barismo. Su perfil floral y delicado es el resultado de una fermentación controlada diseñada para resaltar la elegancia de la variedad."
    },
    {
        id: 2,
        name: 'Bourbon Rojo',
        price: '$100.000',
        tag: 'Nuevo',
        img: '/assets/img/Bourbon Rojo.jpg',
        description: 'Dulzura excepcional y cuerpo sedoso. Una mutación famosa.',
        traceability: [
            { icon: '📍', label: 'Origen', value: 'Finca Las Flores, Huila', tooltip: 'Microclima ideal para maduración lenta.' },
            { icon: '⛰️', label: 'Altura', value: '1.750 m.s.n.m.', tooltip: 'Altura media-alta para balance perfecto.' },
            { icon: '🍒', label: 'Variedad', value: 'Bourbon Rojo', tooltip: 'Híbrido natural entre Bourbon Rojo y Amarillo.' },
            { icon: '🍇', label: 'Proceso', value: 'Natural Anaeróbico', tooltip: 'Fermentación sin oxígeno para potenciar frutas.' },
            { icon: '👨‍🌾', label: 'Productor', value: 'Familia Lasso', tooltip: '3 generaciones de caficultores.' },
        ],
        sensory: {
            acidity: 7,
            body: 8,
            sweetness: 10,
            aroma: 8,
            aftertaste: 8,
        },
        notes: [
            { icon: '🍓', label: 'Fresas', description: 'Notas a frutos rojos maduros.' },
            { icon: '🍷', label: 'Vino', description: 'Cuerpo vinoso y fermentado.' },
            { icon: '🍫', label: 'Chocolate', description: 'Final dulce y prolongado.' },
        ],
        story: "El Bourbon Rojo es conocido como el 'Champán de los cafés'. Su dulzura natural es potenciada por un proceso anaeróbico de 48 horas. Al probarlo, sentirás una explosión de frutas rojas seguida de un abrazo cálido de chocolate. Es un café que conecta la innovación del proceso con la tradición del cultivo."
    },
    {
        id: 3,
        name: 'Tiramisú Artesanal',
        price: '$12.000',
        tag: 'Dulce',
        img: '/assets/img/Tiramisu Artesanal.jpg',
        description: 'Clásico italiano con nuestro toque de café especial.',
        traceability: [
            { icon: '🇮🇹', label: 'Estilo', value: 'Veneciano', tooltip: 'Receta tradicional.' },
            { icon: '☕', label: 'Café', value: 'Espresso Blend', tooltip: 'Usamos nuestro café de la casa.' },
        ],
        sensory: { acidity: 2, body: 9, sweetness: 7, aroma: 8, aftertaste: 8 },
        notes: [{ icon: '🧀', label: 'Mascarpone', description: 'Cremoso y fresco.' }],
        story: "Nuestro Tiramisú no es solo un postre, es un homenaje al café. Utilizamos nuestros propios granos recién molidos para remojar las soletas, creando un equilibrio perfecto entre la intensidad del espresso y la suavidad de la crema mascarpone."
    },
    {
        id: 4,
        name: 'Cheesecake',
        price: '$14.000',
        tag: 'Dulce',
        img: '/assets/img/Cheesecake.jpg',
        description: 'Suavidad horneada con frutos del bosque.',
        traceability: [], sensory: { acidity: 5, body: 8, sweetness: 6, aroma: 7, aftertaste: 7 },
        notes: [], story: "Cheesecake clásico estilo New York, horneado lentamente para lograr esa textura densa pero suave que se deshace en la boca."
    }
];
