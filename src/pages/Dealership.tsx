import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import dealership1 from "@/assets/DEALERSHIP 1.jpeg";
import dealership2 from "@/assets/DEALERSHIP 2.jpeg";
import dealership3 from "@/assets/DEALERSHIP 3.png";
import dealership4 from "@/assets/DEALERSHIP 4.png";
import dealership5 from "@/assets/DEALERSHIP 5.jpeg";
import isoCertificate from "@/assets/iso-certificate.png";
import iecCertificate from "@/assets/iec-certificate.png";
import udyamCertificate from "@/assets/udyam certificate.jpeg";

const Dealership = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-50 flex-grow pt-6 pb-12 flex flex-col items-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-10 max-w-7xl">
          <div className="flex flex-wrap justify-center items-start gap-10">
            <div className="rounded-2xl shadow-md border border-slate-200/60 overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <img src={dealership1} alt="Dealership Details Page 1" className="block h-auto max-w-[480px] w-full" />
            </div>

            <div className="rounded-2xl shadow-md border border-slate-200/60 overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <img src={dealership2} alt="Dealership Details Page 2" className="block h-auto max-w-[480px] w-full" />
            </div>

            <div className="rounded-2xl shadow-md border border-slate-200/60 overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <img src={dealership3} alt="Dealership Details Page 3" className="block h-auto max-w-[480px] w-full" />
            </div>

            <div className="rounded-2xl shadow-md border border-slate-200/60 overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <img src={dealership4} alt="Dealership Details Page 4" className="block h-auto max-w-[480px] w-full" />
            </div>
          </div>

          <div className="rounded-2xl shadow-md border border-slate-200/60 overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <img src={dealership5} alt="Dealership Details Page 5" className="block h-auto max-w-[480px] w-full" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-navy-gradient text-center">
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
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-md font-body font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-colors shadow-lg"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dealership;
