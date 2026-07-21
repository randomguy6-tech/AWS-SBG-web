'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { benefits } from '@/lib/data';
import InfiniteCarousel from './infinite-carousel';
import SectionHeading from './section-heading';
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

  const renderBenefitCard = (benefit: any) => {
    const IconComponent = iconMap[benefit.icon];
    return (
      <motion.div
        className="surface-card group relative overflow-hidden rounded-2xl p-6 h-full"
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-500/20 group-hover:text-purple-300">
            {IconComponent && <IconComponent size={22} />}
          </div>
          <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
            {benefit.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
            {benefit.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why us"
          title="Why Join Us?"
          subtitle="Discover the benefits of being part of our community"
          className="mb-14"
        />

        <div className="relative px-4">
          <InfiniteCarousel
            items={benefits}
            renderCard={renderBenefitCard}
            itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
            autoPlayDuration={25}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
