import React from 'react';
import { motion } from 'framer-motion';

interface ProductHighlightProps {
  name: string;
  image: string;
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({ name, image }) => {
  return (
    <div className="w-full my-4 overflow-hidden rounded-2xl border border-navy/10 shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Text */}
        <div className="md:w-3/5 bg-navy p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -right-10 -top-10 w-40 h-40 border-8 border-gold rounded-full" />
            <div className="absolute -left-10 -bottom-10 w-60 h-60 border-8 border-gold/20 rounded-full" />
          </div>
          
          <div className="relative z-10 space-y-2">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-xl md:text-2xl font-bold text-white leading-tight"
            >
              Why choose <span className="text-gold">Standard {name}</span>?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 font-display font-medium tracking-widest uppercase text-[10px]"
            >
              Features and Advantages
            </motion.p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-2/5 relative aspect-[21/9] md:aspect-auto bg-slate-50">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-navy/5 pointer-events-none" />
        </div>
      </div>

    </div>
  );
};

export default ProductHighlight;
