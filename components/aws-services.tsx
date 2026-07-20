'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { awsServices } from '@/lib/data';
import * as Icons from 'lucide-react';

const AWSServices = () => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Server: Icons.Server,
    HardDrive: Icons.HardDrive,
    Zap: Icons.Zap,
    Database: Icons.Database,
    Brain: Icons.Brain,
    TrendingUp: Icons.TrendingUp,
    Link: Icons.Link,
    Eye: Icons.Eye,
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
          AWS Services We Use
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore the core AWS services we teach and build with
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {awsServices.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg p-6 backdrop-blur-md transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(91, 33, 182, 0.05) 100%)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)',
              }}
            >
              {/* Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0"
                animate={{
                  boxShadow: [
                    'inset 0 0 0px rgba(124, 58, 237, 0)',
                    'inset 0 0 20px rgba(124, 58, 237, 0.2)',
                    'inset 0 0 0px rgba(124, 58, 237, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Icon Container */}
              <motion.div
                className="mb-4 inline-flex p-3 rounded-lg"
                style={{
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                  {IconComponent && <IconComponent size={24} />}
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AWSServices;
