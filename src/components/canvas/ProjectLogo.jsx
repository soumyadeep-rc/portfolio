import React, { Suspense, useEffect, useRef } from "react";
import { Canvas} from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
      <>
        <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <Float speed={8} rotationIntensity={0.8}>
      <mesh castShadow receiveShadow scale={2} onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
    onPointerLeave={ () => { document.body.style.cursor = 'default' } }>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
      </Float>

      </>
  );
};

const ProjectLogo = ({ icon }) => {
  return (
    <Canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ProjectLogo;