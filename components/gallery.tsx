'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images = [
    { id: 1, src: '/team-photo-1.png', span: 'md:col-span-2 md:row-span-2', height: 'md:h-80', alt: 'AWS SBG Team' },
    { id: 2, src: '/team-photo-2.png', span: 'md:col-span-1 md:row-span-1', height: 'md:h-40', alt: 'Team Meeting' },
    { id: 3, src: '/award-photo.png', span: 'md:col-span-1 md:row-span-1', height: 'md:h-40', alt: 'Award Ceremony' },
    { id: 4, src: '/team-photo-3.png', span: 'md:col-span-1 md:row-span-1', height: 'md:h-40', alt: 'Team Event' },
    { id: 5, src: '/team-photo-4.png', span: 'md:col-span-1 md:row-span-1', height: 'md:h-40', alt: 'Workshop' },
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
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-transparent to-purple-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredImage === image.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

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
              <span className="text-white font-semibold text-lg relative z-20 bg-black/40 px-4 py-2 rounded-lg">
                {image.alt}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
