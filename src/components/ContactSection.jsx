import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-neutral-900/50" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Get In <span className="text-rose-300">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Ready to experience exceptional dining? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid gap-8 sm:gap-12"
        >
          {CONTACT.map((detail, index) => (
            <motion.div
              key={detail.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-gradient-to-r from-neutral-800/40 to-neutral-900/40 rounded-3xl p-8 sm:p-12 border border-neutral-700/30 hover:border-rose-300/30 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-300/10">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-300/20 rounded-full group-hover:bg-rose-300/30 transition-colors duration-300">
                    <div className="w-8 h-8 bg-rose-300 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-200 group-hover:text-rose-300 transition-colors duration-300">
                    {detail.value}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="h-0.5 bg-rose-300 mx-auto rounded-full group-hover:w-16 transition-all duration-300"
                  />
                  
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">
                    {detail.key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl p-8 border border-rose-300/20">
            <p className="text-lg sm:text-xl text-neutral-300 mb-4">
              Ready to make a reservation?
            </p>
            <div className="w-12 h-1 bg-rose-300 mx-auto rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
