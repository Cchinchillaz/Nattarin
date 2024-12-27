'use client';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import QuestionMark from '../components/QuestionMark';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';

export default function Index() {
  return (
    <Canvas style={{background: '#1a1917',height: '300px'}}>
        <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset="city" />
        <Suspense fallback={<CanvasLoader />}>
                <group>
                  <QuestionMark />
                </group>
              </Suspense>
    </Canvas>
  )
}