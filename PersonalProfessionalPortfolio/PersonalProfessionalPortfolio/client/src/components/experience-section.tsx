import { Calendar } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio-config";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export default function ExperienceSection() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{experience.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {experience.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
          
          {experience.items.map((item, index) => (
            <div key={item.id} className="relative flex items-start mb-12">
              <div className="hidden md:flex absolute left-6 w-4 h-4 bg-[hsl(217.2,91.2%,59.8%)] rounded-full border-4 border-white shadow-md"></div>
              <div className="md:ml-16 bg-slate-50 rounded-2xl p-6 w-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-[hsl(217.2,91.2%,59.8%)] font-medium">{item.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 mt-2 md:mt-0 flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {item.period}
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-white text-slate-600 text-xs px-3 py-1 rounded-full border"
                    >
                      {skill}
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
