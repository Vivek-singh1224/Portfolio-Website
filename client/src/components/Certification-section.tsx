import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Database Management System - Science Graduates",
    institution: "Infosys||Springboard",
    date: "Sep 9, 2024",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "ReactJS",
    institution: "Infosys||Springboard",
    date: "Sep 7, 2024",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Human-Centered Design for Inclusive Innovation",
    institution: "University of Toronto, Coursera",
    date: "May 21, 2023",
    link: "coursera.org/verify/KMNPVTLAFP8R",
  },
  {
    title: "Java Programming Fundamentals",
    institution: "Infosys||Springboard",
    date: "Apr 18, 2024",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Object Oriented Programming in Java",
    institution: "UC San Diego, Coursera",
    date: "Nov 26, 2023",
    link: "https://coursera.org/verify/FTFA9FHPRTYY",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <p className="text-[#007bff] mb-8">Professional Development</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-3 h-3 rounded-full bg-[#007bff] flex-shrink-0" />
              <div>
                <h4 className="text-[#007bff] font-medium group-hover:underline flex items-center gap-1">
                  {cert.title}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.institution} ({cert.date})
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
