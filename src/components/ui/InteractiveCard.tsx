'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import styles from './InteractiveCard.module.scss';
import { Color } from 'three';

// Variant 1: Donut (Glassy Pink)
function ProceduralDonut() {
    return (
        <mesh rotation={[Math.PI / 2.5, 0, 0]} scale={[1.5, 1.5, 1.5]}>
            <torusGeometry args={[0.8, 0.4, 24, 48]} /> {/* Optimized Segments */}
            <MeshTransmissionMaterial
                backside
                backsideThickness={1} // Reduced
                thickness={2}
                chromaticAberration={0.8}
                anisotropy={1}
                distortion={0.5}
                distortionScale={1}
                temporalDistortion={2}
                color="#FF69B4"
                roughness={0.1}
                resolution={512} // Optimized Resolution
                samples={6}      // Optimized Samples
            />
        </mesh>
    );
}

// Variant 2: Cupcake (Frosted Glass)
function ProceduralCupcake() {
    return (
        <group scale={[1.5, 1.5, 1.5]} position={[0, -0.5, 0]}>
            {/* Base */}
            <mesh>
                <cylinderGeometry args={[0.6, 0.4, 0.8, 24]} /> {/* Optimized Segments */}
                <meshStandardMaterial color="#F4A460" />
            </mesh>
            {/* Frosting (Icy Blue Glass) */}
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.65, 24, 24]} /> {/* Optimized Segments */}
                <MeshTransmissionMaterial
                    thickness={2}
                    chromaticAberration={0.5}
                    distortion={0.5}
                    color="#87CEEB"
                    roughness={0.1}
                    resolution={512}
                    samples={6}
                />
            </mesh>
            {/* Cherry (Red Glass) */}
            <mesh position={[0, 1.1, 0]}>
                <sphereGeometry args={[0.15, 12, 12]} /> {/* Optimized Segments */}
                <meshStandardMaterial color="#FF0000" roughness={0} />
            </mesh>
        </group>
    );
}

// Variant 3: Abstract Candy (Mint Glass)
function ProceduralCandy() {
    return (
        <mesh rotation={[0, 0, 0]} scale={[1.3, 1.3, 1.3]}>
            <icosahedronGeometry args={[1, 0]} />
            <MeshTransmissionMaterial
                thickness={3}
                chromaticAberration={1}
                anisotropy={0.5}
                distortion={1}
                distortionScale={0.5}
                color="#98FB98"
                resolution={512}
                samples={6}
            />
        </mesh>
    );
}

const MODELS = {
    donut: ProceduralDonut,
    cupcake: ProceduralCupcake,
    candy: ProceduralCandy,
};

interface InteractiveCardProps {
    variant?: 'donut' | 'cupcake' | 'candy';
    title: string;
    description: string;
}

export default function InteractiveCard({
    variant = 'donut',
    title,
    description
}: InteractiveCardProps) {
    const ModelComponent = MODELS[variant] || ProceduralDonut;

    // Deferred Loading & Mobile Check
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();

        // Delay mounting
        const timer = setTimeout(() => setIsMounted(true), 500);

        return () => clearTimeout(timer);
    }, []);

    // Static Image Mapping
    const IMAGES = {
        donut: '/assets/img/dessert-1.png',
        cupcake: '/assets/img/dessert-2.png',
        candy: '/assets/img/dessert-3.png',
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.canvasWrapper}>
                {!isMounted ? (
                    <div className={styles.loader} />
                ) : isMobile ? (
                    // Mobile Fallback: Static Image
                    <img
                        src={IMAGES[variant]}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }}
                    />
                ) : (
                    // Desktop: Heavy 3D Context
                    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <Suspense fallback={null}>
                            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                                <Stage environment="city" intensity={0.5} shadows={false}>
                                    <ModelComponent />
                                </Stage>
                            </Float>
                        </Suspense>
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                    </Canvas>
                )}
            </div>
            <div className={styles.cardInfo}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}
