'use client';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import QuestionMark from '../components/QuestionMark';

export default function Index() {
  return (
    <Canvas style={{background: '#1a1917',height: '300px'}}>
        <QuestionMark />
        <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset="city" />
    </Canvas>
  )
}