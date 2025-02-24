// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 right-0 z-50 transition-all ${scrolled ? "shadow-md bg-white" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer"
          >
            <img
              src="https://files.codingninjas.com/new-cn-logos-1-1733819445.svg"
              alt="Coding Ninjas Logo"
              className="h-8 w-auto"
            />
          </Link>

   
          <div className="flex items-center space-x-8">
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="flex items-center space-x-1 text-gray-800 hover:text-orange-500 cursor-pointer font-medium transition-colors"
            >
              <span>Job Bootcamp</span>
              <svg
                className="h-4 w-4 mt-0.5 text-current transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="flex items-center space-x-1 text-gray-800 hover:text-orange-500 cursor-pointer font-medium transition-colors"
            >
              <span>IT Certifications</span>
              <svg
                className="h-4 w-4 mt-0.5 text-current transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}