import { DISHES } from "../constants";
import DishCard from "./DishCard";
import { motion } from "framer-motion";

const Dishes = () => {
  return (
    <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8" id="dishes">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Our <span className="text-rose-300">Dishes</span>
        </h2>
        <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Discover our carefully curated selection of culinary masterpieces
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          },
        }}
      >
        {DISHES.map((project, key) => (
          <motion.div
            key={key}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <DishCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Dishes;
