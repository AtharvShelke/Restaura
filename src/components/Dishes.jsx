import { DISHES } from "../constants";
import DishCard from "./DishCard";
import { motion } from "framer-motion";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16 px-8 border-t-slate-500" id="dishes">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, // Stagger child animations
          },
        }}
      >
        {DISHES.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <DishCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Dishes;
