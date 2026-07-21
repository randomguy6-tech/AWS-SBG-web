'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CarouselItem {
  id: number;
  [key: string]: any;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  renderCard: (item: CarouselItem) => React.ReactNode;
  itemsPerPage?: { mobile: number; tablet: number; desktop: number };
  autoPlayDuration?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  renderCard,
  itemsPerPage = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlayDuration = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(itemsPerPage.desktop);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive items visible
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(itemsPerPage.mobile);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(itemsPerPage.tablet);
        setIsMobile(false);
      } else {
        setItemsVisible(itemsPerPage.desktop);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPage]);

  // Create extended array for seamless looping
  const extendedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <motion.div
        ref={containerRef}
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{
          x: [0, -(items.length * (100 / itemsVisible))],
        }}
        transition={{
          duration: autoPlayDuration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          pointerEvents: isHovering ? 'auto' : 'none',
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            style={{
              minWidth: `calc((100% / ${itemsVisible}) - ${1.5 * (itemsVisible - 1) / itemsVisible}rem)`,
            }}
            className="flex-shrink-0"
          >
            {renderCard(item)}
          </div>
        ))}
      </motion.div>

      {/* Left Fade Overlay */}
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black via-black to-transparent pointer-events-none z-10" />
      
      {/* Right Fade Overlay */}
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black via-black to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default InfiniteCarousel;
