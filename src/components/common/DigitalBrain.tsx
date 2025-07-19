"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const DigitalBrain = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      stars: THREE.Points;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000,
      );
      camera.position.z = 5;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({
        canvas: mountRef.current as HTMLCanvasElement,
        alpha: true, // Allows transparent background
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Create star particles
      const starGeo = new THREE.BufferGeometry();
      const starVertices = [];
      for (let i = 0; i < 8000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
      }
      starGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starVertices, 3),
      );

      // Texture for the particles
      const sprite = new THREE.TextureLoader().load(
        "https://placehold.co/16x16/14B8A6/000000.png?text=+",
      );
      const starMaterial = new THREE.PointsMaterial({
        color: 0x14b8a6, // Teal color
        size: 0.7,
        map: sprite,
        transparent: true,
        opacity: 0.7,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      // Handle window resizing
      window.addEventListener("resize", onWindowResize, false);

      // Start the animation loop
      animate();
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      // Animate the starfield
      if (stars) {
        stars.rotation.x += 0.0001;
        stars.rotation.y += 0.0001;
      }

      // Render the scene
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      // Basic cleanup
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        // You might want to traverse and dispose of geometries, materials, textures
        // For this simple case, it's not strictly necessary but good practice
        scene.remove(stars);
        (stars.geometry as THREE.BufferGeometry).dispose();
        (
          (stars.material as THREE.PointsMaterial).map as THREE.Texture
        )?.dispose();
        (stars.material as THREE.PointsMaterial).dispose();
      }
    };
  }, []);

  return (
    <canvas
      id="bg-canvas"
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default DigitalBrain;
