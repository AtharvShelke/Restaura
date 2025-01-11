import video from '../assets/hero.mp4';
import logo from '../assets/logo.png';
import hero from '../assets/hero.jpeg';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative flex h-screen items-center justify-center">
            {/* Video background with lazy loading */}
            <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <video
                    src={video}
                    className="h-full w-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    poster={hero}
                    loading="lazy" // Lazy load video
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>

            {/* Content with smooth transition for logo */}
            <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.42, 0, 0.58, 1], // Smooth transition
                    }}
                >
                    <img
                        src={logo}
                        alt="restaura"
                        className="w-full p-4"
                        width={200} // Specify dimensions to prevent layout shift
                        height={100}
                    />
                </motion.div>

                {/* Text content */}
                <p className="p-4 text-lg tracking-tighter text-white">
                    Fresh. Flavorful. Fantastic.
                </p>
            </div>
        </section>
    );
}

export default HeroSection;
