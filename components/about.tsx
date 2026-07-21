'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Who we are"
            title="Our Vision"
            align="left"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-gray-300/90 text-pretty max-w-xl"
          >
            We are a community of{' '}
            <span className="font-semibold text-white">40+ active members</span>{' '}
            dedicated to empowering students at the University of Karachi with
            cloud computing knowledge and real-world AWS experience.
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_20px_60px_-20px_rgba(124,58,237,0.4)]">
            <img
              src="/uok-campus.png"
              alt="University of Karachi Campus"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
