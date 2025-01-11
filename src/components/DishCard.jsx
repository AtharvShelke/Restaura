const DishCard = ({ project: { image, title, description } }) => {
  return (
    <article className="rounded-3xl shadow-md">
      <img
        src={image || "/placeholder.jpg"}
        alt={`${title} image`}
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </article>
  );
};

export default DishCard;
