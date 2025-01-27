import video from '../assets/cover.mp4';
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
                behavior: "smooth",
            });
        }
    };

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
            <div className="absolute z-20 flex flex-col items-start text-white bottom-5 sm:bottom-10 left-5 sm:left-10 space-y-3 sm:space-y-4">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Restaura Logo"
                    className="w-40 sm:w-60 lg:w-[30rem] xl:w-[45rem]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />

                {/* Tagline */}
                <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: 'easeInOut' }}
                >
                    Fresh. Flavorful. Fantastic.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSection;
