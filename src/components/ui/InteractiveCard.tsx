'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import styles from './InteractiveCard.module.scss';
import { Color } from 'three';

// Shared Props Interface
interface ModelProps {
    resolution?: number;
    samples?: number;
    isMobile?: boolean;
}

// Variant 1: Donut (Standard Pink)
function ProceduralDonut({ isMobile = false }: ModelProps) {
    return (
        <mesh rotation={[Math.PI / 2.5, 0, 0]} scale={[1.5, 1.5, 1.5]}>
            {/* Reduced segments for mobile */}
            <torusGeometry args={isMobile ? [0.8, 0.4, 16, 32] : [0.8, 0.4, 24, 48]} />
            <meshStandardMaterial
                color="#FF69B4"
                roughness={0.3}
                metalness={0.1}
            />
        </mesh>
    );
}

// Variant 2: Cupcake (Standard Blue Frosting)
function ProceduralCupcake({ isMobile = false }: ModelProps) {
    return (
        <group scale={[1.5, 1.5, 1.5]} position={[0, -0.5, 0]}>
            {/* Base */}
            <mesh>
                <cylinderGeometry args={isMobile ? [0.6, 0.4, 0.8, 16] : [0.6, 0.4, 0.8, 24]} />
                <meshStandardMaterial color="#F4A460" />
            </mesh>
            {/* Frosting (Solid Blue) */}
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={isMobile ? [0.65, 16, 16] : [0.65, 24, 24]} />
                <meshStandardMaterial
                    color="#87CEEB"
                    roughness={0.3}
                />
            </mesh>
            {/* Cherry (Red) */}
            <mesh position={[0, 1.1, 0]}>
                <sphereGeometry args={isMobile ? [0.15, 8, 8] : [0.15, 12, 12]} />
                <meshStandardMaterial color="#FF0000" roughness={0.1} />
            </mesh>
        </group>
    );
}

// Variant 3: Abstract Candy (Standard Green)
function ProceduralCandy({ isMobile = false }: ModelProps) {
    return (
        <mesh rotation={[0, 0, 0]} scale={[1.3, 1.3, 1.3]}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color="#98FB98"
                roughness={0.3}
                metalness={0.1}
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

    // Mobile Check for Performance Tuning (not hiding)
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        const resizeListener = () => checkMobile();
        window.addEventListener('resize', resizeListener);

        const timer = setTimeout(() => setIsMounted(true), 100); // Faster mount
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    // Performance Props based on Device
    const dpr: [number, number] = isMobile ? [1, 1.5] : [1, 2]; // Slightly better dpr for mobile but capped
    const resolution = isMobile ? 256 : 512;
    const samples = isMobile ? 4 : 6;

    // Static Image Mapping (no longer used for fallback, but kept if needed elsewhere)
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
                ) : (
                    <Canvas shadows={!isMobile} dpr={dpr} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <Suspense fallback={null}>
                            <Float speed={isMobile ? 1 : 2} rotationIntensity={0.5} floatIntensity={0.5}>
                                <Stage environment="city" intensity={0.5} shadows={false}>
                                    <ModelComponent
                                        resolution={resolution}
                                        samples={samples}
                                        isMobile={isMobile}
                                    />
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
