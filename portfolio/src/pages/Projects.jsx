import React from "react";
import { projects } from "../data/project";
import ProjectCard from "../component/ProjectCard";


const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-slate-50 dark:bg-[#111827]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;