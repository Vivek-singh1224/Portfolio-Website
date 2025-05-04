import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

function CertificationsSection() {
  const certifications = [
    {
      title: "Database Management System - Science Graduates",
      institution: "Infosys | Springboard (Sep 2024)",
      link: "https://verify.onwingspan.com/",
    },
    {
      title: "ReactJS",
      institution: "Infosys | Springboard (Sep 2024)",
      link: "https://verify.onwingspan.com/",
    },
    {
      title: "Human-Centered Design for Inclusive Innovation",
      institution: "University of Toronto , Coursera (May 2023)",
      link: "coursera.org/verify/KMNPVTLAFP8R",
    },
    {
      title: "Java Programming Fundamentals",
      institution: "Infosys | Springboard (Aug 2024)",
      link: "https://verify.onwingspan.com/",
    },
    {
      title: "Object Oriented Programming in Java",
      institution: "UC San Diego, Coursera (Nov 2023)",
      link: "https://coursera.org/verify/FTFA9FHPRTYY",
    },
  ];

  return (
    <section id="certifications" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-600 dark:text-blue-400">
          Certifications
        </h2>
        <h3 className="text-xl text-center mb-6 text-blue-500 dark:text-blue-300 font-semibold">
          Professional Development
        </h3>

        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {cert.title} 🔗
                </a>
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {cert.institution}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CertificationsSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
