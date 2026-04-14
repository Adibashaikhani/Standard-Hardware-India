import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageBanner = ({ title, subtitle, image }: PageBannerProps) => {
  return (
    <section className="relative h-[380px] md:h-[440px] flex items-center justify-center overflow-hidden w-full">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
};

export default PageBanner;
