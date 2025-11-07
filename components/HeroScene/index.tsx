import React from "react";
import {
  Canvas,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Text, useGLTF } from "@react-three/drei";
import { gsap } from "@/helpers/gsap"; // Adjust the import path for gsap if needed
import * as THREE from "three";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const ResponsiveText: React.FC = () => {
  // Handle window resize
  const [size, setSize] = React.useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate scale based on window size
  const scale = Math.min(size[0] / 1000, size[1] / 1000);
  const maxScale = 1; // Maximum scale to prevent scaling up too much
  const clampedScale = Math.min(scale, maxScale);

  // State to handle rotation
  const [rotation, setRotation] = React.useState<[number, number, number]>([
    0, 0, 0,
  ]);
  const textRef = React.useRef<any>(null);
  const textRefLine2 = React.useRef<any>(null);

  // Update rotation based on mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize x
    const y = (event.clientY / window.innerHeight) * 2 - 1; // Normalize y
    // Set rotation based on mouse position with a small multiplier
    setRotation([y * 0.1, x * 0.1, 0]); // Minimal rotation
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the text on mount
  React.useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.position,
        { y: -2 }, // Start position
        { y: 0, duration: 1, ease: "power2.out" } // End position with easing
      );
      gsap.fromTo(
        textRefLine2.current.position,
        { y: -3 }, // Start position
        { y: -1, duration: 1, ease: "power2.out" } // End position with easing
      );
    }
  }, []);

  const textStyle = {
    fontFamily: "/fonts/CircularStd-Black.woff",
    color: "#000",
    fontWeight: 500,
  };

  return (
    <>
      <Text
        ref={textRef}
        scale={[clampedScale, clampedScale, clampedScale]} // Scale text based on window size
        position={[0, 0, 0]} // Position of the text
        fontSize={1} // Base font size
        rotation={rotation} // Apply rotation
        {...textStyle}
      >
        One thing that we do
        <meshBasicMaterial attach="material" />
      </Text>
      <Text
        ref={textRefLine2}
        scale={[clampedScale, clampedScale, clampedScale]} // Scale text based on window size
        position={[0, -1, 0]} // Position of the text
        fontSize={1} // Base font size
        rotation={rotation} // Apply rotation
        {...textStyle}
      >
        is not make crapp
        <meshBasicMaterial attach="material" />
      </Text>
      {/* <Text
        scale={[clampedScale, clampedScale, clampedScale]} // Scale text based on window size
        position={[4.17, -1.04, 0]} // Position of the bold text
        fontSize={1} // Base font size
        {...textStyle}
        fontWeight={700} // Apply bold style
      >
        app
      </Text> */}
    </>
  );
};

const GLBModel: React.FC = () => {
  const { scene } = useThree(); // Get the current WebGL renderer
  const { scene: modelScene } = useGLTF("/O.glb"); // Load the GLB model
  const { scene: suitchModel } = useGLTF("/suitch.glb"); // Load the GLB model

  // State to handle mouse position
  const [mousePosition, setMousePosition] = React.useState<[number, number]>([
    0, 0,
  ]);

  // Update mouse position based on mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize x
    const y = (event.clientY / window.innerHeight) * 2 - 1; // Normalize y
    setMousePosition([x, y]);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Apply a transparent glassy/plastic material to the models
  React.useEffect(() => {
    modelScene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff, // Color of the material
          roughness: 0.3, // Lower roughness for a glossier look
          metalness: 0.5, // Slight metalness for reflection
          transmission: 0.9, // High transmission for a glassy effect
          clearcoat: 1.0, // High clear coat for additional gloss
          clearcoatRoughness: 1.0, // Slight roughness on the clear coat
          opacity: 0.3, // Adjust opacity for transparency
          transparent: true, // Enable transparency
        });
      }
    });
    suitchModel.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff, // Color of the material
          roughness: 0.0, // Lower roughness for a glossier look
          metalness: 0.5, // Slight metalness for reflection
          transmission: 0.9, // High transmission for a glassy effect
          clearcoat: 1.0, // High clear coat for additional gloss
          clearcoatRoughness: 1.0, // Slight roughness on the clear coat
          opacity: 0.2, // Adjust opacity for transparency
          transparent: true, // Enable transparency
        });
      }
    });
  }, [modelScene, suitchModel]);

  React.useEffect(() => {
    let modelTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    modelTl.fromTo(
      modelScene.scale,
      { x: 0.15, y: 0.15, z: 0.15 },
      {
        x: 0.25,
        y: 0.25,
        z: 0.25,
      }
    );
    modelTl.fromTo(modelScene.position, { y: 0 }, { x: 1 });
  }, [modelScene, suitchModel]);

  // Move the models based on mouse position
  useFrame(() => {
    const [mouseX, mouseY] = mousePosition;
    modelScene.rotation.y += 0.01;
    suitchModel.position.y = Math.sin(Date.now() * 0.001) * 0.2; // Adjust amplitude and frequency as needed
    modelScene.position.set(-2.8 + mouseX * 0.1, 0, 1 + mouseY * 0.1); // Apply slight movement from initial position
    suitchModel.rotation.set(0 + mouseX * 0.1, 0, 0 + mouseY * 0.1); // Apply slight movement from initial position
  });

  return (
    <>
      <primitive
        object={modelScene}
        position={[-2.8, 0, 1]} // Initial position
        scale={0.15} // Scale the model if necessary
        rotation={[0, Math.PI / 4, 0]}
      />
      <primitive
        object={suitchModel}
        position={[2.8, 0, -1]} // Initial position
        scale={0.4} // Scale the model if necessary
      />
    </>
  );
};

const HeroScene: React.FC = () => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      shadows
      gl={{ alpha: false }} // Disable alpha to allow background color to show
      camera={{ position: [0, 0, 5], fov: 75 }} // Adjust camera position if necessary
    >
      <color attach="background" args={["#f2f2f2"]} />{" "}
      {/* Set the background color */}
      <ambientLight intensity={0.5} color={"#836ffe"} />
      <pointLight
        position={[-2.9, 0, 10]}
        color={"#836ffe"}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[3.0, 0, 2]}
        color={"#836ffe"}
        intensity={1}
        castShadow
      />
      <ResponsiveText />
      <GLBModel />
    </Canvas>
  );
};

export default HeroScene;
