import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-playing logic
  useEffect(() => {
    if (images.length > 1) {
      autoPlayRef.current = setInterval(() => {
        nextImage();
      }, 4000); // Change image every 4 seconds
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIndex, images.length]);

  const handleManualInteraction = (index?: number) => {
    if (index !== undefined) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Main Image Container */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-xl group">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${name} - View ${activeIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation Arrows (Only if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => {
                prevImage();
                handleManualInteraction();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-gold shadow-md z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                nextImage();
                handleManualInteraction();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-gold shadow-md z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/80 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest z-10">
          <Maximize2 className="w-3 h-3 text-gold" />
          Industrial Quality
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className={`grid gap-2 ${images.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => handleManualInteraction(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === idx 
                  ? "border-gold shadow-md scale-95" 
                  : "border-transparent hover:border-gold/30 opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`${name} thumb ${idx + 1}`} className="w-full h-full object-cover" />
              {activeIndex === idx && (
                <div className="absolute inset-0 bg-gold/10 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
