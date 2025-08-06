import about from "../assets/aboutpic.avif";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          About <span className="text-rose-300">Us</span>
        </h2>
        <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
      </motion.div>

      <div className="flex flex-wrap items-center gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={about}
              alt="About our restaurant"
              className="rounded-3xl shadow-2xl w-full hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-300/20 to-transparent rounded-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight">
              {ABOUT.header}
            </h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "9rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-2 bg-rose-300 rounded-full transform -rotate-3"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-tight text-neutral-300 max-w-2xl"
            >
              {ABOUT.content}
            </motion.p>

            {/* Additional visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center space-x-4 pt-4"
            >
              <div className="w-12 h-12 bg-rose-300/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-rose-300 rounded-full"></div>
              </div>
              <span className="text-sm uppercase tracking-widest text-neutral-500">
                Est. 2024
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
