'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { domains } from '@/lib/data';
import InfiniteCarousel from './infinite-carousel';
import SectionHeading from './section-heading';
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
        className="surface-card group relative overflow-hidden rounded-2xl p-7 h-full cursor-pointer"
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-500/20 group-hover:text-purple-300">
            {IconComponent && <IconComponent size={24} />}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors">
            {domain.name}
          </h3>
          <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
            {domain.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What we cover"
          title="Our Domains"
          subtitle="Explore the diverse areas of expertise we focus on"
          className="mb-14"
        />

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
