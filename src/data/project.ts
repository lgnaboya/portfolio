import type { Project } from "@/types/project";

export const projects: Project[] = [
  // 🔐 RENTAL LOCKER SYSTEM
  {
    slug: "rental-locker",
    template: "default",

    title: "Rental Locker System",
    subtitle: "Mobile Application",
    description:
      "A secure locker rental system powered by face recognition and digital payments, delivering a seamless and contactless user experience.",

    meta: {
      role: "UX/UI Design, Mobile Development",
      type: "Mobile Application",
      tech: ["Android (Java)", "Firebase", "FaceNet", "ESP32"],
    },

    sections: {
      overview: {
        title: "A Smart Locker Experience",
        content:
          "The Rental Locker System transforms traditional locker access into a seamless, contactless experience using face recognition and digital payments. It bridges hardware and software to deliver secure and efficient user interactions.",
      },

      problem: [
        {
          title: "Access Friction",
          desc: "Physical keys and manual processes create inconvenience and delays.",
        },
        {
          title: "Security Limitations",
          desc: "Traditional lockers lack advanced authentication and monitoring.",
        },
        {
          title: "Poor User Experience",
          desc: "No streamlined way to manage bookings, payments, and access.",
        },
      ],

      solution: {
        title: "Smart, Contactless Locker System",
        content:
          "By integrating face recognition, real-time booking, and digital payments, the system creates a frictionless experience from reservation to access.",
      },

      features: [
        "Face Recognition Authentication",
        "Locker Rental Management",
        "Integrated Digital Payments",
        "Real-time Notifications",
      ],

      impact:
        "Improved security, reduced access friction, and delivered a modern, contactless locker experience.",

      reflection:
        "This project strengthened my ability to integrate hardware systems with user-centered design, balancing technical constraints with usability.",
    },
  },

  // 🌐 NOFACE
  {
    slug: "noface",
    template: "default",

    title: "NoFace",
    subtitle: "Anonymous Social Platform",
    description:
      "A privacy-first social platform that enables meaningful conversations through anonymous voice and text interactions.",

    meta: {
      role: "UI/UX Design, Frontend Development",
      type: "Web Platform",
      tech: ["React", "Express.js", "ASP.NET"],
    },

    sections: {
      overview: {
        title: "Designing for Honest Conversations",
        content:
          "NoFace removes identity pressure from social interaction, enabling users to communicate freely through voice and text in a safe and anonymous environment.",
      },

      problem: [
        {
          title: "Social Pressure",
          desc: "Identity-based platforms limit authenticity and openness.",
        },
        {
          title: "Shallow Interactions",
          desc: "Conversations often lack depth due to performative behavior.",
        },
      ],

      solution: {
        title: "Anonymous, Meaningful Interaction",
        content:
          "By removing identity and focusing on conversation, the platform encourages deeper and more genuine communication.",
      },

      features: [
        "Anonymous Voice & Text Chat",
        "Real-time Messaging",
        "Conversation Starters",
        "Privacy-first Design",
      ],

      impact:
        "Encouraged authentic user interaction and demonstrated how design can influence social behavior.",

      reflection:
        "This project deepened my understanding of designing for emotional safety and user psychology.",
    },
  },

  // 📚 BOOKNEST
  {
    slug: "booknest",
    template: "default",

    title: "BookNest",
    subtitle: "E-commerce Bookstore",
    description:
      "A responsive e-commerce platform designed to simplify book discovery and purchasing through intuitive navigation and clean UI.",

    meta: {
      role: "UI/UX Design, Frontend Development",
      type: "E-commerce Website",
      tech: ["HTML", "CSS", "JavaScript"],
    },

    sections: {
      overview: {
        title: "Simplifying Online Book Shopping",
        content:
          "BookNest focuses on reducing friction in browsing and purchasing books by combining clear navigation, structured categories, and a streamlined checkout flow.",
      },

      problem: [
        {
          title: "Overwhelming Catalogs",
          desc: "Users struggle to navigate large collections.",
        },
        {
          title: "Poor Discoverability",
          desc: "Lack of structure makes finding books difficult.",
        },
        {
          title: "Checkout Friction",
          desc: "Complex flows reduce conversion rates.",
        },
      ],

      solution: {
        title: "Clean & Structured Shopping Experience",
        content:
          "The platform introduces categorized browsing, strong visual hierarchy, and a simplified purchase flow.",
      },

      features: [
        "Categorized Book Listings",
        "Search Functionality",
        "Product Detail Pages",
        "Smooth Checkout Flow",
      ],

      impact:
        "Improved usability and created a frictionless browsing-to-purchase experience.",

      reflection:
        "I learned how simplifying interfaces can significantly improve user decision-making.",
    },
  },

  // 🏢 EXIS IMS
  {
    slug: "exis-ims",
    template: "default",

    title: "EXIS IMS",
    subtitle: "Inventory Management System",
    description:
      "A web-based inventory system designed to centralize stock management and improve usability for operational workflows.",

    meta: {
      role: "UI/UX Design, Full-Stack Development",
      type: "Web System",
      tech: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    },

    sections: {
      overview: {
        title: "From Technical System to Usable Product",
        content:
          "The EXIS IMS transforms a functional backend system into a user-friendly interface, improving clarity, efficiency, and accessibility.",
      },

      problem: [
        {
          title: "Manual Processes",
          desc: "Inventory tracking was slow and error-prone.",
        },
        {
          title: "Fragmented Data",
          desc: "Information was scattered across different sources.",
        },
      ],

      solution: {
        title: "Centralized Inventory System",
        content:
          "A unified system with improved UI and structured workflows to streamline inventory operations.",
      },

      features: [
        "CRUD Operations",
        "Centralized Database",
        "Real-time Tracking",
        "Improved UI Flow",
      ],

      impact:
        "Reduced errors, improved efficiency, and created a scalable system foundation.",

      reflection:
        "This project reinforced the importance of balancing backend logic with user experience.",
    },
  },

  // 🗺️ PALO (SPECIAL TEMPLATE)
  {
    slug: "palo-promotion",
    template: "palo",

    title: "Palo Promotion System",
    subtitle: "Interactive Map Experience",
    description:
      "An immersive map-based storytelling platform that transforms government project data into an engaging, user-guided experience.",

    meta: {
      role: "UX/UI Design, Frontend Development",
      type: "Interactive Web Experience",
      tech: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    },

    sections: {
      overview: {
        title: "From Static Data to Interactive Exploration",
        content:
          "The Palo Promotion System reimagines government project data as an immersive, map-based storytelling experience with multimedia interaction.",
      },

      problem: [
        {
          title: "Static Information",
          desc: "Projects were locked in text-heavy reports.",
        },
        {
          title: "Low Engagement",
          desc: "Users had no intuitive way to explore data.",
        },
        {
          title: "No Spatial Context",
          desc: "Information lacked geographic relevance.",
        },
      ],

      solution: {
        title: "Interactive Storytelling Platform",
        content:
          "An interactive map with geolocation, multimedia storytelling, and guided exploration transforms passive data into engaging experiences.",
      },

      features: [
        "Interactive Map Markers",
        "Geolocation Auto-Start",
        "Audio Narration",
        "Dynamic Image Slideshows",
      ],

      impact:
        "Increased engagement and demonstrated how public data can be transformed into meaningful digital experiences.",

      reflection:
        "This project strengthened my ability to design immersive, multi-sensory interfaces.",
    },
  },
];
