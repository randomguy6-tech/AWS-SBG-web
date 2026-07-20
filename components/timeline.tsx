'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { events } from '@/lib/data';

const Timeline = () => {
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
          Events Timeline
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our journey of learning, growing, and building together
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-500/0 transform -translate-x-1/2" />

        {/* Timeline Events */}
        <div className="space-y-8 md:space-y-16">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center gap-8`}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  className="relative p-6 rounded-xl backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(91, 33, 182, 0.05) 100%)',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 25px rgba(124, 58, 237, 0.4)',
                  }}
                >
                  <div className="text-sm font-semibold text-purple-400 mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-400">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <motion.div
                className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 relative z-10"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.3 }}
              >
                <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-pulse" />
              </motion.div>

              {/* Spacer */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
