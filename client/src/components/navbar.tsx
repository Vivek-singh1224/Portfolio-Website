import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, FileText, Code, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface NavbarProps {
  isFixed?: boolean;
}

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#about" }, // Using about section for experience since it's included there
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar({ isFixed = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background opacity based on scroll position
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu clicks - close menu when an item is clicked
  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`${
        isFixed ? "fixed" : ""
      } top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <span className="font-mono">{"<"}</span>Portfolio
          <span className="font-mono">{"/>"}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`nav-link relative text-foreground hover:text-primary transition-colors duration-200 ${
                activeSection === item.path.slice(1) ? "active" : ""
              }`}
            >
              {item.name}
              <motion.span
                className={`absolute bottom-[-2px] left-0 h-[2px] bg-primary ${
                  activeSection === item.path.slice(1) ? "w-full" : "w-0"
                }`}
                initial={false}
                animate={{
                  width: activeSection === item.path.slice(1) ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}

          {/* LeetCode Icon */}
          <a 
            href="https://leetcode.com/u/vivek1224/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors duration-200"
            aria-label="LeetCode Profile"
          >
            <div className="flex items-center">
              <Code className="h-5 w-5 mr-1" />
              <span>LeetCode</span>
            </div>
          </a>

          {/* Resume Icon */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors duration-200"
            aria-label="Download Resume"
          >
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-1" />
              <span>Resume</span>
            </div>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-foreground hover:text-primary transition-colors duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-card py-4 px-6 shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={handleMobileNavClick}
                className={`py-2 text-lg ${
                  activeSection === item.path.slice(1)
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}

            <a 
              href="https://leetcode.com" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileNavClick}
              className="py-2 text-lg text-foreground flex items-center"
            >
              <Code className="h-5 w-5 mr-2" />
              LeetCode
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileNavClick}
              className="py-2 text-lg text-foreground flex items-center"
            >
              <FileText className="h-5 w-5 mr-2" />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="py-2 text-lg text-foreground flex items-center"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}