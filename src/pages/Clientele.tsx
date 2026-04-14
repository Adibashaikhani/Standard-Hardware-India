import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Factory, FlaskConical, HardHat, Zap, Package, Settings, Award, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import serveBanner from "@/assets/serve.png";

/* ✅ ADD THIS STYLE BLOCK (SELF-CONTAINED ANIMATION) */
const marqueeStyle = `
:root {
  --marquee-speed: 50s; /* 🔥 change this once, affects BOTH */
}

@keyframes marqueeScroll {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marqueeScroll var(--marquee-speed) linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
`;

const clientTypes = [
  { icon: FlaskConical, type: "Chemical & Pharma", desc: "Leading supplier to pharmaceutical and chemical process plants in Dahej & Ankleshwar." },
  { icon: HardHat, type: "Infrastructure", desc: "Key partner for major industrial infrastructure and civil construction projects." },
  { icon: Zap, type: "Power & Energy", desc: "Providing specialized boiler tubes and fittings for thermal power and energy sectors." },
  { icon: Factory, type: "Manufacturing", desc: "Trusted stockist for heavy machinery fabrication and precision engineering units." },
];

const primaryOfferings = [
  {
    category: "Products",
    title: "JINDAL 'Star' MS Pipes",
    detail: "Authorized Distributor for Jindal Star ERW & Seamless MS Pipes.",
    icon: Package
  },
  {
    category: "Services",
    title: "Pipe Fittings Stockist",
    detail: "Complete range of MS & GI fittings: Flanges, Elbows & Clamps.",
    icon: Settings
  },
  {
    category: "Commercial Range",
    title: "ACCURA Ball Valves",
    detail: "ISO 9001:2015, ASCB(E) & Nimbus approved commercial valves.",
    icon: Award
  },
  {
    category: "Manufacturing",
    title: "In-House Nut Bolts",
    detail: "MS Nut-bolts manufactured at our Mill with premium coil material.",
    icon: Factory
  }
];



const clientLogos = [
  "Jubilant Infrastructure", "Deccan Fine Chemicals", "Grasim Industries", 
  "GIL/Gharda Chemicals", "Deepak Nitrite", "Meghmani Group", 
  "Lupin Limited", "Subhalaxmi Polyester", "Bharat Rasayan", 
  "Chemi Organics", "Asian Paints Ltd", "Tatva-Chintan Pharma",
  "Alex Pharmachem", "Amul", "Bpcl", "Atul Ltd", 
  "Siddharth Interchem", "Narayan Organics Pvt Ltd", "Essar"
];

const logoModules = import.meta.glob('../assets/Logos/*.{png,jpg,jpeg,webp,svg}', { eager: true }) as Record<string, { default: string }>;
const partnerLogos = Object.entries(logoModules)
  .map(([path, mod]) => {
    const filename = path.split('/').pop() ?? '';
    const name = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    return { src: mod.default, name };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const Clientele = () => {
  return (
    <div>

      {/* ✅ Inject animation styles */}
      <style>{marqueeStyle}</style>

      <PageBanner
        title="Our Clientele"
        subtitle="Trusted by leading industrial conglomerates, chemical plants, and pharmaceutical giants."
        image={serveBanner}
      />

      {/* Client Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-2">Who We Serve</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Client Segments</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((c, i) => (
              <motion.div
                key={c.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-card text-center"
              >
                <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-5">
                  <c.icon size={28} className="text-navy" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{c.type}</h3>
                <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Sliding */}
      <section className="pt-16 pb-4 bg-navy overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="font-body text-gold uppercase tracking-[0.2em] text-xs mb-3 font-semibold">
            Partners We Have Supplied To
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Partnering with Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="relative w-full overflow-hidden">

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-navy to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-navy to-transparent z-10" />

          <div className="flex animate-marquee py-6 items-center">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="mx-4 flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl w-56 h-56 flex items-center justify-center p-2 hover:bg-white/10 hover:border-gold/50 transition-all duration-300"
              >
                <img src={logo.src} alt={logo.name} className="max-h-52 max-w-52 object-contain mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Names Sliding */}
      <section className="pt-2 pb-12 bg-navy overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="font-body text-gold uppercase tracking-[0.2em] text-xs mb-3 font-semibold">
            Our Valuable Clientele Includes
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Partnering with Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="relative w-full overflow-hidden">

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-navy to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-navy to-transparent z-10" />

          <div className="flex animate-marquee py-6 items-center">
            {[...clientLogos, ...clientLogos].map((brand, i) => (
              <div 
                key={i} 
                className="mx-5 flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-12 py-8 hover:bg-white/10 hover:border-gold/50 transition-all duration-300 group"
              >
                <span className="font-display text-xl font-semibold text-white/90 group-hover:text-gold transition-colors block">
                  {brand}
                </span>
                <span className="text-xs text-white/40 uppercase tracking-widest mt-2 block group-hover:text-white/60 transition-colors">
                  Valued Partner
                </span>
              </div>
            ))}
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

export default Clientele;