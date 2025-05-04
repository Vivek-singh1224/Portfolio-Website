import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
  },
};

const titles = ["Software Developer", "Problem Solver"];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.substring(0, displayText.length + 1));
          } else {
            // Pause at the end of typing before deleting
            setIsDeleting(true);
            setTimeout(() => {}, 1000);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentTitle.substring(0, displayText.length - 1));
          } else {
            // Move to next title
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 150,
    );

    return () => clearTimeout(timer);
  }, [displayText, titleIndex, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background py-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D43F6]/30 to-transparent"></div>
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80')] bg-cover opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-3/5 space-y-6"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#5D43F6]">Hello, I'm</span>
              <br />
              <span className="text-foreground">Vivek Singh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              {displayText}
              <span className="inline-block w-1 h-6 ml-1 bg-primary animate-pulse"></span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              I build exceptional digital experiences with modern technologies.
              Passionate about creating clean, user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-[#5D43F6] hover:bg-[#7B61FF] text-white shadow-lg shadow-[#5D43F6]/20"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-muted hover:border-[#5D43F6] hover:text-[#5D43F6]"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex space-x-5 pt-4">
              <a
                href="https://github.com/Vivek-singh1224"
                className="text-muted-foreground hover:text-[#5D43F6] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <GitPullRequest className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-[#5D43F6] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-singh-4b1598213/"
                className="text-muted-foreground hover:text-[#5D43F6] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://portfolio.com"
                className="text-muted-foreground hover:text-[#5D43F6] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/5 mt-12 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#5D43F6] shadow-xl shadow-[#5D43F6]/20">
              <img
                src="/profile.jpeg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
