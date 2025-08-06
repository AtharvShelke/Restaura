import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const DishCard = ({ project: { image, title, description } }) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group rounded-3xl shadow-xl overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700/30 hover:border-rose-300/30 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <LazyLoadImage
          src={image || "/placeholder.jpg"}
          alt={title ? `${title} - signature dish` : "Signature dish"}
          effect="blur"
          width="100%"
          height="auto"
          className="rounded-t-3xl object-cover h-64 w-full group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Text Section */}
      <div className="p-6 sm:p-8">
        <h3 className="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 group-hover:text-rose-300 transition-colors duration-300">
          {title}
        </h3>
        <div className="w-12 h-0.5 bg-rose-300 mb-4 group-hover:w-16 transition-all duration-300"></div>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-rose-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
    </motion.article>
  );
};

export default DishCard;
