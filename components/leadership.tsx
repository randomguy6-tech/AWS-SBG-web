'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { team } from '@/lib/data';
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Meet the Core Team
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Incredible individuals driving AWS SBG UOK forward
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(91, 33, 182, 0.08) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)',
            }}
          >
            {/* Glow Background on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            />

            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              {/* Team Member Image */}
              <motion.div
                className="mb-6 w-40 h-40 mx-auto rounded-2xl overflow-hidden shadow-lg"
                style={{
                  border: '3px solid rgba(124, 58, 237, 0.5)',
                  boxShadow: '0 0 30px rgba(124, 58, 237, 0.2)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)' }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  style={{
                    filter: 'brightness(1.05)',
                  }}
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {member.name}
              </h3>

              {/* Role Badge */}
              <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold text-purple-300 bg-purple-500/20 border border-purple-500/30">
                {member.role}
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 pt-4 border-t border-purple-500/20">
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
