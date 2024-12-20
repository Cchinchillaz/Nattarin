import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Cat } from '../components/Cat'
import { calculateSizes } from '../constants/index.js'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import Cube from '../components/Cube.jsx'
import CatCamera from '../components/CatCamera.jsx'
function Hero() {
  // const c = useControls('Cat',{
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   }, rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   }, scaleX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },scaleY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },scaleZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   }
  // })
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-row relative">
      <div className="mx-auto flex flex-col w-full
      sm:mt-36 mt-20 c-spacae gap-3 pl-6 sm:pl-12 pr-6 sm:pr-12 z-10">
        <div className="content w-full">
        <div className="text-container">
          <h1 data-text='Nattarin' className='sm:text-10xl text-7xl font-black text-white-800 text-left name-logo'>Nattarin</h1>
          <h1 data-text='Portfolio' className='sm:text-10xl text-7xl font-black text-white-800 text-left port-logo'>Portfolio</h1>
        </div>
      </div>
        <p className="sm:text-3xl text-xl font-medium text-white-800 text-left font-generalsans">
          Hi, I am Nattarin <span className="waving-hand">👋</span>
        </p>
        <p className='sm:text-xl text-lg text-white-800 text-left font-generalsans'>
          I am a computer engineering student at CU.
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <CatCamera>
              <Cat scale={isMobile? 2.2:2.9} position={isMobile? [2,-0.3,10]:[10,-0.3,10]} rotation={[-2.9,-2.7,3.3]} />
            </CatCamera>
            <group>
              <Target position={sizes.targetPosition}/>
              <Cube position={sizes.cubePosition} scale = {1.2}/>
            </group>
              <ambientLight intensity={1} />
              <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
