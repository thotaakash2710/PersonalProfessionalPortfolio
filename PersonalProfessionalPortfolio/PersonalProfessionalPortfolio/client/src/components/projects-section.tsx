import { useState } from "react";
import { ExternalLink, Github, FileText } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio-config";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { projects } = portfolioConfig;

  const filteredProjects = activeFilter === "all" 
    ? projects.items 
    : projects.items.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "web": return "bg-blue-100 text-blue-800";
      case "mobile": return "bg-green-100 text-green-800";
      case "branding": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "web": return "Web Design";
      case "mobile": return "Mobile App";
      case "branding": return "Branding";
      default: return category;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{projects.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            {projects.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveFilter("all")}
              className={`btn-shimmer px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === "all" 
                  ? "bg-[hsl(217.2,91.2%,59.8%)] text-white" 
                  : "bg-white text-slate-600 hover:bg-[hsl(217.2,91.2%,59.8%)] hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveFilter("web")}
              className={`btn-shimmer px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === "web" 
                  ? "bg-[hsl(217.2,91.2%,59.8%)] text-white" 
                  : "bg-white text-slate-600 hover:bg-[hsl(217.2,91.2%,59.8%)] hover:text-white"
              }`}
            >
              Web Design
            </button>
            <button 
              onClick={() => setActiveFilter("mobile")}
              className={`btn-shimmer px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === "mobile" 
                  ? "bg-[hsl(217.2,91.2%,59.8%)] text-white" 
                  : "bg-white text-slate-600 hover:bg-[hsl(217.2,91.2%,59.8%)] hover:text-white"
              }`}
            >
              Mobile Apps
            </button>
            <button 
              onClick={() => setActiveFilter("branding")}
              className={`btn-shimmer px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === "branding" 
                  ? "bg-[hsl(217.2,91.2%,59.8%)] text-white" 
                  : "bg-white text-slate-600 hover:bg-[hsl(217.2,91.2%,59.8%)] hover:text-white"
              }`}
            >
              Branding
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-item bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(project.category)}`}>
                    {getCategoryLabel(project.category)}
                  </span>
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="text-slate-400 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="text-slate-400 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a 
                        href={project.caseStudyUrl} 
                        className="text-slate-400 hover:text-[hsl(217.2,91.2%,59.8%)] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
