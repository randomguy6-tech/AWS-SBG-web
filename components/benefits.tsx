'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { benefits } from '@/lib/data';
import * as Icons from 'lucide-react';

const Benefits = () => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    BookOpen: Icons.BookOpen,
    Users: Icons.Users,
    Mic2: Icons.Mic2,
    Award: Icons.Award,
    Zap: Icons.Zap,
    Star: Icons.Star,
    GitBranch: Icons.GitBranch,
    Rocket: Icons.Rocket,
    Check: Icons.Check,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Why Join Us?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover the incredible benefits of being part of our community
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon];
          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg p-6 backdrop-blur-md"
              style={{
                background: 'rgba(124, 58, 237, 0.08)',
                border: '1px solid rgba(124, 58, 237, 0.15)',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 25px rgba(124, 58, 237, 0.4)',
              }}
            >
              {/* Icon Background */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
