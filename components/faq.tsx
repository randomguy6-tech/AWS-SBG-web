'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faq } from '@/lib/data';
import SectionHeading from './section-heading';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about joining us"
        className="mb-14"
      />

      <div className="space-y-3">
        {faq.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <motion.button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full text-left p-5 rounded-xl transition-colors duration-300"
              style={{
                background:
                  openId === item.id
                    ? 'rgba(124, 58, 237, 0.12)'
                    : 'rgba(124, 58, 237, 0.05)',
                border:
                  openId === item.id
                    ? '1px solid rgba(124, 58, 237, 0.45)'
                    : '1px solid rgba(124, 58, 237, 0.16)',
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4 text-purple-400"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
            </motion.button>

            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div
                    className="p-6 pt-0"
                    style={{
                      background: 'rgba(124, 58, 237, 0.05)',
                      borderLeft: '3px solid rgba(124, 58, 237, 0.4)',
                    }}
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
