import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Project data
const projects = [
  {
    id: 1,
    title: "CampusConect",
    description: "CampusConnect – Real-Time Campus Communication Platform",
    image: "/ChatGPT_Image1.png",
    features: [
      "Designed and developed a full-stack real-time chat platform tailored for campus collaboration using React, Node.js, Tailwind CSS, MongoDB, and Socket.io.",
      "Integrated Socket.io to enable live messaging between users, ensuring minimal latency and real-time updates across all devices.",
      "Secured the platform with JWT authentication, cookie handling, and CORS policies, maintaining user session integrity.",
      "Enhanced user interface responsiveness and design consistency using Tailwind CSS and modern component-based architecture.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "https://github.com/Vivek-singh1224/CampusConnect",
    },
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and contact information.",
    image: "/ChatGPT-portfolio.png",
    features: [
      "Developed a responsive and modern personal portfolio website using HTML, CSS, JavaScript, Tailwind CSS and ReactJS providing a seamless user experience across devices.",
      "Implemented a clean and intuitive UI to effectively showcase professional skills, projects, and contact information.",
      "Structured the project with organized and maintainable code, facilitating easy updates and scalability.",
      "Ensured cross-browser compatibility and adherence to web accessibility standards to reach a wider audience.",
    ],
    technologies: [
      "Html/Css",
      "React",
      "Node.js",
      "Javascript",
      "Tailwind CSS",
      "Typescript",
    ],
    links: {
      demo: "#",
      github: "https://github.com/Vivek-singh1224/Personal-Portfolio",
    },
  },
];

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="space-y-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="inline-block text-[#5D43F6] text-sm font-semibold tracking-wider uppercase">
            My Work
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="mx-auto w-24 h-1 bg-[#5D43F6]"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Here are some of my recent projects. Each project is unique and
            solves specific problems.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden border border-gray-100 dark:border-gray-800 shadow-md">
            <div className="flex flex-col lg:flex-row">
              {/* Project Image - Left Side */}
              <div className="w-full lg:w-1/2 h-[400px] bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details - Right Side */}
              <div className="w-full lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-3 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#5D43F6] mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3 mt-6">
                  <Button
                    className="bg-[#5D43F6] hover:bg-[#4f46e5] text-white"
                    onClick={() => window.open(project.links.demo, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>

                  <Button
                    variant="outline"
                    className="border-gray-300"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentProject(i)}
                  className={`h-3 ${i === currentProject ? "w-6" : "w-3"} rounded-full transition-all duration-300 ${
                    i === currentProject
                      ? "bg-[#5D43F6]"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
