'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { team } from '@/lib/data';
import SectionHeading from './section-heading';
import * as Icons from 'lucide-react';

const Leadership = () => {
  const getSocialIcon = (key: string) => {
    switch (key) {
      case 'linkedin':
        return <Icons.Link size={20} />;
      case 'github':
        return <Icons.GitBranch size={20} />;
      case 'twitter':
        return <Icons.Share2 size={20} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="The people"
        title="Meet the Core Team"
        subtitle="Incredible individuals driving AWS SBG UOK forward"
        className="mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="surface-card group relative overflow-hidden rounded-2xl"
            whileHover={{ y: -6 }}
          >
            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              {/* Team Member Image */}
              <motion.div
                className="mb-5 w-32 h-32 mx-auto rounded-2xl overflow-hidden ring-1 ring-purple-500/30"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-lg font-semibold tracking-tight text-white mb-2 group-hover:text-purple-300 transition-colors">
                {member.name}
              </h3>

              {/* Role Badge */}
              <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/25">
                {member.role}
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 pt-4 border-t border-purple-500/15">
                {Object.entries(member.socials).map(([key, url]) => (
                  url !== '#' && (
                    <motion.a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-400 hover:text-purple-400 transition-colors"
                      style={{
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(124, 58, 237, 0.2)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {getSocialIcon(key)}
                    </motion.a>
                  )
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
