import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Skills data
const skills = [
  { name: "HTML/CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "Flask", level: "Beginner" },
  { name: "WordPress", level: "Beginner" },
  { name: "PowerBi", level: "Intermediate" }
 
];

// Specialized skills
const specializedSkills = [
  "Java & OOPs Concepts",
  "Data Structures & Algorithms (DSA)",
  "API Development & Integration",
  "Cloud Services & Deployment",
  "Database Management (SQL & NoSQL)",
  "Responsive Web Design"
];

// Tools and software
const tools = [
  { name: "Visual Studio Code" },
  { name: "IntelliJ IDEA" },
  { name: "Git" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "Postman" },
  { name: "Power BI" }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="space-y-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="inline-block text-[#5D43F6] text-sm font-semibold tracking-wider uppercase">
            My Skills
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
          <div className="mx-auto w-24 h-1 bg-[#5D43F6]"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Here are the technologies I've been working with recently. I'm constantly 
            learning and expanding my skill set to stay updated with the latest trends.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-item p-5 rounded-lg bg-card hover:bg-card/80 text-center transition-all shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#5D43F6] rounded-full bg-[#5D43F6]/10">
                <span className="text-2xl font-bold">{skill.name.charAt(0)}</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
              <p className="text-muted-foreground text-sm mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.div
            className="md:w-1/2 lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-foreground">Specialized Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {specializedSkills.map((skill, index) => (
                <div key={index} className="flex items-center bg-card/50 p-3 rounded-lg">
                  <span className="text-[#5D43F6] mr-2">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-foreground">Tools & Software</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center bg-card/50 p-3 rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-[#5D43F6] mr-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}