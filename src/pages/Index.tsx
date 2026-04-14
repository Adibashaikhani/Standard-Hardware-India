import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Award, Truck, ShieldCheck, Users, Factory, HardHat, Car, Flame, Wrench, Building2, Cylinder, Settings, Gauge, Paintbrush, Package } from "lucide-react";
import heroImage from "@/assets/home-page-1.png";
import fittingsImg from "@/assets/fittings.jpg";
import valveSuppliersImg from "@/assets/Valve-Suppliers.jpg";
import un1Img from "@/assets/UN 1.jpg";
import powerImg from "@/assets/power.jpg";
import logo from "@/assets/logo.png";


const features = [
  { icon: Award, title: "Industry Experience", desc: "Decades of proven expertise since 1996, delivering excellence." },
  { icon: Globe, title: "Product Range", desc: "A vast selection of industrial piping and hardware solutions." },
  { icon: Package, title: "Inventory Availability", desc: "Well-stocked facilities ready to fulfill your immediate needs." },
  { icon: ShieldCheck, title: "Quality Standards", desc: "Rigorous quality checks sourcing only the best global products." },
  { icon: Truck, title: "Efficient Logistics", desc: "Streamlined shipping networks ensuring prompt, safe delivery." },
  { icon: Users, title: "Customer Focus", desc: "Prioritizing strong, long-term relationships and reliable service." },
];


const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: HardHat, name: "Construction" },
  { icon: Car, name: "Automotive" },
  { icon: Flame, name: "Oil & Gas" },
  { icon: Wrench, name: "Engineering" },
  { icon: Building2, name: "Infrastructure" },
];

const productCategories = [
  {
    title: "Pipes & Tubes",
    items: ["ERW Pipes (MS, GI)", "Seamless Tubes", "Boiler & API Line Pipes"],
    icon: Cylinder
  },
  {
    title: "Pipe Fittings",
    items: ["Forged Fittings", "IBR / Non-IBR", "Flanges & Stub Ends"],
    icon: Settings
  },
  {
    title: "Fluid Control",
    items: ["Industrial Ball Valves", "PP Valves", "Sensors & Transmitters"],
    icon: Gauge
  },
  {
    title: "Industrial Hardware",
    items: ["High-Tensile Fasteners", "PPRC & PVC", "Power Hand Tools"],
    icon: Paintbrush
  }
];

const applications = [
  {
    title: "Pipes & Tubes Division",
    descHighlight: "MS, GI ERW Pipes and Seamless Tubes,",
    desc: "Boiler Tubes, OCTG and API Line Pipes.",
    bgImg: "/products/7.png"
  },
  {
    title: "Forged Pipe Fittings",
    descHighlight: "IBR and Non-IBR Fittings,",
    desc: "Forged Seamless and Industrial Flanges.",
    bgImg: fittingsImg
  },
  {
    title: "Valves & Fluid Control",
    descHighlight: "Industrial Ball Valves,",
    desc: "PP Valves and Sensors and Transmitters.",
    bgImg: valveSuppliersImg
  },
  {
    title: "Hardware & Fasteners",
    descHighlight: "High-Tensile Nut-Bolts",
    desc: "and Industrial Power Hand Tools.",
    bgImg: un1Img
  },
  {
    title: "Construction Hardware",
    descHighlight: "PPRC & PVC Systems,",
    desc: "Industrial Paints and Safety Gear.",
    bgImg: powerImg
  }
];

