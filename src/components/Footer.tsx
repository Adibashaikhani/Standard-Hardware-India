import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Linkedin, Rss } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Products", path: "/products" },
        { name: "Clientele", path: "/clientele" },
        { name: "Dealership", path: "/dealership" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <footer className="bg-[#0f1b29] text-primary-foreground border-t border-white/5">
            {/* Top Tier: Contact | Logo | Socials */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-8">

                    {/* Center: Logo */}
                    <div className="order-first md:order-none">
                        <img src={logo} alt="Standard Hardware Logo" className="h-14 md:h-18 w-auto" />
                    </div>

                    {/* Left: Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                        <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                            <Mail size={18} className="text-gold mt-0.5" />
                            <div className="flex flex-col">
                                <span className="font-body text-sm font-medium">standardhardware1996@gmail.com</span>
                                <span className="font-body text-sm font-medium">standardhardwareindia@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                            <Phone size={18} className="text-gold" />
                            <span className="font-body text-sm font-medium">+91 9724749988</span>
                        </div>
                    </div>

                    {/* Right: Social Icons */}
                    {/* <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Linkedin, Rss].map((Icon, idx) => (
                            <a 
                                key={idx} 
                                href="#" 
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div> */}
                </div>

                {/* Bottom Tier: Nav Links | Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
                    <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="font-display text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="text-gray-500 font-body text-xs tracking-wider">
                        © {new Date().getFullYear()} STANDARD HARDWARE. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
