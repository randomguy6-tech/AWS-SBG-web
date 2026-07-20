'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { socials } from '@/lib/data';

const JoinCommunity = () => {
  const getPlatformIcon = (platform: string) => {
    const icons: { [key: string]: string } = {
      Instagram: '📷',
      LinkedIn: '💼',
      WhatsApp: '💬',
      Meetup: '👥',
    };
    return icons[platform] || '🔗';
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Become Part of the Community
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Join AWS Student Builder Group UOK and connect with thousands of passionate cloud enthusiasts
        </p>
      </motion.div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((social, index) => {
          const platformIcon = getPlatformIcon(social.name);
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl p-8 text-center backdrop-blur-md transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(91, 33, 182, 0.08) 100%)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)',
              }}
            >
              {/* Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0"
                animate={{
                  boxShadow: [
                    'inset 0 0 0px rgba(124, 58, 237, 0)',
                    'inset 0 0 25px rgba(124, 58, 237, 0.2)',
                    'inset 0 0 0px rgba(124, 58, 237, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="mb-4 inline-flex p-4 rounded-lg text-4xl"
                  style={{
                    background: 'rgba(124, 58, 237, 0.2)',
                    border: '1px solid rgba(124, 58, 237, 0.4)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {platformIcon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Join our community on {social.name}
                </p>
                <motion.div
                  className="inline-block px-6 py-2 rounded-lg font-semibold text-white transition-all"
                  style={{
                    background: 'rgba(124, 58, 237, 0.3)',
                    border: '1px solid rgba(124, 58, 237, 0.5)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(124, 58, 237, 0.5)',
                  }}
                >
                  Join Now
                </motion.div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default JoinCommunity;
