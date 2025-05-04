
import { ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Database Management System - Science Graduates",
      institution: "Infosys||Springboard",
      date: "Sep 9, 2024",
      link: "https://verify.onwingspan.com/"
    },
    {
      title: "ReactJS",
      institution: "Infosys||Springboard", 
      date: "Sep 7, 2024",
      link: "https://verify.onwingspan.com/"
    },
    {
      title: "Human-Centered Design for Inclusive Innovation",
      institution: "University of Toronto, Coursera",
      date: "May 21, 2023", 
      link: "coursera.org/verify/KMNPVTLAFP8R"
    },
    {
      title: "Java Programming Fundamentals",
      institution: "Infosys||Springboard",
      date: "Apr 18, 2024",
      link: "https://verify.onwingspan.com/"
    },
    {
      title: "Object Oriented Programming in Java",
      institution: "UC San Diego, Coursera",
      date: "Nov 26, 2023",
      link: "https://coursera.org/verify/FTFA9FHPRTYY"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <p className="text-[#007bff] mb-8">Professional Development</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative bg-card rounded-lg p-6 shadow-md border border-border/50 hover:border-[#007bff]/50 transition-colors">
              <h3 className="text-lg font-medium mb-2 text-[#007bff] group-hover:text-[#007bff]/80">
                {cert.title}
              </h3>
              <p className="text-muted-foreground">{cert.institution}</p>
              <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-[#007bff]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
