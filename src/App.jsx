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
      el: document.querySelector(".scroll-container"), // Target the scroll container
      smooth: true, // Enable smooth scrolling
    });

    // Cleanup on component unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
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
