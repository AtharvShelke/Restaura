import about from "../assets/aboutpic.avif";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto py-16" id="about">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter lg:text-4xl">
        About Us
      </h2>
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full p-4 lg:w-1/2">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={about}
            alt="About Us"
            className="rounded-3xl lg:-rotate-3"
          />
        </div>

        {/* Text Content */}
        <div className="w-full px-4 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter lg:text-6xl"
          >
            {ABOUT.header}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 mt-2 h-2 w-36 bg-rose-300 lg:-rotate-3"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-xl leading-relaxed tracking-tight text-neutral-600 lg:max-w-xl"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
