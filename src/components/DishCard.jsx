import { motion } from "framer-motion";

const DishCard = ({ project: { image, title, description } }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="rounded-3xl shadow-md overflow-hidden"
    >
      {/* Image Section */}
      <img
        src={image || "/placeholder.jpg"}
        alt={title ? `${title} image` : "Dish image"}
        className="rounded-3xl p-2 object-cover w-full"
        loading="lazy" // Lazy load for performance
      />

      {/* Content Section */}
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter text-neutral-200">
          {title}
        </h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </motion.article>
  );
};

export default DishCard;
