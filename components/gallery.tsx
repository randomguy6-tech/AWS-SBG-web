'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images = [
    { id: 1, span: 'md:col-span-2 md:row-span-2', height: 'md:h-80' },
    { id: 2, span: 'md:col-span-1 md:row-span-1', height: 'md:h-40' },
    { id: 3, span: 'md:col-span-1 md:row-span-1', height: 'md:h-40' },
    { id: 4, span: 'md:col-span-1 md:row-span-1', height: 'md:h-40' },
    { id: 5, span: 'md:col-span-1 md:row-span-1', height: 'md:h-40' },
    { id: 6, span: 'md:col-span-2 md:row-span-1', height: 'md:h-40' },
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
          Gallery
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Memorable moments from our events and workshops
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className={`group relative overflow-hidden rounded-xl h-40 ${image.span} ${image.height} cursor-pointer`}
            onHoverStart={() => setHoveredImage(image.id)}
            onHoverEnd={() => setHoveredImage(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {/* Image Placeholder */}
            <div
              className="w-full h-full flex items-center justify-center relative"
              style={{
                background: `linear-gradient(135deg, rgba(124, 58, 237, ${0.1 + index * 0.05}) 0%, rgba(91, 33, 182, ${0.05 + index * 0.03}) 100%)`,
                border: '1px solid rgba(124, 58, 237, 0.2)',
              }}
            >
              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-transparent to-purple-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredImage === image.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image Icon */}
              <svg
                className="w-12 h-12 text-purple-400/50 group-hover:text-purple-300/70 transition-colors relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Zoom Text on Hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredImage === image.id ? 1 : 0,
                scale: hoveredImage === image.id ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-semibold text-lg relative z-20">
                Event Photo
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
