import { Github, Linkedin, ExternalLink, Palette } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { portfolioConfig } from "@/config/portfolio-config";

export default function Footer() {
  const { personal, social, footer } = portfolioConfig;
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{personal.name}</h3>
            <p className="text-slate-300 mb-4">
              {footer.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href={social.dribbble} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Palette size={24} />
              </a>
              <a 
                href={social.behance} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("experience")}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footer.services.map((service, index) => (
                <li key={index} className="text-slate-300">{service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-300">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
