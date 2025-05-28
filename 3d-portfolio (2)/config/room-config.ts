// Type definitions for better type safety
interface Project {
  name: string
  description: string
  tech: string[]
  link: string
  status: "Live" | "In Progress"
}

interface Experience {
  role: string
  company: string
  period: string
  highlights: string[]
}

interface ObjectContent {
  projects?: Project[]
  skills?: Record<string, string[]>
  bio?: string
  experience?: Experience[]
  interests?: string[]
  philosophy?: string
  message?: string
  availability?: string
  response?: string
}

interface ObjectData {
  title: string
  description: string
  content: ObjectContent
}

interface RoomConfig {
  personal: {
    name: string
    title: string
    tagline: string
    email: string
    phone: string
    location: string
  }
  social: {
    github: string
    linkedin: string
    twitter: string
    website: string
  }
  objects: {
    laptop: ObjectData
    books: ObjectData
    picture: ObjectData
    plant: ObjectData
    coffee: ObjectData
  }
}

export const roomConfig: RoomConfig = {
  // Personal Information
  personal: {
    name: "Reuben Fernandes",
    title: "Full Stack Developer", // Added a title since it was empty
    tagline: "My Portfolio in a 3D space",
    email: "reubentf1310@gmail.com",
    phone: "+91 7718094792",
    location: "Mumbai, India",
  },

  // Social Links
  social: {
    github: "https://github.com/ReubenF13",
    linkedin: "https://linkedin.com/in/reuben-fernandes-58700b271",
    twitter: "https://twitter.com/yourusername", // Added placeholder
    website: "https://yourwebsite.com",
  },

  // Interactive Objects Content
  objects: {
    laptop: {
      title: "My Projects",
      description: "Click to explore my latest work",
      content: {
        projects: [
          {
            name: "AICTE Approval Portal",
            description: "A portal to collect, analyze and verify documents from colleges over India for approval",
            tech: ["React", "Node.js", "MongoDB", "Express"], // Added tech stack
            link: "https://github.com/Icant-code404/SIH_2024.git",
            status: "Live",
          },
          {
            name: "3D Portfolio Site",
            description: "Interactive portfolio built with Three.js",
            tech: ["Next.js", "Three.js", "TypeScript", "Tailwind"],
            link: "https://github.com/ReubenF13/portfolio",
            status: "In Progress",
          },
          {
            name: "Epilepsy Detector and Tracker",
            description: "IOT based hardware/software epilepsy detection system",
            tech: ["Arduino", "Python", "IoT", "Machine Learning"], // Added tech stack
            link: "https://github.com/czarzival/te_mini_project_group_9.git",
            status: "Live",
          },
        ],
      },
    },

    books: {
      title: "Skills & Knowledge",
      description: "My technical expertise and learning journey",
      content: {
        skills: {
          Frontend: ["React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS"],
          Backend: ["Node.js", "Python", "PostgreSQL"],
          Tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
          "Currently Learning": ["Java", "Machine Learning", "Blender"],
        },
      },
    },

    picture: {
      title: "About Me",
      description: "Get to know the person behind the code",
      content: {
        bio: "I'm a passionate developer who loves creating immersive digital experiences. I specialize in bringing creative ideas to life through code.",
        experience: [
          {
            role: "Social Media Manager Intern",
            company: "Affinzy Advertising",
            period: "April 2023 – July 2023",
            highlights: [
              "Handled social media accounts for various client companies, came up with strategies and schedules to optimize reach.",
            ],
          },
          {
            role: "Organizing Committee Member",
            company: "Student's Council of Fr.CRCE",
            period: "2023-2024",
            highlights: [
              "Organized Crescendo Hackathon with over 500 participants",
              "Developed and implemented PR and marketing campaigns and social media strategies",
              "Coordinated logistical aspects for Euphoria college fest and CRMD Debate (National Level)",
              "Managed venue for 2 days and scheduled multiple rounds",
            ],
          },
        ],
      },
    },

    plant: {
      title: "Interests & Hobbies",
      description: "What inspires me outside of coding",
      content: {
        interests: [
          "🎨 Art & Animation",
          "📚 Sci-Fi Literature & Thriller",
          "🏔️ Travelling",
          "🎵 Guitar",
          "📷 Photography",
        ],
        philosophy:
          "I believe in exploring creativity through both technology and art, finding inspiration in stories, music, and the world around me.",
      },
    },

    coffee: {
      title: "Let's Connect",
      description: "Ready to collaborate? Let's grab a virtual coffee!",
      content: {
        message:
          "I'm always excited to work on new projects and meet fellow creators. Whether you have an idea, need help with a project, or just want to chat about technology, I'd love to hear from you!",
        availability: "Available for freelance projects, internships and full-time opportunities",
        response: "I typically respond within 24 hours",
      },
    },
  },
}
