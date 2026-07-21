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
      {/* Campus Illustration Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Base image: anchored to the bottom so the building/trees always sit at the base
            while the purple sky fills the space behind the content on any screen size */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-campus-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
          }}
        />
        {/* Purple sky extension so the top never shows a hard edge on tall/wide screens */}
        <div
          className="absolute inset-x-0 top-0 h-2/3"
          style={{
            background: `linear-gradient(to bottom, #2a1b4d 0%, rgba(42, 27, 77, 0.4) 60%, transparent 100%)`,
          }}
        />
        {/* Readability overlay behind the hero content */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(9, 9, 11, 0.65) 0%, rgba(9, 9, 11, 0.35) 45%, transparent 75%)`,
          }}
        />
      </div>

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
            Backed by AWS
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
          AWS{' '}
          <span style={{ color: THEME_COLORS.primary }}>SBG</span>{' '}
          UOK
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

          <a
            href="https://chat.whatsapp.com/KeybuWmbJMdJxQ5uu2cpmd?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold text-white text-base sm:text-lg transition-all duration-300 inline-block"
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
          </a>
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
