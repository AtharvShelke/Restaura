import { REVIEW } from "../constants";
import { motion } from "framer-motion";
import xaviour from "../assets/xaviour.jpeg";
import customerImages from "../assets/customers.js"; // Import all customer images dynamically

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Review = () => {
  return (
    <section className="container mx-auto my-12" id="review">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={itemVariants}
          className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            alt={`Reviewer ${REVIEW.name}`}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6 className="font-semibold">{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mt-14 flex flex-col items-center justify-center gap-4 md:flex-row"
      >
        {customerImages.map((customer, index) => (
          <motion.img
            variants={itemVariants}
            key={index}
            src={customer.src}
            alt={customer.alt || `Customer ${index + 1}`}
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover shadow-md"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
