import { CONTACT } from "../constants";

const ContactSection = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl font-bold">
        Contact Us
      </h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-12 border-b-2 border-dotted border-neutral-700 pb-6 text-center text-2xl tracking-tight lg:text-3xl"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
