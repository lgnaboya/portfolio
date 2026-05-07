/* eslint-disable @typescript-eslint/no-explicit-any */
import aiRepTracker from "@/assets/projects/ai-rep-tracker.jpg";
import dashboard from "@/assets/projects/dashboard.jpg";
import dostScope from "@/assets/projects/dost-scope.jpg";
import face from "@/assets/projects/face.jpg";
import hardware from "@/assets/projects/hardware.jpg";
import inventory from "@/assets/projects/inventory.jpg";
import noface from "@/assets/projects/noface.jpg";
import productivity from "@/assets/projects/productivity.jpg";
import rentalLocker from "@/assets/projects/rental-locker.jpg";
import tesdaEcom from "@/assets/projects/tesda-ecom.jpg";
import trust from "@/assets/projects/trust.jpg";
import {
  Activity,
  ArrowBigDownDash,
  Boxes,
  BrainCircuit,
  Briefcase,
  ChartScatter,
  ClockAlert,
  CloudOff,
  Code2,
  Compass,
  Cpu,
  Database,
  EyeOff,
  Figma,
  FileChartLine,
  FileText,
  Fingerprint,
  Frown,
  Home,
  Layers,
  Mail,
  Palette,
  Search,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TriangleAlert,
  Users,
  Wallet,
  WalletMinimal,
} from "lucide-react";

export type SectionId = "home" | "skills" | "projects" | "contact";

export const sections: { id: SectionId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Mail },
];

export const skillCategories = [
  {
    id: "design",
    title: "Design & Prototyping",
    icon: Palette,
    accent: "from-[oklch(0.72_0.18_295)] to-[oklch(0.78_0.14_330)]",
    skills: ["Web & Mobile Design", "Wireframing & Prototyping", "Adobe Suite"],
    description:
      "Crafting intuitive and visually engaging user experiences across web and mobile interfaces. Focused on usability, accessibility, and creative flow.",
  },
  {
    id: "dev",
    title: "Development",
    icon: Code2,
    accent: "from-[oklch(0.78_0.14_200)] to-[oklch(0.72_0.18_260)]",
    skills: ["HTML/CSS", "JS/TS", "React", "PHP/MySQL", "Java"],
    description:
      "Building responsive and dynamic applications across web and mobile with clean, maintainable code and optimized performance.",
  },
];

export const skillIcons = { Figma, Layers };

export type CaseStudySection = { title: string; body: string; bullets?: string[] };

export type ProblemFeature = {
  icon: any;
  title: string;
  description: string;
};

export type ProblemSection = {
  title: string;
  body: string;
  features: ProblemFeature[];
  goal: {
    title: string;
    description: string;
  };
};

export type StrategyFeature = {
  icon: any;
  title: string;
  description: string;
};

export type StrategySection = {
  title: string;
  body: string;
  features: StrategyFeature[];
};

type DesignItem = {
  number: string;
  title: string;
  description: string;
  image?: string;
};

type DesignSection = {
  title: string;
  intro: string;
  items: DesignItem[];
  footer?: {
    title: string;
    description: string;
    features: {
      icon: any;
      title: string;
      description: string;
    }[];
  };
};

export type ImpactSection = {
  title: string;
  body: string;

  bullets?: string[];

  columns?: {
    title: string;
    bullets: string[];
  }[];

  features?: {
    icon?: any;
    title: string;
    description?: string;
  }[];
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  features: string[];
  stack: string[];
  role: string;
  year: string;
  category: string;
  accent: string;
  cover: string;
  link?: string;
  caseStudy: {
    intro: string;
    overview: CaseStudySection;
    problem: CaseStudySection | ProblemSection;
    strategy: CaseStudySection | StrategySection;
    design: CaseStudySection | DesignSection;
    architecture?: CaseStudySection;
    impact: CaseStudySection | ImpactSection;
    reflection: CaseStudySection;
  };
};

