import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

// Fallback component while loading
function Fallback() {
  return null;
}

export default function FluidCanvasHover() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
      }}
      gl={{ 
        antialias: false, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      dpr={[1, 2]}
      frameloop="always"
    >
      <Suspense fallback={<Fallback />}>
        <EffectComposer>
          <Fluid
            radius={0.1}
            curl={10}
            swirl={5}
            distortion={1}
            force={2}
            pressure={0.94}
            densityDissipation={0.98}
            velocityDissipation={0.99}
            intensity={0.4}
            rainbow={true}
            blend={0}
            showBackground={false}
            fluidColor="#262261"
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
