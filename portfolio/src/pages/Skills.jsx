import React from "react";
import { motion } from "framer-motion";

// Importing icons from src/assets
import htmlIcon from "../assets/icons8-html.svg";
import cssIcon from "../assets/icons8-css.svg";
import gitIcon from "../assets/icons8-git.svg";
import nodeIcon from "../assets/icons8-nodejs.svg";
import mongoIcon from "../assets/icons8-mongodb.svg";
import javascriptIcon from "../assets/js_logo.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import reduxIcon from "../assets/icons8-redux.svg";
import reactIcon from "../assets/react.svg";
import expressIcon from "../assets/express.svg"

// Skill groups
const frontendSkills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Tailwind", icon: tailwindIcon },
];

const backendSkills = [
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Git", icon: gitIcon },
];

const SkillGrid = ({ title, skills }) => (
  <div className="mb-12 w-full">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map((skill, index) => {
        const isRotating = skill.name === "React" || skill.name === "Redux";

        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 flex flex-col items-center"
          >
            <motion.img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 object-contain mb-2"
              animate={isRotating ? { rotate: 360 } : undefined}
              transition={
                isRotating
                  ? { duration: 4, repeat: Infinity, ease: "linear" }
                  : undefined
              }
              style={
                isRotating
                  ? { filter: "drop-shadow(0px 0px 10px #5BC0F8f5)" }
                  : {}
              }
            />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {skill.name}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-white dark:bg-[#111827]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto">
        <SkillGrid title="Frontend" skills={frontendSkills} />
        <SkillGrid title="Backend & Tools" skills={backendSkills} />
      </div>
    </section>
  );
};

export default Skills;
