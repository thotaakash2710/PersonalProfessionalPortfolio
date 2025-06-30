import { Github, Linkedin, ExternalLink, Palette } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { portfolioConfig } from "@/config/portfolio-config";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {portfolioConfig.personal.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {portfolioConfig.personal.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection("projects")}
                className="btn-primary-shimmer bg-[hsl(217.2,91.2%,59.8%)] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 text-center"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="btn-secondary-shimmer border-2 border-[hsl(217.2,91.2%,59.8%)] text-[hsl(217.2,91.2%,59.8%)] px-8 py-3 rounded-lg font-medium hover:bg-[hsl(217.2,91.2%,59.8%)] hover:text-white transition-all duration-200 text-center"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex space-x-6">
              <a 
                href={portfolioConfig.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href={portfolioConfig.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
              >
                <Github size={28} />
              </a>
              <a 
                href={portfolioConfig.social.dribbble} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
              >
                <Palette size={28} />
              </a>
              <a 
                href={portfolioConfig.social.behance} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors duration-200"
              >
                <ExternalLink size={28} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
          </div>
        </div>
      </div>
    </section>
  );
}
