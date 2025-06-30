# 🎨 Portfolio Personalization Guide

Your portfolio website is now fully customizable! All your personal information, content, and styling can be easily updated in one central configuration file.

## 📁 Main Configuration File

**Location:** `client/src/config/portfolio-config.ts`

This single file controls all the content across your entire portfolio website. Simply edit the values in this file to personalize your portfolio.

## 🔧 How to Personalize

### 1. Personal Information
```typescript
personal: {
  name: "Your Full Name",                    // Appears in navigation and footer
  title: "Your Professional Title",         // Hero section headline
  bio: "Your professional description...",  // Hero section description
  email: "your.email@example.com",          // Contact section
  phone: "+1 (555) 123-4567",              // Contact section
  location: "Your City, State",             // Contact section
  profileImage: "URL_TO_YOUR_IMAGE"         // Hero section profile photo
}
```

### 2. Social Media Links
```typescript
social: {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  dribbble: "https://dribbble.com/yourusername",
  behance: "https://behance.net/yourusername",
  portfolio: "https://yourwebsite.com"
}
```

### 3. About Section
```typescript
about: {
  title: "About Me",                        // Section heading
  subtitle: "Your compelling subtitle...",   // Section description
  description: [                             // Multiple paragraphs
    "First paragraph about your journey...",
    "Second paragraph about your beliefs..."
  ],
  image: "URL_TO_WORKSPACE_IMAGE",           // About section image
  skills: [                                  // Your skills as badges
    "Skill 1", "Skill 2", "Skill 3", ...
  ],
  resumeUrl: "/path/to/your/resume.pdf"     // Resume download link
}
```

### 4. Projects Section
```typescript
projects: {
  title: "Featured Projects",
  subtitle: "Description of your work...",
  items: [
    {
      id: 1,
      title: "Project Name",
      description: "Project description...",
      category: "web" | "mobile" | "branding",  // Filter categories
      image: "URL_TO_PROJECT_IMAGE",
      technologies: ["Tech1", "Tech2", "Tech3"],
      liveUrl: "https://live-demo.com",         // Optional
      githubUrl: "https://github.com/repo",    // Optional
      caseStudyUrl: "https://case-study.com"   // Optional
    }
    // Add more projects...
  ]
}
```

### 5. Experience Section
```typescript
experience: {
  title: "Experience",
  subtitle: "Your professional journey...",
  items: [
    {
      id: 1,
      title: "Job Title",
      company: "Company Name",
      period: "2022 - Present",
      description: "What you accomplished...",
      skills: ["Skill1", "Skill2", "Skill3"]
    }
    // Add more experiences...
  ]
}
```

### 6. Contact & Footer
```typescript
contact: {
  title: "Get In Touch",
  subtitle: "Your call to action...",
  description: "Let's Connect",
  image: "URL_TO_CONTACT_IMAGE"
},

footer: {
  description: "Brief description for footer...",
  services: [
    "Service 1",
    "Service 2", 
    "Service 3",
    "Service 4"
  ],
  copyright: "© 2024 Your Name. All rights reserved."
}
```

## 🎨 Customizing Colors & Theme

The theme section allows you to customize the visual appearance:

```typescript
theme: {
  primaryColor: "hsl(217.2, 91.2%, 59.8%)",  // Main accent color (blue)
  backgroundColor: "hsl(210, 40%, 98%)",      // Light background
  textColor: "hsl(222, 84%, 4.9%)",          // Dark text
  mutedColor: "hsl(215.4, 16.3%, 46.9%)"     // Muted text
}
```

**Popular Color Schemes:**
- Blue (default): `hsl(217.2, 91.2%, 59.8%)`
- Green: `hsl(142, 76%, 36%)`
- Purple: `hsl(262, 83%, 58%)`
- Orange: `hsl(24, 95%, 53%)`
- Red: `hsl(346, 77%, 49%)`

## 📸 Adding Your Images

### 1. Profile Photo (Hero Section)
- Recommended size: 500x500px
- Format: JPG or PNG
- Style: Professional headshot

### 2. About Section Image
- Recommended size: 800x600px
- Style: Workspace, tools, or lifestyle photo

### 3. Contact Section Image
- Recommended size: 600x400px
- Style: Professional environment or workspace

### 4. Project Images
- Recommended size: 800x500px
- Style: Screenshots, mockups, or project photos

**Image Options:**
1. **Upload to a service:** Use Imgur, Cloudinary, or similar
2. **Use stock photos:** Unsplash, Pexels (current default)
3. **Local files:** Place in `public/` folder and reference as `/image.jpg`

## 🚀 Quick Start Checklist

1. ✅ Update your personal information (name, title, bio)
2. ✅ Add your contact details (email, phone, location)
3. ✅ Update social media links
4. ✅ Replace profile photo with your own
5. ✅ Customize the about section with your story
6. ✅ Add your skills and experience
7. ✅ Upload your projects with real images and links
8. ✅ Update the color scheme if desired
9. ✅ Test the contact form
10. ✅ Add your resume file to the public folder

## 💡 Pro Tips

- **Keep descriptions concise** but compelling
- **Use high-quality images** that represent your work well
- **Update the copyright year** in the footer
- **Test all links** to ensure they work correctly
- **Choose 3-6 of your best projects** rather than listing everything
- **Keep skills relevant** to your target audience
- **Use consistent tone** throughout all descriptions

## 🔄 Making Changes

After editing the configuration file:
1. Save the file
2. The website will automatically update (hot reload)
3. Check the browser to see your changes
4. Repeat until satisfied

Your portfolio is now ready to showcase your unique professional brand! 🌟