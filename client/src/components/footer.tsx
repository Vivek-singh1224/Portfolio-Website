import { GitHubIcon, LinkedInIcon, CodeIcon, MailIcon } from "./social-icons";

export default function Footer() {
  return (
    <footer className="bg-card py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Vivek-singh1224"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#5D43F6] transition-colors"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-singh-4b1598213/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#5D43F6] transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/vivek1224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#5D43F6] transition-colors"
              aria-label="LeetCode profile"
            >
              <CodeIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:1224vivek@gmail.com"
              className="text-gray-500 hover:text-[#5D43F6] transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vivek Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