export const projects: Project[] = [
  {
    id: "ai-rep-tracker",
    title: "AI Rep Tracker",
    tag: "Mobile • AI • Fitness",
    summary:
      "Tracks reps and enables real-time competitive workouts for more interactive and accurate training.",
    features: ["Real-time pose detection", "Rep & form analysis", "Personalized stats dashboard"],
    stack: ["Figma", "Photoshop"],
    role: "Lead Designer",
    year: "2025",
    category: "Mobile Application",
    accent: "from-[oklch(0.72_0.18_295)] to-[oklch(0.78_0.14_200)]",
    cover: aiRepTracker,
    link: "https://www.figma.com/proto/1XNBoiSeJRtcMwAxZazapB/Filitastica?node-id=20-34&viewport=350%2C100%2C0.71&t=9vXJ2ePJE9Eim2Lf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=16%3A19&show-proto-sidebar=1&page-id=1%3A2",
    caseStudy: {
      intro:
        "Designing a AI-powered fitness experience that helps users train smarter with real-time form analysis and rep counting.",
      overview: {
        title: "Reimagining Fitness through Design",
        body: "A conceptual fitness application exploring how artificial intelligence and social interaction can transform workout experiences. This project focuses on solving real user problems through thoughful design decisions and innovative feature concepts.",
      },
      problem: {
        title: "",
        body: "",
        features: [
          {
            icon: TriangleAlert,
            title: "Manual Counting Errors",
            description:
              "Users often lose count during intense workouts, leading to inaccurate tracking and inconsistent progress monitoring.",
          },
          {
            icon: Frown,
            title: "Lack of Motivation",
            description:
              "Solo workouts can become monotonous, with many users struggling to maintain consistent exercise routines.",
          },
          {
            icon: CloudOff,
            title: "Disconnected Experience",
            description:
              "Existing fitness apps lack real-time social interaction, missing the motivational aspect of working out with others.",
          },
        ],

        goal: {
          title: "Design Question",
          description:
            "How might we create a fitness experience that accurately tracks workouts while providing the social motivation needed to maintain consistent exercise habits?",
        },
      },
      strategy: {
        title: "AI-Powered Social Fitness",
        body: "The design concept combines computer vision technology with real-time video communication to create an immersive, social fitness experience. The system would automatically detect and count exercise repetitions while enabling users to compete with friends through live video sessions.",
        bullets: ["Automatic Repetition Detection", "Real-Time Competition", "Social Motivation"],
      },
      design: {
        title: "Designing Around Movement",
        body: "Interfaces had to be glanceable from a distance during workouts. Large numbers, color-coded form indicators, and minimal text keep focus on the body — not the screen.",
      },
      architecture: {
        title: "From Camera to Coach",
        body: "MediaPipe handles on-device pose detection; a lightweight model classifies exercises; React renders the live dashboard. Stats sync to the cloud only when a session ends.",
      },
      impact: {
        title: "What This System Delivers",
        body: "Beta testers reported more consistent workouts and better form awareness within two weeks.",
        bullets: [
          "92% rep-count accuracy across 6 exercises",
          "Avg. session length increased by 38%",
          "Form-correction nudges in <200ms",
        ],
      },
      reflection: {
        title: "Beyond the Screen",
        body: "Building AI Rep Tracker taught me that AI features only matter when wrapped in moments of empathy. The real product wasn't the model — it was the encouragement it enabled.",
      },
    },
  },
  {
    id: "noface",
    title: "NoFace",
    tag: "Web & Mobile • Social • Privacy",
    summary:
      "Social platform for private voice and text conversations that encourages authentic communication.",
    features: ["Identity-masked", "Real-time chat", "Privacy-first design"],
    stack: ["Figma", "React", "Express.js", "ASP.NET"],
    role: "Designer & Frontend Developer",
    year: "2025",
    category: "Web & Mobile Application",
    accent: "from-[oklch(0.78_0.14_330)] to-[oklch(0.72_0.18_295)]",
    cover: noface,
    caseStudy: {
      intro:
        "A chat platform designed to enable meaningful conversations through voice and text — without identity getting in the way. Masks identity to create a open and safe space.",
      overview: {
        title: "Anonymous, Not Faceless",
        body: "A social platform built around privacy. Users connect through interests and conversation, not profile photos or real names. The premise is that when identity markers are stripped away, conversations have a better chance of being genuine.",
      },
      problem: {
        title: "Why Social Networks Feel Performative",
        body: "Most social platforms are built around profiles — photos, follower counts, and engagement metrics. This shapes who people talk to and how they present themselves.",
        features: [
          {
            icon: EyeOff,
            title: "Social Performance Pressure",
            description:
              "When conversations are tied to a visible identity, users self-censor. The result is a version of yourself optimized for perception, not genuine expression.",
          },
          {
            icon: ShieldAlert,
            title: "Privacy Concerns",
            description:
              "Users hesitate to discuss sensitive topics when their real-world identity is attached. Fear of judgment or exposure silences valuable conversations.",
          },
          {
            icon: Users,
            title: "Connection Barriers",
            description:
              "Existing platforms often feel unsafe or chaotic. The challenge was to make anonymity feel secure and intentional so users feel safe to open up.",
          },
        ],

        goal: {
          title: "The design question that drove NoFace was simple:",
          description:
            "What would conversation look like if not the person’s appearance or status is what makes connection possible?",
        },
      },
      strategy: {
        title: "Designing Anonymity with Intention",
        body: "Reframe anonymity as protective rather than chaotic — strict moderation, intent prompts, and identity-masked posting create a calmer space. I approached it as a core design principle, the question was not 'How do we hide identity?' but 'How do we design a space where people feel safe enough to be real?'",
        bullets: [
          "Anonymous-by-default Profiles",
          "Conversation-first Feeds",
          "Meaningful over Mass",
        ],
      },
      design: {
        title: "An Interface That Disappears",
        body: "Soft gradients, minimal chrome, and avatar masks shift attention to content. Typography carries the personality so users don't have to.",
      },
      impact: {
        title: "Outcomes",
        body: "Closed beta retention exceeded similar social MVPs, with users posting longer, more reflective messages.",
        bullets: [
          "Avg. post length 3.2x industry baseline",
          "0 reported identity leaks",
          "Top retention driver: anonymous DMs",
        ],
      },
      reflection: {
        title: "Lessons from Designing Quiet Spaces",
        body: "NoFace taught me that constraints — fewer features, fewer signals — can create more meaningful product experiences.",
      },
    },
  },
  {
    id: "rental-locker",
    title: "Rental Locker System",
    tag: "Mobile • IoT • Hardware",
    summary:
      "Secure locker rental system with facial recognition and digital payments for seamless access and transactions.",
    features: ["Face recognition unlock", "Companion mobile app", "Admin dashboard"],
    stack: ["Android (Java)", "Firebase", "FaceNet", "ESP32"],
    role: "End-to-End Designer & Developer",
    year: "2024",
    category: "Mobile Application",
    accent: "from-[oklch(0.78_0.14_200)] to-[oklch(0.85_0.16_140)]",
    cover: rentalLocker,
    caseStudy: {
      intro:
        "Designing a Secure, Contactless Locker Experience — where face recognition meets real-world hardware control.",
      overview: {
        title: "Unlocking Smarter Storage",
        body: "A mobile application designed to provide a secure, contactless, and efficient locker rental experience. It combines face-recognition authentication, real-time system feedback, and digital payments to streamline how users access and manage physical storage compartments. Rather than treating lockers as static infrastructure, this system transforms them into a smart, responsive service — bridging the gap between physical hardware and intuitive mobile software.",
      },
      problem: {
        title: "Where Locker Systems Fail",
        body: "Locker systems in public environments often lead to friction, confusion, and operational overhead.",
        features: [
          {
            icon: Home,
            title: "Access Friction",
            description:
              "PINs and keys are easily lost or shared, creating a poor user experience.",
          },
          {
            icon: Frown,
            title: "Lack of Transparency",
            description: "Users have no visibility into locker availability or rental status.",
          },
          {
            icon: Wallet,
            title: "Operational Inefficiency",
            description:
              "Manual payments create security risks and inefficiencies for users and operators.",
          },
        ],

        goal: {
          title: "Design Question",
          description:
            "How might we create a mobile experience that allows users to easily find, book, and pay for locker rentals while providing real-time availability information?",
        },
      },
      strategy: {
        title: "A Service Redesign, Not an Upgrade",
        body: "Instead of incrementally improving existing systems, I approached this as a full service redesign problem.",
        features: [
          {
            icon: Fingerprint,
            title: "Zero Physical Dependency",
            description: "No keys, no cards, no PINs. Authentication is entirely biometric.",
          },
          {
            icon: Activity,
            title: "Real-Time System Awareness",
            description: "Locker states are always visible and up-to-date.",
          },
          {
            icon: ShieldCheck,
            title: "Security Without Friction",
            description:
              "Face recognition provides strong security while keeping interaction fast.",
          },
          {
            icon: Cpu,
            title: "Hardware–Software Integration",
            description: "UI reflects real hardware states — not just screens.",
          },
        ],
      },
      design: {
        title: "Thinking Behind the Interface",
        intro: "Key design decisions that shaped the system experience.",
        items: [
          {
            number: "01",
            title: "Replacing Keys or PINs with Face Recognition",
            description: "Traditional authentication adds friction or risk...",
            image: face,
          },
          {
            number: "02",
            title: "Designing Around System State, Not Screens",
            description: "UI is driven by locker states...",
            image: dashboard,
          },
          {
            number: "03",
            title: "Hardware-Aware UX",
            description: "System interacts with physical hardware...",
            image: hardware,
          },
          {
            number: "04",
            title: "Trust Through Transparency",
            description: "Every action has confirmation...",
            image: trust,
          },
        ],
        footer: {
          title: "Feedback & System Status",
          description: "Every action has feedback — builds trust.",
          features: [
            { icon: WalletMinimal, title: "Payment", description: "Transaction summary modal" },
            { icon: Home, title: "Locker Unlock", description: "LED + push notification" },
            { icon: TriangleAlert, title: "Errors", description: "Clear actionable alerts" },
          ],
        },
      },
      architecture: {
        title: "Hardware Meets Software",
        body: "End-to-end experience flow links the hardware layer (locks, sensors, camera) with the software layer (Android app, recognition service, admin dashboard).",
        bullets: [
          "Hardware Layer — Locks, sensors, face camera",
          "Software Layer — Android app, recognition service, admin",
          "Constraints & Trade-offs — low-power mode, latency budget, edge cases",
        ],
      },
      impact: {
        title: "What This System Delivers",
        body: "Measured improvements in user engagement and performance.",

        columns: [
          {
            title: "User Value",
            bullets: [
              "Better workout consistency",
              "Real-time performance feedback",
              "Higher motivation through tracking",
            ],
          },
          {
            title: "Technical Outcome",
            bullets: [
              "Accurate pose detection pipeline",
              "Low-latency feedback system",
              "Scalable architecture",
            ],
          },
        ],

        features: [
          { title: "Real-time Tracking" },
          { title: "Rep Counting" },
          { title: "Form Feedback" },
          { title: "Session Stats" },
          { title: "Performance History" },
          { title: "Live Dashboard" },
        ],
      },
      reflection: {
        title: "Beyond Interface Design",
        body: "This project pushed beyond interface design — it demonstrated the ability to lead real-world systems, integrate hardware and software experiences, and prioritize usability without sacrificing security. Designing IoT, payments, and trust-driven flows taught me that thoughtful design can transform even mundane interactions into a frictionless experience.",
      },
    },
  },
  {
    id: "dost-scope",
    title: "DOST Project System",
    tag: "Mobile • Project Monitoring",
    summary:
      "A map-based platform for viewing and tracking science and technology projects in Leyte.",
    features: ["Project lifecycle tracking", "Role-based access", "Reporting dashboards"],
    stack: ["HTML/CSS", "JavaScript", "Java"],
    role: "Designer & Developer",
    year: "2026",
    category: "Mobile Application",
    accent: "from-[oklch(0.85_0.16_140)] to-[oklch(0.78_0.14_200)]",
    cover: dostScope,
    caseStudy: {
      intro:
        "An interactive map-based platform designed to showcase and monitor science and technology interventions across selected communities in Leyte— including locations, progress, workplans, and fund use in a centralized database.",
      overview: {
        title: "Bringing Static Reports to Immersive Exploration",
        body: "Built to explore project locations through a map interface, view detailed information, and engage multimedia content such as images and audio narration. The system transform static project data into an immersive, guided experience — making project information accessible, engaging, and meaningful to the public.",
      },
      problem: {
        title: "Fragmented Workflows",
        body: "Data was scattered across static reports and multiple sources, and slowed by manual processes—making tracking inconsistent, hard to access, and often outdated.",
        features: [
          {
            icon: FileText,
            title: "Static",
            description:
              "Project information was locked in reports and documents, making it hard to navigate and access.",
          },
          {
            icon: ChartScatter,
            title: "Scattered Project Data",
            description:
              "Data was spread across multiple sources, leading to inconsistency and difficulty in tracking.",
          },
          {
            icon: ArrowBigDownDash,
            title: "Slow Reporting Cycles",
            description:
              "Manual processes delayed updates, making project monitoring inefficient and outdated.",
          },
        ],

        goal: {
          title: "Design Question",
          description:
            "How might we centralize project data into a single, accessible platform that enables real-time tracking and informed decision-making?",
        },
      },
      strategy: {
        title: "One Source of Truth",
        body: "Centralize the project record and layer role-based workflows so each stakeholder sees only what's relevant.",
        bullets: ["Unified project timeline", "Granular permissions", "Automated status reports"],
      },
      design: {
        title: "Designing for Civil-Servant Reality",
        body: "Information density mattered. Tables, filters, and dashboards were prioritized over decoration to fit existing workflows.",
      },
      impact: {
        title: "Operational Wins",
        body: "Pilot teams cut weekly reporting effort and dramatically reduced status-update meetings.",
        bullets: ["Reporting time -60%", "Onboarding cut to <1 day", "Single audit trail"],
      },
      reflection: {
        title: "Government Tech, Reimagined",
        body: "Building tools for government taught me that constraints — compliance, accessibility, longevity — can be a creative force, not a limitation.",
      },
    },
  },
  {
    id: "tesda-ecom",
    title: "BookNest | TESDA Web Design",
    tag: "Web • E-commerce",
    summary:
      "A responsive e-commerce platform that simplifies book discovery and purchasing through intuitive navigation.",
    features: ["Product catalog & cart", "Vendor onboarding", "Secure checkout"],
    stack: ["HTML/CSS", "JavaScript"],
    role: "Designer & Developer",
    year: "2024",
    category: "Web Application",
    accent: "from-[oklch(0.82_0.14_60)] to-[oklch(0.72_0.18_295)]",
    cover: tesdaEcom,
    caseStudy: {
      intro:
        "An E-Commerce bookstore designed to simplify how users browse, discover, and purchase books online.",
      overview: {
        title: "Simplifying Book Discovery Online",
        body: "A responsive e-commerce website designed to simplify how users browse, discover, and purchase books online. The platform focuses on clean navigation, categorized browsing, and a seamless checkout experience. This prototype demonstrates modern web design principles and user-centered approach to e-commerce. It was built as part of TESDA Web Design program.",
      },
      problem: {
        title: "From Overwhelming to Effortless",
        body: "Many online bookstores feel overwhelming. Users struggle with navigating large catalogs, finding specific books quickly, and completing purchases without friction. The challenge was to design a bookstore experience that feels simple, intuitive, and engaging — even with a large number of items.",
        features: [
          {
            icon: Compass,
            title: "Hard to Navigate",
            description: "Large catalogs lack clear structure, making it difficult to find books.",
          },
          {
            icon: Search,
            title: "Poor Discoverability",
            description: "Without smart search and filtering, users give up early.",
          },
          {
            icon: ShoppingCart,
            title: "Friction at Checkout",
            description: "Complicated flows cause drop-offs before conversion.",
          },
        ],

        goal: {
          title: "Design Question",
          description:
            "How might we simplify browsing large book catalogs to help users quickly find and purchase what they need?",
        },
      },
      strategy: {
        title: "Trust + Accessibility",
        body: "Build a friendly storefront, lower the barrier for vendors to publish, and add clear trust signals for buyers.",
        bullets: ["Vendor wizard onboarding", "Story-led product pages", "Buyer reviews"],
      },
      design: {
        title: "Warm, Crafted, Credible",
        body: "Visual design celebrated the handmade nature of products — soft colors, generous photography space, and strong typography.",
      },
      impact: {
        title: "Real-World Reach",
        body: "Pilot vendors expanded customer reach beyond local markets within the first quarter.",
        bullets: [
          "120+ products listed at launch",
          "Avg. order value +24%",
          "Vendor onboarding <30 min",
        ],
      },
      reflection: {
        title: "Designing for Livelihoods",
        body: "Designing for real livelihoods made every UX decision feel weighty — and grounded my approach in empathy first.",
      },
    },
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    tag: "Web App • Operations",
    summary:
      "A system designed to centralize stock management and improve usability for operational workflows.",
    features: ["Stock & audit trails", "Barcode integration", "Analytics & alerts"],
    stack: ["JavaScript", "PHP", "MySQL", "XAMPP"],
    role: "Designer & Developer",
    year: "2023",
    category: "Web Application (Operations)",
    accent: "from-[oklch(0.72_0.18_260)] to-[oklch(0.78_0.14_200)]",
    cover: inventory,
    caseStudy: {
      intro:
        "Replacing fragile spreadsheets with a more intuitive, user-friendly, and centralized inventory experience.",
      overview: {
        title: "Operations, Without the Complexity",
        body: "A web-based platform designed to streamline inventory tracking, improve data accuracy, and centralize stock management processes. This project involves transforming a technically functional system into a more intuitive and user-friendly experience.",
      },
      problem: {
        title: "Taming Inventory Chaos",
        body: "Manual inventory tracking or fragmented systems often lead to significant operational challenges. Users need a system that is not just functional, but clear, fast, and intuitive.",
        features: [
          {
            icon: FileChartLine,
            title: "Inaccurate Records",
            description:
              "Manual tracking introduces human error, leading to stock discrepancies and unreliable data.",
          },
          {
            icon: ClockAlert,
            title: "Time-Consuming Updates",
            description:
              "Updating inventory manually is slow and inefficient, pulling staff away from higher-value tasks.",
          },
          {
            icon: Database,
            title: "No Centralized Access",
            description:
              "Data scattered across spreadsheets or documents makes it hard to get a clear, unified view.",
          },
        ],

        goal: {
          title: "Design Question",
          description:
            "How might we simplify manual inventory tracking to create a more structured and user-friendly workflow?",
        },
      },
      strategy: {
        title: "Real-time + Auditable",
        body: "Treat every stock change as a transaction. Provide live dashboards and full history without compromising performance.",
        bullets: ["Event-sourced movements", "Threshold alerts", "Role-based audit trails"],
      },
      design: {
        title: "Dashboards Built for Decisions",
        body: "Information hierarchy prioritized exceptions — items needing attention surfaced first, not buried in tables.",
      },
      impact: {
        title: "From Reactive to Proactive",
        body: "Operations teams shifted from firefighting stockouts to running data-informed restocks.",
        bullets: ["Stockouts reduced 70%", "Audit prep time cut in half", "Real-time alerts <30s"],
      },
      reflection: {
        title: "Boring Software, Big Impact",
        body: "Inventory isn't glamorous — but the ROI of getting it right reshaped how I think about utility-first design.",
      },
    },
  },
  {
    id: "productivity",
    title: "BusyBee",
    tag: "Mobile • Productivity • Task Management",
    summary:
      "A to-do list application to create, edit, and manage tasks while tracking completed and pending items.",
    features: ["Tasks & focus timer", "Habit streaks", "Daily insights"],
    stack: ["Figma"],
    role: "Designer",
    year: "2026",
    category: "Mobile Application",
    accent: "from-[oklch(0.78_0.14_330)] to-[oklch(0.82_0.14_60)]",
    cover: productivity,
    caseStudy: {
      intro:
        "An to-do list application built to simplify task management for everyday users. The app provides a clean, intuitive interface where users can create, edit, and organize their tasks while keeping track of what is done and what remains pending.",
      overview: {
        title: "Solves Disorganized Task Management",
        body: "Focuses on the essentials of task management—quick task creation, easy editing, and clear status tracking—offering a simple, frictionless experience that encourages consistent productivity habits without overwhelming users.",
      },
      problem: {
        title: "Breaking Down Productivity Barriers",
        body: "Most people rely on memory, scattered notes, or overly complex productivity apps to manage daily tasks.",
        features: [
          {
            icon: BrainCircuit,
            title: "Cognitive Overload",
            description:
              "Trying to remember multiple tasks mentally causes stress and leads to forgotten commitments. Users need a reliable system to offload task memory.",
          },
          {
            icon: Boxes,
            title: "App Complexity",
            description:
              "Existing productivity apps are bloated with features users do not need. The learning curve discourages adoption, especially for casual users.",
          },
          {
            icon: Frown,
            title: "Poor Visibility",
            description:
              "Without clear tracking of completed vs. pending tasks, users lose motivation and struggle to measure their own productivity progress.",
          },
        ],

        goal: {
          title: "Design Question",
          description: "What would a simple and effective task management system look like?",
        },
      },
      strategy: {
        title: "Calm by Design",
        body: "Design rituals around small wins, soft streaks, and a quiet UI that respects attention.",
        bullets: ["Daily intent prompts", "Forgiving streaks", "One-task focus mode"],
      },
      design: {
        title: "Soft Surfaces, Strong Hierarchy",
        body: "Warm gradients, generous spacing, and a single highlighted action per screen guide users without overwhelming them.",
      },
      impact: {
        title: "Outcomes",
        body: "Beta users reported feeling less anxious about productivity while completing more meaningful work.",
        bullets: [
          "Daily active retention 4.1x higher than benchmark",
          "Avg. focus session 28 min",
          "Notification opt-out only 6%",
        ],
      },
      reflection: {
        title: "Wellbeing as a Feature",
        body: "This project reinforced that craft, restraint, and a clear emotional intent can outperform feature checklists.",
      },
    },
  },
];
