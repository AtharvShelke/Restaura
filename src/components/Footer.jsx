import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map(({ href, icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${icon.props['aria-label'] || "social media"}`}
            className="transition-transform hover:scale-110"
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-tighter text-neutral-500">
        &copy; {new Date().getFullYear()} Atharv. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
