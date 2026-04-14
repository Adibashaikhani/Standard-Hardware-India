import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import productsBanner from "@/assets/pipes for industries.webp";
import { productCategories, ProductCategory, SubCategory } from "@/data/productData";
import ProductTable from "@/components/products/ProductTable";
import ProductSpecs from "@/components/products/ProductSpecs";
import ProductGallery from "@/components/products/ProductGallery";
import ProductHighlight from "@/components/products/ProductHighlight";
import QuoteDialog from "@/components/products/QuoteDialog";
import { Link } from "react-router-dom";
import { ChevronRight, Factory, Package, Wrench, ShieldCheck, Droplets, Mail, ArrowRight } from "lucide-react";

const categoryIcons: Record<string, any> = {
  "pipe-tubes": Factory,
  "pipe-fittings": Package,
  "ball-valves": Droplets,
  "fasteners": Wrench,
  "construction-hardware": ShieldCheck,
};

const Products = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(productCategories[0].id);
  const [expandedSubIds, setExpandedSubIds] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeCategory = useMemo(() =>
    productCategories.find(c => c.id === activeCategoryId) || productCategories[0],
    [activeCategoryId]
  );

  const toggleSubcategory = (id: string) => {
    setExpandedSubIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (sectionRef.current) {
      const offset = 100; // Offset to account for sticky navbar if any
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    // Reset expanded states when category changes
    setExpandedSubIds([]);
  }, [activeCategoryId]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner
        title="Industrial Product Portfolio"
        subtitle="Comprehensive range of high-performance pipes, fittings, valves, and industrial hardware."
        image={productsBanner}
      />

      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24 space-y-2">
                <h3 className="font-display text-xs font-bold text-navy/40 uppercase tracking-[0.2em] mb-6 px-4">
                  Categories
                </h3>
                {productCategories.map((cat) => {
                  const Icon = categoryIcons[cat.id] || Factory;
                  const isActive = activeCategoryId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left group ${isActive
                        ? "bg-navy text-primary-foreground shadow-lg shadow-navy/20 scale-105"
                        : "bg-white text-navy/60 hover:bg-navy/5"
                        }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-gold" : "text-navy/30 group-hover:text-gold"} transition-colors`} />
                      <span className="font-display font-bold text-sm tracking-wide flex-1">
                        {cat.name}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-gold-light" />}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-16"
                >
                  <div className="border-b border-navy/10 pb-8">
                    <h2 className="font-display text-4xl font-bold text-navy-dark mb-4">
                      {activeCategory.name}
                    </h2>
                    <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-3xl">
                      Explore our high-quality {activeCategory.name.toLowerCase()} solutions designed for critical industrial applications and demanding environments.
                    </p>
                  </div>

                  <div className="space-y-20">
                    {activeCategory.subcategories.map((sub, idx) => {
                      const isExpanded = expandedSubIds.includes(sub.id);

                      return (
                        <div key={sub.id} id={sub.id} className="scroll-mt-24 bg-white p-8 rounded-3xl border border-navy/5 shadow-sm hover:shadow-md transition-all duration-500">
                          <div className="flex flex-col xl:flex-row gap-10 lg:items-start">
                            <div className="xl:w-2/3 space-y-6">
                              <div>
                                <h3 className="font-display text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm">
                                    {idx + 1}
                                  </span>
                                  {sub.name}
                                </h3>
                                <p className="font-body text-foreground/70 leading-relaxed text-base">
                                  {sub.description}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-4">
                                <button
                                  onClick={() => toggleSubcategory(sub.id)}
                                  className="group inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-display font-bold text-sm transition-all hover:bg-navy-light hover:scale-105"
                                >
                                  {isExpanded ? "Show Less Info" : "Show More Info"}
                                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : "group-hover:translate-x-1"}`} />
                                </button>

                                <QuoteDialog
                                  productName={`${activeCategory.name} - ${sub.name}`}
                                  trigger={
                                    <button
                                      className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-full font-display font-bold text-sm transition-all hover:bg-gold-light hover:scale-105"
                                    >
                                      Request a Quote
                                      <Mail className="w-4 h-4" />
                                    </button>
                                  }
                                />
                              </div>

                              <div className="pt-8 border-t border-navy/5">
                                {sub.highlightsText ? (
                                  <div className="space-y-4">
                                    <p className="font-display text-[15px] md:text-[18px] font-bold uppercase tracking-widest text-navy mb-3 leading-tight">{sub.highlightsText.title}</p>
                                    <div className="grid grid-cols-1 gap-3">
                                      {sub.highlightsText.list.map((item, lidx) => (
                                        <div key={lidx} className="flex items-start gap-3 group">
                                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                                          <span className="text-navy text-[14px] md:text-[16px] font-semibold leading-relaxed tracking-tight">{item}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <p className="font-display text-[15px] font-bold uppercase tracking-widest text-navy mb-3">Leading suppliers/authorized stockists for:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                                      {sub.features?.slice(0, 4).map((feature, fidx) => (
                                        <div key={fidx} className="flex items-center gap-3 group min-w-0">
                                          <div className="w-1.5 h-1.5 rounded-full bg-gold/60 group-hover:bg-gold transition-colors shrink-0" />
                                          <span className="text-navy text-[13px] font-semibold leading-relaxed tracking-tight">{feature}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>

                            <div className="xl:w-1/3 max-w-[400px] flex-shrink-0">
                              <ProductGallery
                                images={sub.images}
                                name={sub.name}
                              />
                            </div>
                          </div>

                          {/* Expanded Content */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="mt-12 pt-12 border-t border-navy/10 space-y-12 text-left">
                                  {/* Dynamic Highlight Section (Reference Inspired) */}
                                  <ProductHighlight
                                    name={sub.name}
                                    image={sub.images[0]}
                                  />

                                  {sub.contentImage && sub.comparisonTable ? (
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-8 items-stretch">

                                      {/* LEFT: TABLE */}
                                      <div className="w-full flex">
                                        <div className="w-full h-full flex items-stretch overflow-x-auto">
                                          <ProductTable table={sub.comparisonTable} />
                                        </div>
                                      </div>

                                      {/* RIGHT: IMAGE */}
                                      <div className="w-full flex">
                                        <div className="relative group w-full h-full flex items-center justify-center overflow-hidden">

                                          <div className="absolute top-0 right-0 p-3 z-10">
                                            <div className="px-3 py-1 bg-gold text-navy-dark text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                                              Technical Layout
                                            </div>
                                          </div>

                                          <img
                                            src={sub.contentImage}
                                            alt={`${sub.name} Technical Detail`}
                                            className="w-full h-full object-contain rounded-xl"
                                          />
                                        </div>
                                      </div>

                                    </div>
                                  ) : (
                                    <>
                                      {sub.contentImage && (
                                        <img src={sub.contentImage} alt={sub.name} className="w-full h-auto object-contain rounded-xl max-h-[500px]" />
                                      )}

                                      {sub.comparisonTable && (
                                        <ProductTable table={sub.comparisonTable} />
                                      )}
                                    </>
                                  )}

                                  {(sub.technicalSpecs || sub.standards) && (
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                                      {sub.technicalSpecs && (
                                        <div className={`space-y-8 ${!sub.standards ? "xl:col-span-2" : ""}`}>
                                          <ProductSpecs title="Technical Parameters" specs={sub.technicalSpecs} />
                                        </div>
                                      )}

                                      {sub.standards && (
                                        <div className={`space-y-8 ${!sub.technicalSpecs ? "xl:col-span-2" : ""}`}>
                                          <div className="bg-slate-50 p-6 rounded-2xl border border-navy/5 h-full flex flex-col">
                                            <h4 className="font-display text-lg font-bold text-navy-dark mb-4">Standards & Compliance</h4>
                                            <div className={`grid grid-cols-1 ${!sub.technicalSpecs ? "md:grid-cols-3" : "md:grid-cols-2"} gap-3 flex-grow`}>
                                              {sub.standards.map((std, sidx) => (
                                                <div key={sidx} className="flex flex-col gap-1 p-3 rounded-lg bg-white border border-slate-100 hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                                                  <span className="text-gold font-bold text-xs uppercase tracking-widest">{std.code}</span>
                                                  <span className="text-navy/70 text-sm font-medium">{std.description}</span>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {sub.weightChart && (
                                    <ProductTable table={sub.weightChart} />
                                  )}

                                  {sub.additionalTables && sub.additionalTables.map((table, tidx) => (
                                    <ProductTable key={tidx} table={table} />
                                  ))}

                                  {(sub.mechanicalProperties || sub.chemicalComposition) && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                      {sub.mechanicalProperties && (
                                        <ProductSpecs title="Mechanical Properties" specs={sub.mechanicalProperties} type="grid" />
                                      )}

                                      {sub.chemicalComposition && (
                                        <ProductSpecs title="Chemical Composition" specs={sub.chemicalComposition} type="grid" />
                                      )}
                                    </div>
                                  )}

                                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-16 pt-16 border-t border-navy/5">
                                    {/* Features */}
                                    {sub.features && (
                                      <ProductSpecs title="Key Features & Benefits" list={sub.features} />
                                    )}

                                    {/* Applications */}
                                    {sub.applications && (
                                      <ProductSpecs title="Industrial Applications" list={sub.applications} />
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-gradient text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Join our growing network of satisfied clients and experience the difference that quality makes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-md font-body font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
