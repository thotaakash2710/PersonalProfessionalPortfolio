import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { portfolioConfig } from "@/config/portfolio-config";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-md"
    } border-b border-slate-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-primary">
            {portfolioConfig.personal.name}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick("home")}
              className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick("about")}
              className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick("projects")}
              className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick("experience")}
              className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavClick("contact")}
              className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick("home")}
                className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick("about")}
                className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200 text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick("projects")}
                className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick("experience")}
                className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200 text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => handleNavClick("contact")}
                className="text-slate-600 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
