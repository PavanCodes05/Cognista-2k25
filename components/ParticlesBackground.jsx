"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const containerRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particleCount = 500; // Reduced number of particles
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorOptions = [
      new THREE.Color("#A9D8D3"), // Light teal
      new THREE.Color("#F2C9AC"), // Light peach
      new THREE.Color("#D6A7C1"), // Light pink
      new THREE.Color("#F3F3F3"), // Light gray
    ];

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Velocity (slower movement)
      velocities[i] = (Math.random() - 0.5) * 0.001; // Slower movement
      velocities[i + 1] = (Math.random() - 0.5) * 0.001;
      velocities[i + 2] = (Math.random() - 0.5) * 0.001;

      // Color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3)); 
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, // Slightly larger particles for a soft effect
      vertexColors: true,
      transparent: true,
      opacity: 0.7, // Subtle opacity to avoid overshadowing text
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Mouse movement interaction
    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particlesGeometry.attributes.position.array;
      const velocities = particlesGeometry.attributes.velocity.array;

      for (let i = 0; i < particleCount * 3; i += 3) {
        // Update particle positions based on velocities
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Smooth mouse influence on particle velocity
        velocities[i] += (mouse.current.x - velocities[i] * 0.5) * 0.001; // Slow and smooth
        velocities[i + 1] += (mouse.current.y - velocities[i + 1] * 0.5) * 0.001; 

        // Bounce particles off boundaries
        if (positions[i] > 5 || positions[i] < -5) velocities[i] *= -1;
        if (positions[i + 1] > 5 || positions[i + 1] < -5) velocities[i + 1] *= -1;
        if (positions[i + 2] > 5 || positions[i + 2] < -5) velocities[i + 2] *= -1;
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      // Slower rotation for smoother effect
      particleSystem.rotation.x += 0.0001;
      particleSystem.rotation.y += 0.00015;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticlesBackground;
