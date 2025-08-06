import { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import { LINKS } from '../constants/index.jsx';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 sm:top-4 z-50 flex w-full flex-col items-center px-4">
            <div className={`flex w-full items-center justify-between p-4 transition-all duration-300 ${
                isScrolled ? 'backdrop-blur-xl bg-black/20' : 'backdrop-blur-lg bg-black/10'
            } lg:m-2 lg:w-[55rem] xl:w-[60rem] lg:rounded-full lg:shadow-2xl border border-white/10`}>
                
                <img 
                    src={logo} 
                    alt="Restaurant Logo" 
                    className="w-16 h-auto sm:w-20 transition-transform hover:scale-105" 
                />
                
                {/* Desktop Menu */}
                <div className="hidden space-x-8 lg:flex items-center">
                    {LINKS.map((link, i) => (
                        <a 
                            href={`#${link.targetId}`} 
                            key={i} 
                            className={`text-sm xl:text-base font-medium transition-all duration-200 hover:text-rose-300 hover:scale-105 ${
                                i !== 0 ? "border-l border-neutral-300/20 pl-6" : ""
                            }`} 
                            onClick={(e) => handleScroll(e, link.targetId)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="w-full backdrop-blur-xl bg-black/30 border-t border-white/10 lg:hidden">
                    <div className="max-w-sm mx-auto py-4">
                        {LINKS.map((link, i) => (
                            <a 
                                key={i} 
                                href={`#${link.targetId}`} 
                                className="block p-4 text-center uppercase tracking-wider font-medium hover:text-rose-300 hover:bg-white/5 rounded-lg mx-2 transition-all duration-200" 
                                onClick={(e) => handleScroll(e, link.targetId)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
