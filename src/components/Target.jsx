import React from 'react'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function Target(props) {
  const targetRef = useRef();
  const {scene} = useGLTF('models/react.glb');
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Target
