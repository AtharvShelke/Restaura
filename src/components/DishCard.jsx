import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import lazy load image component
import "react-lazy-load-image-component/src/effects/blur.css"; // Import blur effect styles

const DishCard = ({ project: { image, title, description } }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl shadow-md overflow-hidden bg-neutral-900"
    >
      {/* Image Section */}
      <div className="relative">
        <LazyLoadImage
          src={image || "/placeholder.jpg"}
          alt={title ? `${title} image` : "Dish image"}
          effect="blur"
          width="100%"
          height="auto"
          className="rounded-t-3xl object-cover max-h-64 w-full"
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-neutral-200">
          {title}
        </h3>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </motion.article>
  );
};

export default DishCard;
