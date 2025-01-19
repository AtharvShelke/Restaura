import video from '../assets/hero.mp4';
import logo from '../assets/logo.png';
import hero from '../assets/hero.jpeg';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
        
    }
    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 -z-20 h-full w-full">
                <video
                    src={video}
                    className="h-full w-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    poster={hero}
                    loading="lazy"
                    aria-label="Background video showcasing food preparation"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center text-white">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Restaura Logo"
                    className="mb-8 w-32 sm:w-40 h-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />

                {/* Title */}
                <motion.h1
                    className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight drop-shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                >
                    Welcome to Restaura
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="mt-4 text-lg sm:text-xl lg:text-2xl tracking-wide"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: 'easeInOut' }}
                >
                    Fresh. Flavorful. Fantastic.
                </motion.p>

                {/* Call-to-Action Button */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
                >
                    <a href='#dishes' className="px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-transform duration-300 ease-in-out hover:scale-105" onClick={(e)=>handleScroll(e, 'dishes')}>
                        Discover More
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
