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
      className="rounded-3xl shadow-md overflow-hidden"
    >
      {/* Image Section */}
      <div className="w-full h-64 relative">
        <LazyLoadImage
          src={image || "/placeholder.jpg"}
          alt={title ? `${title} image` : "Dish image"}
          effect="blur" // Adds a blur effect while the image is loading
          width={500} // Explicit width for layout stability
          height={300} // Explicit height to prevent layout shifts
          className="rounded-3xl object-cover w-full h-full"
        />
      </div>

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
