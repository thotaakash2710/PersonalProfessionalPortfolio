import { Download } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio-config";

export default function AboutSection() {
  const { about } = portfolioConfig;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{about.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {about.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={about.image} 
              alt="Modern workspace with laptop and design tools" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-slate-600 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Core Skills</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {about.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="skill-badge bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium text-center cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={about.resumeUrl} 
              download
              className="btn-shimmer inline-flex items-center text-[hsl(217.2,91.2%,59.8%)] hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
