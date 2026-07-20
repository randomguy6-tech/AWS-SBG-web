'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const CounterAnimation: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const increment = end / 50;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, suffix }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl p-8 backdrop-blur-md"
      style={{
        background: 'rgba(124, 58, 237, 0.1)',
        border: '1px solid rgba(124, 58, 237, 0.3)',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)',
      }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="mb-4 flex justify-center text-purple-400">
          {icon}
        </div>
        <motion.div className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
          <CounterAnimation value={value} suffix={suffix} />
        </motion.div>
        <p className="text-gray-300 text-lg font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      ),
      value: 150,
      label: 'Active Members',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
        </svg>
      ),
      value: 25,
      label: 'Events Hosted',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      value: 40,
      label: 'Projects Completed',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.5 1.5H19a1 1 0 011 1v1a1 1 0 01-1 1h-.538l-.847 10.5a2 2 0 01-1.99 1.9h-.774a2 2 0 01-1.99-1.9L7.538 4.5H1a1 1 0 01-1-1v-1a1 1 0 011-1h9.5m0 0V1a1 1 0 10-2 0v.5m0 0V1a1 1 0 102 0v.5" />
        </svg>
      ),
      value: 15,
      label: 'Workshops Conducted',
    },
  ];

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
          By The Numbers
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our impact and growth within the community
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
