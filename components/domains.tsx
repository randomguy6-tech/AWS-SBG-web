'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { domains } from '@/lib/data';
import InfiniteCarousel from './infinite-carousel';
import * as Icons from 'lucide-react';

const Domains = () => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Cloud: Icons.Cloud,
    Brain: Icons.Brain,
    GitBranch: Icons.GitBranch,
    Code: Icons.Code,
    Lock: Icons.Lock,
    Database: Icons.Database,
  };

  const renderDomainCard = (domain: any) => {
    const IconComponent = iconMap[domain.icon];
    return (
      <motion.div
        className="group relative overflow-hidden rounded-xl p-8 h-full cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(91, 33, 182, 0.05) 100%)',
          border: '1px solid rgba(124, 58, 237, 0.2)',
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)',
        }}
      >
        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(124, 58, 237, 0.3) 100%)',
            padding: '1px',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
            {IconComponent && <IconComponent size={40} />}
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {domain.name}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {domain.description}
          </p>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Our Domains
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the diverse areas of expertise we focus on
          </p>
        </motion.div>

        <div className="relative px-4">
          <InfiniteCarousel
            items={domains}
            renderCard={renderDomainCard}
            itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
            autoPlayDuration={30}
          />
        </div>
      </div>
    </section>
  );
};

export default Domains;
