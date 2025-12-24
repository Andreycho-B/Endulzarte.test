'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import styles from './InteractiveCard.module.scss';
import { Color } from 'three';

// Shared Props Interface
interface ModelProps {
    resolution?: number;
    samples?: number;
}

// Variant 1: Donut (Glassy Pink)
function ProceduralDonut({ resolution = 512, samples = 6 }: ModelProps) {
    return (
        <mesh rotation={[Math.PI / 2.5, 0, 0]} scale={[1.5, 1.5, 1.5]}>
            <torusGeometry args={[0.8, 0.4, 24, 48]} /> {/* Optimized Segments */}
            <MeshTransmissionMaterial
                backside
                backsideThickness={1}
                thickness={2}
                chromaticAberration={0.8}
                anisotropy={1}
                distortion={0.5}
                distortionScale={1}
                temporalDistortion={2}
                color="#FF69B4"
                roughness={0.1}
                resolution={resolution}
                samples={samples}
            />
        </mesh>
    );
}

// Variant 2: Cupcake (Frosted Glass)
function ProceduralCupcake({ resolution = 512, samples = 6 }: ModelProps) {
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
                    resolution={resolution}
                    samples={samples}
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
function ProceduralCandy({ resolution = 512, samples = 6 }: ModelProps) {
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
                resolution={resolution}
                samples={samples}
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
        const timer = setTimeout(() => setIsMounted(true), 100); // Faster mount
        return () => clearTimeout(timer);
    }, []);

    // Performance Props based on Device
    const dpr: [number, number] = isMobile ? [1, 1] : [1, 1.5]; // Explicit tuple type
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
                                    <ModelComponent resolution={resolution} samples={samples} />
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
