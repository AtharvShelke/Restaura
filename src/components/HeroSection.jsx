import video from '../assets/cover.mp4';
import logo from '../assets/logo.png';
import hero from '../assets/hero.jpeg';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 -z-20 h-full w-full">
                <video
                    src={video}
                    className="h-full w-full object-cover scale-105"
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

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

            {/* Content */}
            <div className="absolute z-20 flex flex-col items-start text-white bottom-6 sm:bottom-12 md:bottom-16 left-4 sm:left-8 md:left-12 lg:left-16 space-y-4 sm:space-y-6 max-w-4xl">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Restaura Logo"
                    className="w-48 sm:w-72 md:w-80 lg:w-96 xl:w-[32rem] 2xl:w-[45rem] drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* Enhanced Tagline */}
                <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
                >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium tracking-wider text-white/90 drop-shadow-lg">
                        Fresh. Flavorful. Fantastic.
                    </p>
                    <div className="h-0.5 w-24 sm:w-32 bg-rose-300 rounded-full"></div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="hidden md:flex flex-col items-center mt-8 text-white/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <span className="text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-0.5 h-8 bg-white/40 rounded-full"
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
