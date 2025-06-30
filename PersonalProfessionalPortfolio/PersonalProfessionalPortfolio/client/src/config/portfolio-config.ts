// Portfolio Configuration - Customize your personal information here
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "John Smith",
    title: "Creative Designer & Developer",
    bio: "I craft exceptional digital experiences through thoughtful design and clean code. Specializing in user-centered solutions that make an impact.",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },

  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",
    behance: "https://behance.net/yourusername",
    portfolio: "https://yourwebsite.com"
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Passionate about creating meaningful digital experiences that solve real problems and delight users.",
    description: [
      "With over 5 years of experience in design and development, I've helped startups and enterprises create compelling digital products. My approach combines strategic thinking with creative execution.",
      "I believe great design isn't just about how it looks—it's about how it works and the impact it creates."
    ],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    skills: [
      "UI/UX Design",
      "React.js",
      "Figma",
      "JavaScript",
      "Adobe Creative",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Python"
    ],
    resumeUrl: "/resume.pdf"
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    subtitle: "A selection of my recent work across design and development projects.",
    items: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Modern e-commerce solution with seamless user experience and responsive design.",
        category: "web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://your-project-live.com",
        githubUrl: "https://github.com/yourusername/project"
      },
      {
        id: 2,
        title: "Fitness Tracking App",
        description: "Cross-platform mobile app for fitness enthusiasts with social features.",
        category: "mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["React Native", "Firebase", "UI/UX"],
        liveUrl: "https://your-app-store-link.com",
        caseStudyUrl: "https://your-case-study.com"
      },
      {
        id: 3,
        title: "Startup Brand Identity",
        description: "Complete brand identity package including logo, guidelines, and marketing materials.",
        category: "branding",
        image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Illustrator", "Photoshop", "Branding"],
        liveUrl: "https://brand-showcase.com",
        caseStudyUrl: "https://case-study-link.com"
      }
    ]
  },

  // Experience Section
  experience: {
    title: "Experience",
    subtitle: "My professional journey and key milestones in design and development.",
    items: [
      {
        id: 1,
        title: "Senior UX Designer",
        company: "TechCorp Inc.",
        period: "2022 - Present",
        description: "Leading design initiatives for enterprise software products, managing a team of 5 designers, and establishing design systems that improved development efficiency by 40%.",
        skills: ["Team Leadership", "Design Systems", "Product Strategy"]
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "Digital Agency Pro",
        period: "2020 - 2022",
        description: "Developed and maintained web applications for various clients, specializing in React and Node.js ecosystems. Successfully delivered 15+ projects on time and within budget.",
        skills: ["React.js", "Node.js", "MongoDB"]
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "StartupHub",
        period: "2018 - 2020",
        description: "Created user-centered designs for mobile and web applications, conducted user research, and collaborated with development teams to ensure pixel-perfect implementations.",
        skills: ["UI Design", "User Research", "Prototyping"]
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    subtitle: "Have a project in mind? Let's discuss how we can work together to create something amazing.",
    description: "Let's Connect",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },

  // Footer
  footer: {
    description: "Creative designer and developer passionate about crafting exceptional digital experiences.",
    services: [
      "Web Design",
      "Mobile App Development",
      "Brand Identity",
      "UI/UX Consulting"
    ],
    copyright: "© 2024 John Smith. All rights reserved."
  },

  // Theme Configuration
  theme: {
    primaryColor: "hsl(217.2, 91.2%, 59.8%)", // Blue accent color
    backgroundColor: "hsl(210, 40%, 98%)", // Light background
    textColor: "hsl(222, 84%, 4.9%)", // Dark text
    mutedColor: "hsl(215.4, 16.3%, 46.9%)" // Muted text
  }
};

export type PortfolioConfig = typeof portfolioConfig;