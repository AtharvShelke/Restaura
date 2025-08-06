import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900/50 to-black/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Our <span className="text-rose-300">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            Masterfully crafted cuisines from around the world
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto space-y-8 lg:space-y-12"
        >
          {CUSINES.map((cuisine, i) => (
            <motion.div 
              variants={itemVariants}
              key={i} 
              className="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-neutral-800/30 to-neutral-900/30 border border-neutral-700/30 hover:border-rose-300/30 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-300/10"
            >
              {/* Number */}
              <div className="flex-shrink-0 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-rose-300/20 group-hover:text-rose-300/40 transition-colors duration-500 lg:w-32 text-center lg:text-left">
                {cuisine.number}
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-full sm:w-80 lg:w-96">
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src={cuisine.image} 
                    alt={`${cuisine.title} cuisine`} 
                    className="h-60 sm:h-72 lg:h-80 w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold tracking-tighter text-rose-300 group-hover:text-rose-200 transition-colors duration-300">
                  {cuisine.title}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-rose-300 rounded-full mx-auto lg:mx-0"
                />
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-tight text-neutral-300 max-w-2xl">
                  {cuisine.description}
                </p>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-rose-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
