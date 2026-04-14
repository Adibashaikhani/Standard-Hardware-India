import React from 'react';
import { ProductTable as ProductTableType } from '@/data/productData';

interface ProductTableProps {
  table: ProductTableType;
}

const ProductTable: React.FC<ProductTableProps> = ({ table }) => {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm shadow-sm transition-all hover:shadow-md">
      {table.title && (
        <div className="bg-navy/5 px-6 py-4 border-b border-border/50">
          <h4 className="font-display text-lg font-bold text-navy-dark">{table.title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left font-body text-sm">
          <thead>
            <tr className="bg-navy text-primary-foreground">
              {table.headers.map((header, idx) => (
                <th key={idx} className="px-6 py-4 font-semibold uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {table.rows.map((row, rowIdx) => (
              <tr 
                key={rowIdx} 
                className="hover:bg-navy/5 transition-colors duration-200"
              >
                {table.headers.map((header, colIdx) => (
                  <td key={colIdx} className="px-6 py-4 text-foreground/80 font-medium">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
