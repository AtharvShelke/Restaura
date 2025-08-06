import { REVIEW } from "../constants";
import { motion } from "framer-motion";
import xaviour from "../assets/persone.jpg";
import customerImages from "../assets/customers.js";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Review = () => {
  return (
    <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8" id="review">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          What Our <span className="text-rose-300">Guests</span> Say
        </h2>
        <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col max-w-6xl mx-auto"
      >
        {/* Main Review */}
        <motion.div
          variants={itemVariants}
          className="relative bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 rounded-3xl p-8 sm:p-12 lg:p-16 mb-12 border border-neutral-700/30"
        >
          <div className="absolute top-8 left-8 text-6xl sm:text-8xl text-rose-300/20 font-serif">"</div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed tracking-tight text-center relative z-10 mb-8">
            {REVIEW.content}
          </p>
          <div className="absolute bottom-8 right-8 text-6xl sm:text-8xl text-rose-300/20 font-serif rotate-180">"</div>
        </motion.div>

        {/* Reviewer Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <div className="relative">
            <img
              src={xaviour}
              alt={`Reviewer ${REVIEW.name}`}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-rose-300/30 shadow-xl object-cover"
            />
            <div className="absolute -inset-2 rounded-full border-2 border-rose-300/20 animate-pulse"></div>
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h6 className="text-xl sm:text-2xl font-semibold text-rose-300">
              {REVIEW.name}
            </h6>
            <p className="text-base sm:text-lg text-neutral-400">
              {REVIEW.profession}
            </p>
            <div className="flex justify-center sm:justify-start space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Customer Gallery */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
      >
        {customerImages.map((customer, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl"
          >
            <img
              src={customer.src}
              alt={customer.alt || `Happy customer ${index + 1}`}
              className="h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-rose-300 opacity-0 group-hover:opacity-20 rounded-2xl lg:rounded-3xl transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
