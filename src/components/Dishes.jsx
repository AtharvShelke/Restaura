import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16 px-8" id="dishes">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DISHES.map((project) => (
          <DishCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
