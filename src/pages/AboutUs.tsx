import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, ShieldCheck, Shield, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ankleshwarImage from "@/assets/ankleshwar-city-v2.png";
import tradingImage from "@/assets/trading-unit.jpg";
import visionMissionImg from "@/assets/vision-mission-icons.png";
import misionImg from "@/assets/mision.png";
import visionImg from "@/assets/vision.png";

const coreValues = [
  { icon: ShieldCheck, title: "Quality Commitment", desc: "Every product supplied by us meets strict quality standards and industry specifications." },
  { icon: Shield, title: "Integrity & Transparency", desc: "We conduct our business with honesty, fairness, and strong ethical values." },
  { icon: Users, title: "Customer Focus", desc: "Understanding and fulfilling customer requirements is at the heart of our operations." },
  { icon: Award, title: "Reliability", desc: "We strive to be a dependable partner through our consistent supply and service standards." },
  { icon: TrendingUp, title: "Growth & Improvement", desc: "Enhancing our product range, processes, and capabilities to better serve our clients." },
];

const AboutUs = () => {
  return (
    <div>
      <PageBanner
        title="Standard Hardware"
        subtitle="Trusted manufacturer, Stockist, and Industrial Hardware Supplier since 1996."
        image={ankleshwarImage}
      />

      {/* Highlights / Taglines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="w-full mx-auto text-center px-4 overflow-visible pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl lg:text-[2.2rem] xl:text-[2.6rem] font-bold text-navy-dark mb-14 leading-normal whitespace-normal md:whitespace-nowrap pb-2">
                Empowering Industries with Premium Steel & Hardware Solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 text-left px-4 lg:px-8">
                {/* Item 1 */}
                <div className="flex flex-col h-full border-b-[1.5px] border-navy/70 pb-8">
                  <p className="font-display text-[1.15rem] lg:text-[1.35rem] font-bold text-navy-dark leading-snug">
                    Established in <span className="text-[#0ea5e9]">Ankleshwar</span> <br />
                    <span className="text-[#0ea5e9]">GIDC</span>, India in the <br />
                    year <span className="text-[#0ea5e9]">1996</span>
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col h-full border-b-[1.5px] border-navy/70 pb-8">
                  <p className="font-display text-[1.15rem] lg:text-[1.35rem] font-bold text-navy-dark leading-snug">
                    Among the <span className="text-[#0ea5e9]">Top 10</span> <br />
                    largest steel pipe <br />
                    dealers in Gujarat
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col h-full border-b-[1.5px] border-navy/70 pb-8">
                  <p className="font-display text-[1.15rem] lg:text-[1.35rem] font-bold text-navy-dark leading-snug">
                    ISO <span className="text-[#0ea5e9]">9001:2015</span><br />
                    Quality Management Systems Certified


                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col h-full border-b-[1.5px] border-navy/70 pb-8">
                  <p className="font-display text-[1.15rem] lg:text-[1.35rem] font-bold text-navy-dark leading-snug">
                    Geographically diversified <br />
                    Global <span className="text-[#0ea5e9]">Trader</span> & <br />
                    <span className="text-[#0ea5e9]">Wholesaler</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Description: Text Only */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-4">A Legacy of Industrial Supply Excellence </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
                Our Story
              </h2>

              <div className="space-y-8 text-center text-lg md:text-xl">
                <p className="font-body text-muted-foreground leading-relaxed">
                  Established in Ankleshwar GIDC, India in 1996, <strong className="text-navy-dark font-medium">Standard Hardware</strong> is a part of the 50-year-old Standard Group, founded with the vision of our founder Mr. Hargovindbhai M. Patel.
                </p>
                <div className="w-16 h-1 bg-gold/40 mx-auto rounded-full"></div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Over the years, the company has grown to become one of Gujarat’s leading steel pipe dealers and a trusted global trader and wholesaler stockist of industrial hardware. Located at a prime position at <strong className="text-navy-dark font-medium">Asian Paints Chowkdi</strong>, we operate from a <strong className="text-navy-dark font-medium">1,500 sq-ft professional office</strong> and maintain a vast <strong className="text-navy-dark font-medium">8,000 sq-ft godown</strong> near Asian Trade Centre to ensure immediate stock availability.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  With fully integrated operations covering shipping, manufacturing, procurement, and marketing, Standard Hardware continues to strengthen its presence in the industrial supply sector under the active leadership and modernized approach of our second-generation management.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-5 md:p-6 shadow-card flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center flex-shrink-0">
                <img src={misionImg} alt="Our Mission" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-3 text-center w-full">Our Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-lg text-justify w-full">
                Our mission is to provide high-quality industrial materials and piping solutions that meet the demanding standards of modern industries, while fostering long-term relationships built on trust, reliability, and consistent excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-5 md:p-6 shadow-card flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center flex-shrink-0">
                <img src={visionImg} alt="Our Vision" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-3 text-center w-full">Our Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-lg text-justify w-full">
                Our vision is to expand our reach as a reliable industrial supply partner across India & global markets, by strengthening our distribution network and gradually expanding into the export sector.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-2">From Vision to Industry Leadership</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-10">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-card text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-5">
                  <v.icon size={28} className="text-navy" />
                </div>
                <h3 className="font-display text-base xl:text-lg font-semibold text-card-foreground mb-3 whitespace-nowrap tracking-tighter sm:tracking-normal xl:tracking-tight">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-grow">{v.desc}</p>
              </motion.div>
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

export default AboutUs;
