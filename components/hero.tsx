'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// Color scheme from your theme
const THEME_COLORS = {
  primary: '#7C3AED', // Purple
  darkPurple: '#5B21B6',
  black: '#09090B',
  white: '#FFFFFF',
  gray: '#A1A1AA',
};

// Hero Canvas with Three.js
const HeroCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x09090B, 0.05);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x09090B, 0.1);
    mountRef.current.appendChild(renderer.domElement);

    // Post-processing for bloom effect (purple glow)
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.8,
      0.5,
      0.85
    );
    bloomPass.threshold = 0.2;
    bloomPass.strength = 1.5;
    bloomPass.radius = 0.3;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Animated Grid Background
    const gridGeometry = new THREE.BufferGeometry();
    const gridSize = 100;
    const gridDivisions = 20;
    const gridVertices = [];

    for (let i = 0; i <= gridDivisions; i++) {
      const pos = (i / gridDivisions - 0.5) * gridSize;
      gridVertices.push(-gridSize / 2, 0, pos, gridSize / 2, 0, pos);
      gridVertices.push(pos, 0, -gridSize / 2, pos, 0, gridSize / 2);
    }

    gridGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(gridVertices), 3));
    const gridMaterial = new THREE.LineBasicMaterial({
      color: parseInt(THEME_COLORS.primary.slice(1), 16),
      transparent: true,
      opacity: 0.1,
      fog: true,
    });
    const gridLines = new THREE.LineSegments(gridGeometry, gridMaterial);
    gridLines.rotation.x = Math.PI / 3;
    scene.add(gridLines);

    // Floating Blobs with Aurora Gradient
    const blobGroup = new THREE.Group();
    const blobCount = 5;
    const blobs: THREE.Mesh[] = [];

    for (let i = 0; i < blobCount; i++) {
      const geometry = new THREE.IcosahedronGeometry(2 + Math.random() * 2, 4);
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? parseInt(THEME_COLORS.primary.slice(1), 16) : parseInt(THEME_COLORS.darkPurple.slice(1), 16),
        emissive: i % 2 === 0 ? parseInt(THEME_COLORS.primary.slice(1), 16) : parseInt(THEME_COLORS.darkPurple.slice(1), 16),
        emissiveIntensity: 0.3,
        wireframe: false,
        transparent: true,
        opacity: 0.15,
      });

      const blob = new THREE.Mesh(geometry, material);
      blob.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40 - 20
      );
      blob.scale.set(Math.random() * 0.8 + 0.6, Math.random() * 0.8 + 0.6, Math.random() * 0.8 + 0.6);
      blobGroup.add(blob);
      blobs.push(blob);
    }
    scene.add(blobGroup);

    // Starfield with purple tint
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 800; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 150;
      const z = (Math.random() - 0.5) * 100;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: parseInt(THEME_COLORS.primary.slice(1), 16),
      size: 0.15,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Lighting
    const light = new THREE.PointLight(parseInt(THEME_COLORS.primary.slice(1), 16), 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Animate grid
      gridLines.rotation.z += 0.0002;

      // Animate blobs
      blobs.forEach((blob, i) => {
        blob.rotation.x += 0.0005 * (i % 2 === 0 ? 1 : -1);
        blob.rotation.y += 0.0003 * (i % 2 === 0 ? 1 : -1);
        blob.position.y += Math.sin(elapsedTime * 0.3 + i) * 0.01;
      });

      // Animate stars
      stars.rotation.y += 0.00005;

      // Update light position based on mouse
      light.position.x = mouse.x * 30;
      light.position.y = mouse.y * 20;

      composer.render();
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

// Navigation Component
const HeroNav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-20 p-6 border-b border-purple-900/30"
      style={{
        background: 'rgba(9, 9, 11, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.darkPurple})`,
              boxShadow: `0 0 20px ${THEME_COLORS.primary}80`,
            }}
          >
            <span className="text-white font-bold text-lg">✨</span>
          </div>
          <span className="text-xl font-bold text-white">Voyager</span>
        </div>
        <div className="flex gap-6">
          <button className="text-gray-400 hover:text-white transition-colors">Docs</button>
          <button className="text-gray-400 hover:text-white transition-colors">GitHub</button>
        </div>
      </div>
    </motion.nav>
  );
};

// Main Hero Component
export const Hero = () => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    textControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03 + 0.5,
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    }));

    buttonControls.start({
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 0.8 },
    });
  }, [textControls, buttonControls]);

  if (!mounted) return null;

  const headline = 'Launch Your Future';
  const description =
    'Step into a universe of infinite possibilities with cutting-edge technology and stunning visual experiences.';

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Canvas */}
      <HeroCanvas />

      {/* Navigation */}
      <HeroNav />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Background Glow Effect for Better Text Contrast */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        }} />
        
        {/* Gradient Borders Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 relative z-10"
        >
          <div
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold"
            style={{
              color: THEME_COLORS.primary,
              border: `1px solid ${THEME_COLORS.primary}`,
              background: `rgba(124, 58, 237, 0.1)`,
              backdropFilter: 'blur(10px)',
            }}
          >
            🚀 Welcome to the Future
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white relative z-10"
          style={{
            textShadow: `0 0 40px ${THEME_COLORS.primary}60, 0 0 80px ${THEME_COLORS.darkPurple}40`,
            letterSpacing: '-0.02em',
          }}
        >
          {headline.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 20 }}
              animate={textControls}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={headline.length}
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto relative z-10"
          style={{
            textShadow: `0 0 10px rgba(124, 58, 237, 0.3)`,
          }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={buttonControls}
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        >
          <button
            className="px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.darkPurple})`,
              boxShadow: `0 0 30px ${THEME_COLORS.primary}60, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
              border: `1px solid rgba(255, 255, 255, 0.2)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 50px ${THEME_COLORS.primary}80, inset 0 0 20px rgba(255, 255, 255, 0.15)`;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${THEME_COLORS.primary}60, inset 0 0 20px rgba(255, 255, 255, 0.1)`;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Start Exploring
          </button>
          <button
            className="px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(124, 58, 237, 0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: `1.5px solid ${THEME_COLORS.primary}`,
              boxShadow: `0 0 20px ${THEME_COLORS.primary}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.25)';
              e.currentTarget.style.boxShadow = `0 0 30px ${THEME_COLORS.primary}60`;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.15)';
              e.currentTarget.style.boxShadow = `0 0 20px ${THEME_COLORS.primary}40`;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Learn More
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex justify-center p-2"
            style={{ borderColor: THEME_COLORS.primary }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ backgroundColor: THEME_COLORS.primary }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
