import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/profileImg.png"; 

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-5 sm:px-10 md:px-16 lg:px-24 py-20 gap-10 bg-gradient-to-br from-white to-slate-100 dark:from-[#0f0f11] dark:to-[#1c1c21]">
      
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left w-full max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
          Hi, I'm{" "}
          <span className="text-purple-600 dark:text-purple-400">
            <Typewriter
              words={["Alok Mishra", "a Full-Stack Developer", "a MERN Stack Engineer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl mt-3 text-gray-600 dark:text-gray-300">
          🚀 Crafting Stylish UIs with <span className="font-semibold text-purple-600 dark:text-purple-400">React</span> & <span className="font-semibold text-purple-600 dark:text-purple-400">Tailwind</span>
        </h2>

        <p className="text-sm sm:text-base mt-4 text-gray-500 dark:text-gray-400">
          I’m a <span className="font-semibold text-purple-600 dark:text-purple-400">passionate full-stack developer</span> who loves turning complex problems into simple, beautiful, and intuitive solutions. 
        </p>

        <p className="text-sm sm:text-base mt-2 text-gray-500 dark:text-gray-400">
          Skilled in <span className="font-medium text-indigo-600 dark:text-indigo-400">React, Node.js, MongoDB</span>, and always learning. I enjoy building <span className="italic">real-world projects</span> that make a difference.
        </p>

        <p className="text-sm sm:text-base mt-2 text-gray-500 dark:text-gray-400">
          💼 Open to <span className="font-semibold">Freelance</span> work & <span className="font-semibold">Collaborations</span>.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-600 transition-all duration-300 shadow-md text-center"
          >
            📄 Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 text-center"
          >
            ✉️ Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Portrait Section with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative group w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden"
      >
        {/* Glowing animated ring */}
        <div className="absolute inset-0 z-0 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition duration-500 
          bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 animate-pulse"></div>

        {/* Profile image */}
        <img
          src={profileImg}
          alt="my profile"
          className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-[#1c1c21] hover:scale-105 transition-transform duration-500"
        />

        {/* Subtle ping glow */}
        <div className="absolute inset-0 z-0 rounded-full border-[3px] border-purple-400 opacity-20 animate-ping"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
