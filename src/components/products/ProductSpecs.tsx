import React from 'react';
import { ProductSpecification } from '@/data/productData';
import { CheckCircle2 } from 'lucide-react';

interface ProductSpecsProps {
  title: string;
  specs?: ProductSpecification[];
  list?: string[];
  type?: 'grid' | 'list';
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ title, specs, list, type = 'grid' }) => {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="font-display text-xl font-bold text-navy-dark mb-4 border-l-4 border-gold pl-4">
        {title}
      </h4>
      
      {specs && type === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specs.map((spec, idx) => {
            const isLastOdd = specs.length % 2 !== 0 && idx === specs.length - 1;
            return (
              <div 
                key={idx} 
                className={`flex flex-col gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-gold/30 hover:bg-white hover:shadow-sm transition-all duration-300 group ${
                  isLastOdd ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="font-display font-bold text-navy/40 text-[10px] uppercase tracking-[0.15em] border-b border-navy/5 pb-1 group-hover:text-gold transition-colors">
                  {spec.label}
                </span>
                <span className="font-body font-semibold text-navy-dark text-sm leading-snug">
                  {spec.value}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {list && (
        <div className="grid grid-cols-1 gap-4">
          {list.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 group">
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-foreground/80 font-medium text-sm lg:text-base">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSpecs;
