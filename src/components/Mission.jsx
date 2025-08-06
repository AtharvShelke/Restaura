import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Our <span className="text-rose-300">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <video
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={missionImg}
            >
              <source src={mission} type="video/mp4" />
            </video>

            {/* Enhanced Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
            />

            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 lg:p-12"
            >
              <div className="text-center max-w-4xl">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed tracking-tight text-white drop-shadow-2xl">
                  {MISSION}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="h-1 bg-rose-300 mx-auto mt-6 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
