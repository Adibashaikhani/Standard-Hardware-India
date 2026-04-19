import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle, FileText, ChevronDown, ExternalLink } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import contactBanner from "@/assets/contact.jpeg";
import gstPdf from "@/assets/documents/GST STANDARD HARDWARE.pdf";
import iecPdf from "@/assets/documents/IEC CERTIFICATE STANDARD HARDWARE.pdf";
import msmePdf from "@/assets/documents/MSME STANDARD HARDWARE.pdf";
import dacPdf from "@/assets/documents/Standard hardware  9k dac.pdf";
import { useToast } from "@/components/ui/use-toast";
import { submitToGoogleSheets } from "@/lib/google-sheets";

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDocs, setShowDocs] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            type: 'contact' as const,
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            company: formData.get('company') as string,
            requirement: formData.get('requirement') as string,
        };

        const result = await submitToGoogleSheets(data);

        setIsSubmitting(false);
        if (result.success) {
            toast({
                title: "Inquiry Sent",
                description: "We've received your inquiry and will get back to you shortly.",
            });
            (e.target as HTMLFormElement).reset();
        } else {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: "There was an error sending your message. Please try again later.",
            });
        }
    };

    return (
        <div className="flex flex-col bg-white">
            <PageBanner
                title="Contact Us"
                subtitle="Get in touch with us for inquiries, partnerships, or support. We're here to help you find the right industrial solutions."
                image={contactBanner}
            />

            {/* Contact Content */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                        {/* Left Column: Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-[#0f172a] p-8 md:p-12 rounded-[2rem] shadow-2xl border border-navy/10 flex flex-col h-full"
                        >
                            <div className="mb-10">
                                <span className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-2 block font-medium">Contact Us</span>
                                <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">Get In Touch</h1>
                            </div>

                            <form className="space-y-6 flex-grow flex flex-col justify-between" onSubmit={handleSubmit}>
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block font-body text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 font-body text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/30 transition-all duration-300"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block font-body text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 ml-1">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 font-body text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/30 transition-all duration-300"
                                            placeholder="Acme Corp"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="phone" className="block font-body text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 ml-1">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 font-body text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/30 transition-all duration-300"
                                                placeholder="+91-000-000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block font-body text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 ml-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 font-body text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/30 transition-all duration-300"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="requirement" className="block font-body text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 ml-1">Product Requirement</label>
                                        <textarea
                                            id="requirement"
                                            name="requirement"
                                            rows={2}
                                            className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 font-body text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/30 transition-all duration-300 resize-none"
                                            placeholder="Tell us what industrial hardware or solutions you're looking for..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:border-gold hover:text-gold text-white py-4 px-8 rounded-full font-display font-bold uppercase tracking-widest transition-all duration-300 mt-8 disabled:opacity-50 group shrink-0"
                                >
                                    {isSubmitting ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        <>
                                            Send Now
                                            <Send size={18} className="transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Right Column: Info & Map */}
                        {/* Right Column: Info & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex flex-col h-full space-y-10"
                        >
                            {/* Info */}
                            <div className="space-y-8">
                                <p className="font-body text-slate-600 text-lg leading-relaxed">
                                    Whether you have a question about our products, pricing, or need a custom solution, our team is ready to answer all your questions.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">

                                    {/* Phone */}
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                                        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-500">
                                            <Phone size={28} className="text-navy group-hover:text-navy-dark" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-navy mb-1">Phone</h3>
                                        <p className="font-body text-slate-500">+91 9724749988<br />+91 7874381728</p>
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                                        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-500">
                                            <Mail size={28} className="text-navy group-hover:text-navy-dark" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-navy mb-1">Email</h3>
                                        <p className="font-body text-slate-500 text-sm">
                                            standardhardware1996@gmail.com<br />
                                            sales@standardhardwareindia.com
                                        </p>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                                        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-500">
                                            <MessageCircle size={28} className="text-navy group-hover:text-navy-dark" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-navy mb-1">WhatsApp</h3>
                                        <p className="font-body text-slate-500">+91 9724749988</p>
                                    </div>

                                    {/* Address */}
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                                        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-500">
                                            <MapPin size={28} className="text-navy group-hover:text-navy-dark" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-navy mb-1">
                                            Our Office
                                        </h3>
                                        <p className="font-body text-slate-500 text-sm leading-tight">
                                            Plot no- 2601/5/6/7, Asian Paints chowkdi,<br />
                                            Opp: Asian Trade Centre, GIDC,<br />
                                            Ankleshwar-393002
                                        </p>

                                        {/* Open in Maps */}
                                        <a
                                            href="https://www.google.com/maps?q=21.378136,73.003927"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 text-sm text-gold hover:underline flex items-center gap-1"
                                        >
                                            {/* Open in Google Maps <ExternalLink size={14} /> */}
                                        </a>
                                    </div>

                                </div>
                            </div>

                            {/* Map */}
                            <div className="w-full h-[350px] rounded-[2rem] overflow-hidden shadow-lg border border-navy/10">
                                <iframe
                                    src="https://www.google.com/maps?q=Standard+Hardware+Ankleshwar&z=17&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Standard Hardware Location"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Legal / Business Details Section */}
            <section className="py-20 bg-slate-50 border-t border-navy/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-navy/5"
                    >
                        <div className="text-center mb-10">
                            <span className="font-body text-gold uppercase tracking-[0.2em] text-sm mb-2 block font-medium">Compliance</span>
                            <h2 className="font-display text-3xl font-bold text-navy tracking-tight">Business Registration Details</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <div className="flex flex-col border-b border-navy/5 pb-4">
                                <span className="font-body text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">Legal Name</span>
                                <span className="font-display text-lg font-bold text-navy">STANDARD HARDWARE</span>
                            </div>
                            <div className="flex flex-col border-b border-navy/5 pb-4">
                                <span className="font-body text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">GSTIN</span>
                                <span className="font-display text-lg font-bold text-navy">24AAGFS9749C1Z0</span>
                            </div>
                            <div className="flex flex-col border-b border-navy/5 pb-4">
                                <span className="font-body text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">Import Export Code (IEC)</span>
                                <span className="font-display text-lg font-bold text-navy">AAGFS9749C</span>
                            </div>
                            <div className="flex flex-col border-b border-navy/5 pb-4">
                                <span className="font-body text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">Udyam Registration</span>
                                <span className="font-display text-lg font-bold text-navy uppercase">UDYAM-GJ-06-0025125</span>
                            </div>
                        </div>

                        {/* Document Reveal Section */}
                        <div className="mt-12 pt-8 border-t border-navy/5 flex flex-col items-center">
                            <button
                                onClick={() => setShowDocs(!showDocs)}
                                className="flex items-center gap-2 text-navy/60 hover:text-gold font-body text-sm font-semibold uppercase tracking-widest transition-colors mb-8"
                            >
                                {showDocs ? "Hide Documents" : "View Verification Documents"}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDocs ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {showDocs && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="w-full overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
                                            {[
                                                { name: "GST Certificate", file: gstPdf, label: "GST Registration" },
                                                { name: "IEC Certificate", file: iecPdf, label: "Import Export Code" },
                                                { name: "MSME Certificate", file: msmePdf, label: "Udyam (MSME)" },
                                                { name: "QMS Certificate", file: dacPdf, label: "ISO Certification" },
                                            ].map((doc, idx) => (
                                                <a
                                                    key={idx}
                                                    href={doc.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group bg-slate-50 border border-navy/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-navy hover:border-navy transition-all duration-300"
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:bg-gold transition-colors">
                                                        <FileText className="w-6 h-6 text-navy group-hover:text-navy-dark" />
                                                    </div>
                                                    <span className="font-body text-[10px] uppercase tracking-widest text-navy/40 mb-1 group-hover:text-white/60">{doc.label}</span>
                                                    <h4 className="font-display text-sm font-bold text-navy group-hover:text-white mb-3">{doc.name}</h4>
                                                    <div className="flex items-center gap-2 text-gold group-hover:text-white text-xs font-bold uppercase tracking-widest">
                                                        View PDF <ExternalLink className="w-3 h-3" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
