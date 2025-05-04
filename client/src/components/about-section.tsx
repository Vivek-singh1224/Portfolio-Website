import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "Problem Solving",
  "PowerBI",
];

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Noida Institute of Engineering & Technology",
    period: "2022 - 2026",
  },
  {
    degree: "Higher Secondary Education",
    institution: "R.K. Education Center",
    period: "2019 - 2021",
  },
];

const experience = [
  {
    position: "Advanced Software Engineering Intern",
    company: "Forage",
    period: "Aug. 2024 – Oct. 2024",
    type: "Remote",
    achievements: [
      "Optimized algorithms using advanced data structures and implemented scalable, modular software architecture.",
      "Designed robust relational database schemas ensuring data integrity and efficient query performance.",
    ],
  },
  {
    position: "Web Development Intern",
    company: "Bharat Intern",
    period: "Aug. 2023 – Sept. 2023",
    type: "Remote",
    achievements: [
      " Designed and developed a responsive Netflix clone website using HTML, CSS, JavaScript, simulating real-time data handling and UI similar to Netflix.",
      "Built a professional portfolio website to showcase personal projects and skills . Improved coding standards and version control using Git and GitHub for project management.",
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="space-y-4 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="inline-block text-[#5D43F6] text-sm font-semibold tracking-wider uppercase">
            About Me
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Get to know me</h2>
          <div className="mx-auto w-24 h-1 bg-[#5D43F6]"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi, I'm{" "}
              <span className="text-foreground font-medium">Vivek Singh</span>,
              a passionate Web Developer currently pursuing my B.Tech in
              Information Technology. I have a passion for building interactive
              and user-friendly web applications using technologies like
              <span className="text-foreground font-medium">
                {" "}
                HTML, CSS, JavaScript, React, Node.js
              </span>
              , and <span className="text-foreground font-medium">SQL</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey into web development began with a strong interest in
              creating websites that are both functional and visually appealing.
              Over time, I've built real-world projects like a{" "}
              <em>Personal Portfolio</em> and a <em>Campus Connect</em> platform
              that allowed users to chat and connect.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I enjoy solving problems, collaborating with others, and
              continuously learning new technologies to improve my skills and
              deliver better solutions.
            </p>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <span className="text-[#5D43F6] mr-2">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-foreground">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                className="bg-[#5D43F6] hover:bg-[#7B61FF] text-white shadow-lg shadow-[#5D43F6]/20"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <div className="md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 bg-background shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-[#5D43F6]">
                  Education
                </h3>
                <ul className="space-y-4">
                  {education.map((item, index) => (
                    <li
                      key={index}
                      className="border-l-2 border-[#5D43F6] pl-4 py-2"
                    >
                      <div className="text-foreground font-semibold">
                        {item.degree}
                      </div>
                      <div className="text-muted-foreground">
                        {item.institution}
                      </div>
                      <div className="text-foreground/70 dark:text-foreground/80 text-sm font-medium">
                        {item.period}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="p-6 bg-background shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-[#5D43F6]">
                  Work Experience
                </h3>
                <p className="text-muted-foreground mb-6">
                  My professional journey and contributions in the tech
                  industry.
                </p>
                <ul className="space-y-8">
                  {experience.map((item, index) => (
                    <li key={index} className="relative">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="text-foreground font-semibold text-lg">
                            {item.position}
                          </div>
                          <div className="text-[#5D43F6] font-medium">
                            {item.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-[#5D43F6]/10 text-[#5D43F6] px-2 py-1 rounded text-sm">
                            {item.type}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
