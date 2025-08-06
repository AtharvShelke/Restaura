import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black to-neutral-900/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          {SOCIAL_MEDIA_LINKS.map(({ href, icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${icon.props['aria-label'] || "social media"}`}
              className="group relative p-4 bg-neutral-800/50 rounded-full border border-neutral-700/30 hover:border-rose-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-300/20"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-neutral-400 group-hover:text-rose-300 transition-colors duration-300 text-xl sm:text-2xl">
                {icon}
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-rose-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8"
        />

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="text-sm sm:text-base tracking-tighter text-neutral-400">
            &copy; {new Date().getFullYear()} Restaura. All rights reserved.
          </p>
          
          {/* Design Credit */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500">
            <span>Designed & Created by</span>
            <a
              href="https://atharv-portfolio-ivory.vercel.app/" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-full border border-rose-300/20 hover:border-rose-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-rose-300/20"
            >
              <span className="text-rose-300 group-hover:text-rose-200 transition-colors duration-300 font-medium">
                Atharv
              </span>
              <svg 
                className="w-4 h-4 text-rose-300 group-hover:text-rose-200 group-hover:translate-x-1 transition-all duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Additional Footer Info */}
          <div className="pt-4 text-xs text-neutral-600">
            <p>Made with ❤️ for food lovers everywhere</p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-rose-300/30 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
