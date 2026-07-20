'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faq } from '@/lib/data';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg">
          Everything you need to know about joining us
        </p>
      </motion.div>

      <div className="space-y-4">
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
              className="w-full text-left p-6 rounded-lg backdrop-blur-md transition-all duration-300"
              style={{
                background:
                  openId === item.id
                    ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(91, 33, 182, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(91, 33, 182, 0.05) 100%)',
                border:
                  openId === item.id
                    ? '1px solid rgba(124, 58, 237, 0.5)'
                    : '1px solid rgba(124, 58, 237, 0.2)',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
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
