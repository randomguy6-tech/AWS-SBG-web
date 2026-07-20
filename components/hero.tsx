'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

const THEME_COLORS = {
  primary: '#7C3AED',
  darkPurple: '#5B21B6',
  black: '#09090B',
  white: '#FFFFFF',
  gray: '#A1A1AA',
};

// Animated background with gradient and subtle effects
const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, rgba(91, 33, 182, 0.05) 50%, #09090B 100%)`,
        }}
      />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.08) 25%, rgba(124, 58, 237, 0.08) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.08) 75%, rgba(124, 58, 237, 0.08) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.08) 25%, rgba(124, 58, 237, 0.08) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.08) 75%, rgba(124, 58, 237, 0.08) 76%, transparent 77%, transparent)`,
        backgroundSize: '50px 50px',
      }} />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.darkPurple})`,
          top: '-10%',
          right: '-5%',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: `linear-gradient(135deg, ${THEME_COLORS.darkPurple}, ${THEME_COLORS.primary})`,
          bottom: '-5%',
          left: '-3%',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  );
};

// Navigation bar
const HeroNavbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-20 px-6 py-4"
      style={{
        background: 'rgba(9, 9, 11, 0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <img src="/aws-sbg-logo.png" alt="AWS SBG UOK" className="h-12 w-12" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white">AWS SBG UOK</div>
            <div className="text-xs text-gray-400">University of Karachi</div>
          </div>
        </motion.div>

        {/* Social links - placeholder for future */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-4"
        >
          <button className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
            Home
          </button>
          <button className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
            About
          </button>
          <button className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
            Events
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

// Main Hero Component
export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background */}
      <BackgroundEffects />

      {/* Navbar */}
      <HeroNavbar />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Display */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.img
            src="/aws-sbg-logo.png"
            alt="AWS SBG UOK Logo"
            className="h-28 w-28 mx-auto mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 100 }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div
            className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
            style={{
              color: THEME_COLORS.primary,
              border: `1px solid ${THEME_COLORS.primary}`,
              background: `rgba(124, 58, 237, 0.1)`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Empowering Cloud Innovators
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          style={{
            color: THEME_COLORS.white,
            textShadow: `0 0 30px rgba(124, 58, 237, 0.3)`,
          }}
        >
          Build.{' '}
          <span style={{ color: THEME_COLORS.primary }}>Learn.</span>{' '}
          Innovate.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Empowering University of Karachi students with Cloud Computing, AI, DevOps, and modern software
          engineering through workshops, projects, hackathons and community events.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="https://www.meetup.com/aws-cloud-club-at-univ-of-karachi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-lg font-semibold text-white text-base sm:text-lg transition-all duration-300 overflow-hidden inline-flex items-center justify-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.darkPurple})`,
              boxShadow: `0 0 30px ${THEME_COLORS.primary}60`,
              border: `1px solid rgba(255, 255, 255, 0.2)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 50px ${THEME_COLORS.primary}80, 0 0 100px ${THEME_COLORS.primary}40`;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${THEME_COLORS.primary}60`;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Join Meetup Group
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            className="px-8 py-4 rounded-lg font-semibold text-white text-base sm:text-lg transition-all duration-300"
            style={{
              background: `rgba(124, 58, 237, 0.15)`,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: `1.5px solid ${THEME_COLORS.primary}`,
              boxShadow: `0 0 20px ${THEME_COLORS.primary}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `rgba(124, 58, 237, 0.25)`;
              e.currentTarget.style.boxShadow = `0 0 40px ${THEME_COLORS.primary}60`;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `rgba(124, 58, 237, 0.15)`;
              e.currentTarget.style.boxShadow = `0 0 20px ${THEME_COLORS.primary}40`;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explore Community
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        >
          <div
            className="w-7 h-11 rounded-full border-2 flex justify-center p-2 cursor-pointer hover:border-opacity-100 border-opacity-50 transition-all"
            style={{ borderColor: THEME_COLORS.primary }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full"
              style={{ backgroundColor: THEME_COLORS.primary }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-5 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, rgba(9, 9, 11, 0.8))`,
        }}
      />
    </section>
  );
};

export default Hero;
