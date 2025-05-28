export const portfolioConfig = {
  // Personal Information - Edit these with your details
  name: "Alex Johnson",
  title: "Full Stack Developer",
  subtitle: "Creating digital experiences with code and creativity",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",

  // Social Links - Add your actual links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourwebsite.com",
  },

  // About Section - Edit with your story
  about: {
    description:
      "I'm a passionate full-stack developer with 5+ years of experience creating web applications that solve real-world problems. I love working with modern technologies and turning ideas into beautiful, functional digital experiences.",
    skills: ["React & Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Three.js", "UI/UX Design"],
  },

  // Projects - Add your projects here
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.com",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      github: "https://github.com/yourusername/taskapp",
      live: "https://your-taskapp.com",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by OpenAI's GPT API.",
      technologies: ["React", "OpenAI API", "Express", "Redis"],
      github: "https://github.com/yourusername/ai-chat",
      live: "https://your-ai-chat.com",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],

  // Experience - Add your work experience
  experience: [
    {
      company: "Tech Startup Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description:
        "Led development of core platform features, mentored junior developers, and improved system performance by 40%.",
    },
    {
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description:
        "Built responsive web applications for clients, collaborated with design teams, and implemented modern development practices.",
    },
  ],
}
