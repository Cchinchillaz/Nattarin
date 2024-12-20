import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

function CatCamera({children, isMobile}) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position,[0,0,30],0.25,delta);
    if(!isMobile){
        easing.dampE(groupRef.current.rotation,[-state.pointer.y/3,-state.pointer.x/5,0],0.25,delta);
      }
  })
  return (
    <group ref = {groupRef} scale={isMobile? 0.8:1}>{children}</group>
  )
}

export default CatCamera
