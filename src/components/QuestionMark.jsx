import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

export default function QuestionMark() {
    const { nodes } = useGLTF("models/cube.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    useFrame( () => {
        torus.current.rotation.x += 0.01
        torus.current.rotation.y += 0.01
    })

    // const materialProps = useControls({
    //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    //     transmission: {value: 1, min: 0, max: 1, step: 0.1},
    //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    //     chromaticAberration: { value: 0.02, min: 0, max: 1},
    //     backside: { value: true},
    // })

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.09,
    }
    
    return (
        <group scale={viewport.width / 6} >
            <Text position={[0, 0.3, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                Life's like a box of chocolates
            </Text>
            <Text position={[0, -0.2, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                You never know what you're gonna get
            </Text>
            <mesh ref={torus} {...nodes.Cube} scale={1.5} position={[0, 0, 0]} >
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </group>
    )
}