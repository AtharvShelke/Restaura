import { motion } from "framer-motion";
const DishCard = ({ project: { image, title, description } }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="rounded-3xl shadow-md">
      <img
        src={image || "/placeholder.jpg"}
        alt={`${title} image`}
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </motion.article>
  );
};

export default DishCard;
