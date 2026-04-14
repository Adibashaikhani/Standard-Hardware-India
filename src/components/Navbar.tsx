import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Facebook, Twitter, Linkedin, Rss, ShieldCheck, Award } from "lucide-react";
import logo from "@/assets/logo.png.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Products", path: "/products" },
        { name: "Clientele", path: "/clientele" },
        { name: "Dealership", path: "/dealership" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <header className="w-full relative z-50 shadow-md bg-background">
            {/* Tier 1: Top Bar */}
            <div className="bg-[#0f1b29] text-primary-foreground py-2 border-b border-primary-foreground/10">
                <div className="container mx-auto px-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm gap-2 sm:gap-0">
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-gray-300" strokeWidth={2} />
                        <span className="font-body text-gray-200">+91 9724749988</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-body font-medium hidden sm:block text-gray-200">Follow:</span>
                        <div className="flex items-center gap-3">
                            <a href="#" className="text-gray-200 hover:text-gold transition-colors"><Facebook size={14} /></a>
                            <a href="#" className="text-gray-200 hover:text-gold transition-colors"><Twitter size={14} /></a>
                            <a href="#" className="text-gray-200 hover:text-gold transition-colors"><Linkedin size={14} /></a>
                            <a href="#" className="text-gray-200 hover:text-gold transition-colors"><Rss size={14} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tier 2: Middle Bar (Logo & Badges) */}
            <div className="bg-white py-4 flex-shrink-0">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Logo and Burger Container */}
                        <div className="flex justify-between items-center w-full md:w-auto">
                            <Link to="/" className="flex items-center gap-3 md:gap-4 shrink-0">
                                <img src={logo} alt="Standard Hardware Logo" className="h-12 md:h-16 w-auto object-contain" />
                            </Link>

                            {/* Mobile Menu Toggle Button */}
                            <button
                                className="md:hidden p-2 text-[#1a2b40] hover:bg-gray-100 rounded-md transition-colors"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle navigation"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                        {/* Desktop Badges (Hidden on mobile native, integrated into flex container) - Vertically Stacked on Mobile if open, horizontally on Desktop */}
                        <div className={`${isOpen ? 'flex flex-col w-full' : 'hidden'} md:flex md:flex-row items-center gap-6 md:gap-10 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100`}>
                            <div className="flex items-center justify-start gap-3 md:gap-4 w-full md:w-auto">
                                <div className="shrink-0 text-[#1a2b40]">
                                    <ShieldCheck size={32} strokeWidth={1.5} className="md:w-[36px] md:h-[36px]" />
                                </div>
                                <div className="text-left text-[#1a2b40]">
                                    <div className="font-display font-semibold text-sm md:text-base leading-tight">Global Certified</div>
                                    <div className="font-body text-[0.7rem] md:text-xs text-gray-500 mt-0.5">ISO 9001:2015</div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* Tier 3: Bottom Nav Bar */}
            <nav className={`bg-[#16273e] text-primary-foreground border-t border-t-white/10 transition-all duration-300 ${isOpen ? 'block' : 'hidden md:block'}`}>
                <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-center py-2 md:py-0 md:h-12 gap-2 md:gap-14">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="font-display text-[0.95rem] font-semibold text-gray-200 hover:text-white transition-colors py-2 md:py-0 w-full md:w-auto text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