const ApplicationPanel = ({ title, descHighlight, desc, bgImg }: { title: string, descHighlight: string, desc: string, bgImg: string }) => {
  return (
    <div
      className="relative overflow-hidden w-full h-full border-t xl:border-t-0 xl:border-l border-white/20 group cursor-pointer"
    >
      {/* Background Image Setup */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-90 scale-100 group-hover:opacity-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 transition-opacity duration-700 bg-black/20 group-hover:bg-black/60" />

      <div className="absolute inset-x-0 bottom-0 p-6 xl:p-10 flex flex-col justify-end h-full">
        {/* Unexpanded (Collapsed) Content: Only shows the + button */}
        <div className="absolute bottom-6 xl:bottom-10 right-6 xl:right-10 flex flex-col items-end opacity-100 group-hover:opacity-0 group-hover:invisible transition-all duration-300 z-20">
          <button
            className="w-10 h-10 rounded-full bg-gold text-navy-dark flex items-center justify-center transition-colors shadow-none pointer-events-none mb-2"
            aria-label="Expand details"
          >
            <span className="text-2xl font-bold leading-none -mt-1 pointer-events-none">+</span>
          </button>
        </div>

        {/* Expanded Content: Shows title and description */}
        <div className="transition-all duration-700 transform opacity-0 translate-y-full absolute pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:relative group-hover:pointer-events-auto delay-0 group-hover:delay-200">
          <h3 className="font-display text-3xl xl:text-5xl font-bold text-white mb-4 xl:mb-6 leading-tight">{title}</h3>
          <p className="font-body text-white/95 text-xl xl:text-2xl leading-snug max-w-lg">
            <span className="font-bold">{descHighlight}</span> {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [activeApp, setActiveApp] = useState<number>(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextApp = () => {
    setActiveApp((prev) => (prev + 1) % applications.length);
  };

  const prevApp = () => {
    setActiveApp((prev) => (prev - 1 + applications.length) % applications.length);
  };

  // Auto-playing logic for Featured Applications
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextApp();
    }, 5000); // Change application every 5 seconds

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeApp]);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Industrial Hardware"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
                Trusted Supplier of High-Quality Industrial Hardware
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Delivering <br />
                <span className="text-gradient-gold">Reliable</span> Industrial Hardware Solutions
              </h1>
              <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg">
                We offer a comprehensive range of steel piping solutions and industrial hardware materials.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-md font-body font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-colors"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-md font-body font-semibold text-sm uppercase tracking-wide hover:border-primary-foreground/60 transition-colors"
                >
                  About Us
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Hero Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Decorative glow behind logo */}
                <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full animate-pulse" />
                <img
                  src={logo}
                  alt="Standard Hardware Logo"
                  className="relative z-10 w-full max-w-md h-auto drop-shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all hover:scale-105 duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gold/60 text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 flex flex-col items-center"
          >
            <p className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-navy-dark mb-6 tracking-tight">
              Excellence in Every Detail
            </h2>
            <p className="font-body text-muted-foreground md:text-lg max-w-2xl mx-auto md:px-0 px-4">
              Standard Hardware stands out as a trusted industrial partner because of :
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-lg p-3 md:p-4 lg:p-3 xl:p-5 shadow-card text-center group hover:shadow-elevated transition-shadow duration-300 w-full"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-3 md:mb-5 group-hover:bg-navy group-hover:text-primary-foreground transition-colors duration-300">
                  <f.icon className="w-5 h-5 md:w-6 md:h-6 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-[0.8rem] md:text-[0.95rem] lg:text-[0.85rem] xl:text-base font-semibold text-card-foreground mb-1 md:mb-2 whitespace-nowrap tracking-tight">{f.title}</h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Applications (Replaces Product Highlights) */}
      <section className="w-full bg-background pt-10 pb-0 overflow-hidden">

        {/* Section Heading matching 'Why Choose Us' */}
        <div className="container mx-auto px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center flex flex-col items-center"
          >
            <p className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">Our Range of Products</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-dark tracking-tight">
              Featured Applications
            </h2>
          </motion.div>
        </div>

        <div className="w-full border-t border-b border-border">
          <div className="flex flex-row h-[380px] md:h-[440px] w-full items-stretch">
            {/* Left Theme Panel */}
            <div className="w-1/2 bg-navy text-primary-foreground p-6 md:p-12 xl:p-16 flex flex-col justify-center relative shadow-xl z-10 overflow-hidden">
              <div className="mb-6">
              </div>
              <h2 className="font-display text-lg sm:text-2xl md:text-3xl xl:text-4xl font-bold mb-4 leading-tight uppercase text-primary-foreground tracking-tight">
                STANDARD HARDWARE
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base mb-6 max-w-md text-primary-foreground/90 leading-relaxed md:block">
                We
                deliver Premium steel pipes and industrial hardware built for strength, precision, and reliability.
                A complete range—from pipes and fittings to fasteners and tools—for every project need.
                Consistent quality, ready stock, and on-time delivery you can depend on.
                Competitive pricing with service that builds lasting partnerships.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gold text-navy-dark px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-md font-body font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider hover:bg-gold-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-max"
              >
                View All <ArrowRight size={16} className="hidden sm:block" />
              </Link>

              {/* Nav Arrows (Decorative/Functional) */}
              <div className="hidden xl:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2">
                <button
                  onClick={prevApp}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-gold transition-colors group"
                  aria-label="Previous application"
                >
                  <span className="text-primary-foreground group-hover:text-gold text-lg font-light leading-none mt-[-2px]">❮</span>
                </button>
                <button
                  onClick={nextApp}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-gold transition-colors group"
                  aria-label="Next application"
                >
                  <span className="text-primary-foreground group-hover:text-gold text-lg font-light leading-none mt-[-2px]">❯</span>
                </button>
              </div>
            </div>

            {/* Right Layout Item (Single Active Panel) */}
            <div className="w-1/2 flex flex-col h-full bg-[#d3d6da]">
              <ApplicationPanel
                title={applications[activeApp].title}
                descHighlight={applications[activeApp].descHighlight}
                desc={applications[activeApp].desc}
                bgImg={applications[activeApp].bgImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-2">Our Reach</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-card text-center group hover:shadow-elevated transition-shadow duration-300 flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <ind.icon size={28} className="text-foreground group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <h3 className="font-display text-sm md:text-base font-semibold text-card-foreground">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* CTA */}
      <section className="py-12 bg-navy-gradient text-center" >
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
      </section >
    </div >
  );
};

export default Index;
