import { useEffect } from "react";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Dishes from "./components/Dishes";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(".scroll-container"),
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="overflow-x-hidden text-neutral-200 antialiased selection:bg-rose-300 selection:text-black">
      <div className="scroll-container">
        <HeroSection />
        <Navbar />
        <Dishes />
        <About />
        <Mission />
        <Expertise />
        <Review />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
