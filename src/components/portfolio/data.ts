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
import movement from "@/assets/projects/movement.jpg";
import repetitions from "@/assets/projects/repetitions.jpg";
import split from "@/assets/projects/split.jpg";
import sync from "@/assets/projects/sync.jpg";
import minimal from "@/assets/projects/minimal.jpg";
import flexible from "@/assets/projects/flexible.jpg";
import starter from "@/assets/projects/starter.jpg";
import privacy from "@/assets/projects/privacy.jpg";
import entry from "@/assets/projects/entry.jpg";
import interactive from "@/assets/projects/interactive.jpg";
import information from "@/assets/projects/information.jpg";
import storytelling from "@/assets/projects/storytelling.jpg";
import shopping from "@/assets/projects/shopping.jpg";
import structure from "@/assets/projects/structure.jpg";
import purchase from "@/assets/projects/purchase.jpg";
import responsive from "@/assets/projects/responsive.jpg";
import centered from "@/assets/projects/centered.jpg";
import architecture from "@/assets/projects/architecture.jpg";
import interaction from "@/assets/projects/interaction.jpg";
import technical from "@/assets/projects/technical.jpg";
import task from "@/assets/projects/interface.jpg";
import creation from "@/assets/projects/creation.jpg";
import management from "@/assets/projects/management.jpg";
import tracking from "@/assets/projects/tracking.jpg";

import {
  Accessibility,
  Activity,
  ArrowBigDownDash,
  AudioLines,
  BarChart3,
  BellRing,
  Boxes,
  BrainCircuit,
  Briefcase,
  ChartNoAxesCombined,
  ChartScatter,
  CheckCircle2,
  ClockAlert,
  CloudOff,
  Code2,
  Compass,
  Cpu,
  CreditCard,
  Database,
  EyeOff,
  Figma,
  FileChartLine,
  FileText,
  Filter,
  Fingerprint,
  Frown,
  Home,
  Images,
  Layers,
  LayoutGrid,
  LayoutPanelLeft,
  Lightbulb,
  Locate,
  LocateFixed,
  LockKeyhole,
  LockOpen,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  MessageSquare,
  Mic,
  Monitor,
  MonitorPlay,
  MonitorSmartphone,
  Package,
  Palette,
  Pencil,
  PencilLine,
  PieChart,
  PlayCircle,
  Plus,
  Repeat,
  ScanFace,
  ScanLine,
  Search,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Trash2,
  TriangleAlert,
  Trophy,
  Users,
  Video,
  Wallet,
  WalletMinimal,
  Zap,
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

  userValue?: string[];
  technicalOutcome?: string[];

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

export type ReflectionSection = {
  title: string;
  subtitle?: string;

  learnings?: string[];
  improvements?: string[];

  quote?: string;
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
    reflection: CaseStudySection | ReflectionSection;
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
    link: "https://www.figma.com/proto/1XNBoiSeJRtcMwAxZazapB/Filitastica?node-id=20-34&p=f&viewport=181%2C50%2C0.14&t=8JzCLaYE7wQpggMx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=16%3A19&page-id=1%3A2",
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
        body: "A concept designed to transform solo workouts into interactive social experiences using computer vision and real-time communication.",
        features: [
          {
            icon: ScanLine,
            title: "Automatic Repetition Detection",
            description: "Computer vision tracks user movements and accurately counts exercise repetitions in real time.",
          },
          {
            icon: Video,
            title: "Live Workout Competition",
            description: "Users can join live video fitness sessions and compete with friends during workouts.",
          },
          {
            icon: Users,
            title: "Social Accountability",
            description:
              "Real-time interaction and shared progress create motivation and encourage consistency.",
          },
        ],
      },
      design: {
        title: "Designing for Movement & Motivation",
        intro: "Key interaction and experience decisions that shaped the social fitness platform.",
        items: [
          {
            number: "01",
            title: "Designing Around Movement",
            description: "Interfaces were designed to stay glanceable during workouts using large typography, minimal text, and strong visual hierarchy to reduce distraction.",
            image: movement,
          },
          {
            number: "02",
            title: "AI-Powered Rep Detection",
            description: "The system concept uses computer vision to automatically detect and count exercise repetitions across multiple workout types in real time.",
            image: repetitions,
          },
          {
            number: "03",
            title: "Split-Screen Social Workouts",
            description: "A balanced split-screen layout allows users to equally view themselves and workout partners during live competitive sessions.",
            image: split,
          },
          {
            number: "04",
            title: "Real-Time Competitive Sync",
            description: "Rep counting and workout progress synchronize instantly across devices to ensure fairness during live fitness challenges",
            image: sync,
          },
        ],
        footer: {
          title: "Workout Feedback & Engagement",
          description: "Instant visual feedback and gamified systems help maintain motivation without interrupting workout flow.",
          features: [
            { icon: Trophy, title: "Competitive Challenges", description: "Leaderboards, achievements, and rewards encourage long-term engagement." },
            { icon: CheckCircle2, title: "Rep Validation", description: "Color-coded indicators confirm valid or invalid repetitions in real time." },
            { icon: MonitorSmartphone, title: "Minimal Workout UI", description: "Large counters and simplified layouts keep focus on exercise performance." },
          ],
        },
      },
      impact: {
        title: "Creating a More Engaging Fitness Experience",
        body: "The concept explored how AI-powered tracking and social interaction could improve workout accuracy, motivation, and overall engagement.",

        userValue: [
        "Reduced the need for manual rep counting during workouts",
        "Encouraged workout consistency through competitive social experiences",
        "Provided instant feedback to help users maintain proper exercise form",
      ],

        technicalOutcome: [
        "Designed a scalable real-time workout tracking experience",
        "Created synchronized multi-user workout interactions",
        "Developed a mobile-first interface optimized for active movement",
      ],

        features: [
        { icon: ScanLine, title: "Pose Detection" },
        { icon: Repeat, title: "Automatic Rep Counting" },
        { icon: Video, title: "Live Video Workouts" },
        { icon: Activity, title: "Form Analysis" },
        { icon: Trophy, title: "Competitive Challenges" },
        { icon: BarChart3, title: "Performance Leaderboards" },
      ],
    },
      reflection: {
        title: "What I Learned & Future Opportunities",
        subtitle: "Designing the experience revealed how fitness products must balance technology, usability, and motivation.",

        learnings: [
        "I learned that fitness interfaces should never compete with the workout itself. Clear layouts, large visual elements, and glanceable feedback were more effective than feature-heavy screens.",

        "The project also reinforced how social interaction can transform habit-building. Real-time competition and shared progress created a stronger sense of motivation than isolated tracking alone."
      ],

        improvements: [
        "Personalized AI workout recommendations",
        "Expanded exercise recognition across more workout types",
        "Voice-guided workout assistance",
        "Advanced progress analytics and coaching insights",
      ],

        quote:
        "Fitness technology works best when it supports movement naturally instead of distracting from it."
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
        title: "Designing for Safe & Honest Conversations",
        body: "Instead of treating anonymity as a secondary feature, the platform was designed around creating a space where users feel comfortable expressing themselves authentically.",
        features: [
          {
            icon: ShieldOff,
            title: "Privacy by Default",
            description: "No persistent identities. Conversations begin without social pressure or personal exposure.",
          },
          {
            icon: MessageCircle,
            title: "Meaningful Over Mass",
            description: "Focused on smaller, more intimate interactions instead of overwhelming public chat rooms and endless noise.",
          },
          {
            icon: Lightbulb,
            title: "Conversation Starters",
            description:
              "Built-in prompts and guided topics help users break the ice naturally without relying on shared history or mutual connections.",
          },
        ],
      },
      design: {
        title: "Designing for Anonymous Connection",
        intro: "Key interaction decisions focused on making conversations feel safe, natural, and accessible without relying on identity.",
        items: [
          {
            number: "01",
            title: "Minimal Anonymous Chat Interface",
            description: "Messages appear in a clean, readable stream with subtle visual distinction between participants -just enough to follow the thread, nothing more.",
            image: minimal,
          },
          {
            number: "02",
            title: "Flexible Voice & Text Communication",
            description: "Users can seamlessly switch between text and voice messages, giving them control over how they communicate in different situations.",
            image: flexible,
          },
          {
            number: "03",
            title: "Guided Conversation Starters",
            description: "Curated prompts and topic suggestions help users overcome awkward silence and encourage more meaningful discussions.",
            image: starter,
          },
          {
            number: "04",
            title: "Privacy & Accessibility Controls",
            description: "Clear session settings, accessibility options, and keyboard-friendly navigation ensure users feel both safe and included.",
            image: privacy,
          },
        ],
        footer: {
          title: "Trust Through Simplicity",
          description: "The interface avoids unnecessary complexity so users can focus on authentic interaction instead of managing identity.",
          features: [
            { icon: MessageSquare, title: "Anonymous Messaging", description: "Display names help users recognize conversations without revealing personal information." },
            { icon: Mic, title: "Message Interaction", description: "Messages with seamless switching between text and audio." },
            { icon: Shield, title: "Session Control", description: "Accessibility settings, and privacy controls remain visible and easy to access." },
          ],
        },
      },
      impact: {
        title: "Building Safer Digital Conversations",
        body: "The project explored how privacy-first interaction design could encourage more authentic communication and reduce the pressure commonly found in social platforms.",

        userValue: [
        "Created a safer environment for open and honest conversations",
        "Reduced social pressure by minimizing identity-driven interaction",
        "Encouraged meaningful discussions through smaller and more intentional conversations",
      ],

        technicalOutcome: [
        "Designed a responsive real-time messaging experience across web and mobile",
        "Integrated voice and text communication into a unified interaction flow",
        "Built a scalable frontend architecture supporting future social and moderation features",
      ],

        features: [
        { icon: MessageSquare, title: "Real-Time Messaging" },
        { icon: Mic, title: "Voice Communication" },
        { icon: Shield, title: "Privacy Controls" },
        { icon: Sparkles, title: "Conversation Starters" },
        { icon: Users, title: "One-on-One Conversations" },
        { icon: Accessibility, title: "Accessible Interface" },
      ],
    },
      reflection: {
        title: "What I Learned & Future Possibilities",
        subtitle: "Designing NoFace revealed how removing barriers can create more honest and meaningful interaction.",

        learnings: [
        "NoFace reinforced that strong digital experiences are not always created by adding features. Sometimes the most impactful design decisions come from removing pressure, distraction, and unnecessary identity signals.",

        "I also learned that privacy-first design and accessibility are deeply connected. When identity becomes less important, interface clarity becomes more important. Every interaction must communicate purpose clearly without relying on familiarity or social status."
      ],

        improvements: [
        "Community-curated conversation starter library",
        "Enhanced moderation and safety reporting tools",
        "Customizable accessibility preferences",
      ],

        quote:
        "Anonymity is not the absence of identity — it is the removal of barriers that prevent honest conversation."
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
    link: "https://www.figma.com/proto/dpTbyEtALbJblqsR4Z02kJ/Rental-Locker-System?node-id=19-19&p=f&viewport=691%2C1122%2C0.29&t=67hq4RZVuhCqhDjo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=19%3A9&page-id=11%3A6",
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
            icon: ScanFace,
            title: "Zero Physical Dependency",
            description: "No keys, no cards, no PINs. Authentication is entirely biometric — something you are, not something you carry.",
          },
          {
            icon: Activity,
            title: "Real-Time System Awareness",
            description: "Locker states are always visible and up-to-date.",
          },
          {
            icon: Cpu,
            title: "Hardware–Software Integration",
            description:
              "User Interface reflects real hardware states — not just screens.",
          },
        ],
      },
      design: {
        title: "Thinking Behind the Interface",
        intro: "Design decisions focused on reducing friction, improving trust, and bridging the gap between digital interactions and physical locker behavior.",
        items: [
          {
            number: "01",
            title: "Replacing Keys or PINs",
            description: "Traditional authentication creates friction through forgotten credentials, shared PINs, and slow verification. This shifts access from “something users remember” to “something users are,” enabling faster and more secure locker access.",
            image: face,
          },
          {
            number: "02",
            title: "Designing around System State",
            description: "Instead of static pages, the interface adapts based on real-time locker states (Available, Occupied, and Active). This allows users to immediately understand availability, reduce unnecessary actions, and make faster decisions.",
            image: dashboard,
          },
          {
            number: "03",
            title: "Hardware-Aware UX",
            description: "The system communicates directly with microcontrollers, modules, and sensors. The interface was designed to reflect real-world hardware behavior through loading states, confirmation prompts, and recovery feedback.",
            image: hardware,
          },
          {
            number: "04",
            title: "Trust Through Transparency",
            description: "The platform involves payments and locker access, every interaction was designed with visible confirmation and clear feedback. This transparency builds confidence and reduces uncertainty in system interactions.",
            image: trust,
          },
        ],
        footer: {
          title: "Feedback & System Status",
          description: "Every interaction includes immediate system feedback to reduce uncertainty and reinforce user trust.",
          features: [
            { icon: WalletMinimal, title: "Payment", description: "Confirmation + Transaction summary" },
            { icon: LockOpen, title: "Locker Unlock", description: "LED indicator + push notification" },
            { icon: TriangleAlert, title: "Errors", description: "Clear actionable alerts" },
          ],
        },
      },
      architecture: {
        title: "Hardware Meets Software",
        body: "End-to-end experience flow links the hardware layer with the software layer.",
        bullets: [
          "Hardware Layer — Locks, sensors, face camera",
          "Software Layer — Android app, recognition service, admin",
          "Constraints & Trade-offs — low-power mode, latency budget, edge cases",
        ],
      },
      impact: {
        title: "What This System Delivers",
        body: "The system improves locker accessibility, reduces operational friction, and creates a more seamless rental experience through realtime and biometric authentication.",

        userValue: [
        "Removed dependency on physical keys and PIN-based authentication",
        "Reduced interaction time through fast biometric access",
        "Provided realtime visibility into locker availability and status",
        "Improved user confidence with clear transaction and rental tracking",
      ],

        technicalOutcome: [
        "Reduced operational overhead by eliminating manual key management",
        "Integrated digital payments to minimize cash handling processes",
        "Improved system efficiency through realtime locker synchronization",
        "Enabled scalable infrastructure for deployment across multiple locations",
      ],

        features: [
        { icon: ScanFace, title: "Face Authentication" },
        { icon: LockKeyhole, title: "Smart Locker Access" },
        { icon: CreditCard, title: "Digital Payments" },
        { icon: BellRing, title: "Realtime Notifications" },
        { icon: Activity, title: "Live Locker Status" },
        { icon: ShieldCheck, title: "Secure Access Control" },
      ],
    },
      reflection: {
        title: "Beyond Interface Design",
        subtitle: "Designing the system required balancing usability, security, and real-world hardware behavior within a connected physical environment.",

        learnings: [
        "Working with physical hardware changed how I approached UX design. Every interaction had a real-world consequence — from relay activation to locker unlocking — which made feedback, timing, and system clarity far more critical.",

        "The project reinforced that good product design extends beyond interfaces. Designing for hardware constraints, realtime system states, and biometric authentication required thinking about the entire user experience as a connected ecosystem."
      ],

        improvements: [
        "Advanced analytics for locker usage patterns",
        "Offline fallback support during network interruptions",
        "Expanded biometric authentication options",
      ],

        quote:
        "Thoughtful design is not just about creating screens — it is about making complex systems feel seamless, reliable, and human."
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
        title: "Transforming Reports into Interactive Exploration",
        body: "Instead of presenting project data as static documents, the platform was designed as an immersive, map-based storytelling experience that makes information easier to explore, understand, and engage with.",
        features: [
          {
            icon: MapPinned,
            title: "Spatial Project Awareness",
            description: "Interactive mapping gives users real-world geographic context for every science and technology intervention.",
          },
          {
            icon: PlayCircle,
            title: "Guided Multimedia Storytelling",
            description: "Images, audio narration, and progressive content reveal create a more engaging way to explore project information.",
          },
          {
            icon: Database,
            title: "Centralized Project Visibility",
            description:
              "Project locations, workplans, and monitoring details are organized within a single accessible platform.",
          },
        ],
      },
      design: {
        title: "Thinking Behind the Experience",
        intro: "Key interaction and interface decisions focused on reducing cognitive load while turning static project data into a guided exploration journey.",
        items: [
          {
            number: "01",
            title: "Designing a Cinematic Entry Experience",
            description: "A fullscreen start screen with system-style messaging creates anticipation and gives users a clear sense of purpose before entering the platform.",
            image: entry,
          },
          {
            number: "02",
            title: "Using Maps as Context, Not Decoration",
            description: "The interactive Leaflet.js map grounds project information in real geographic locations, helping users connect data with physical communities.",
            image: interactive,
          },
          {
            number: "03",
            title: "Progressive Disclosure for Complex Information",
            description: "Instead of overwhelming users with data, the experience gradually reveals information through markers, panels, slideshows, and structured details.",
            image: information,
          },
          {
            number: "04",
            title: "Multi-Sensory Storytelling",
            description: "Combining visuals, categorized content, animations, and audio narration creates a richer and more memorable exploration experience.",
            image: storytelling,
          },
        ],
        footer: {
          title: "Interaction & System Behaviors",
          description: "The experience was designed to guide users naturally without relying on overwhelming instructions.",
          features: [
            { icon: LocateFixed, title: "Geolocation Trigger", description: "Auto-starts experiences based on user proximity." },
            { icon: MapPin, title: "Interactive Markers", description: "Clickable project locations reveal detailed content." },
            { icon: AudioLines, title: "Audio Narration", description: "Per-location voice guidance for deeper engagement." },
          ],
        },
      },
      impact: {
        title: "What the Platform Achieved",
        body: "The project demonstrates how public-sector information can become more accessible, engaging, and understandable through interactive storytelling and spatial interfaces.",

        userValue: [
        "Made project information easier to explore and understand through interactive mapping",
        "Improved engagement using combined visual and audio storytelling",
        "Provided real-world geographic context that static reports cannot offer",
      ],

        technicalOutcome: [
        "Interactive map-based system built using HTML, CSS, JavaScript, and Leaflet.js",
        "Flexible modular data structure supporting multiple content types",
        "Scalable frontend architecture designed for future real-time integrations",
      ],

        features: [
        { icon: MapPinned, title: "Interactive Mapping" },
        { icon: AudioLines, title: "Audio Narration" },
        { icon: Images, title: "Image Slideshows" },
        { icon: Locate, title: "Geolocation Trigger" },
        { icon: LayoutPanelLeft, title: "Split-Panel Layout" },
        { icon: MonitorPlay, title: "Cinematic Entry Screen" },
      ],
    },
      reflection: {
        title: "What I learned",
        subtitle: "Building the platform reinforced how interaction design can transform complex information into meaningful experiences.",

        learnings: [
        "This project taught me that government and operational data does not need to feel static or overwhelming. Through thoughtful interaction design and storytelling, even technical information can become engaging and approachable.",

        "I also learned the importance of pacing and progressive disclosure. By revealing information gradually instead of all at once, the experience felt more guided, focused, and easier to understand.",
      ],

        improvements: [
        "Search and filtering by project type or location",
        "Mobile-first optimization for field usage",
        "Offline mode for low-connectivity areas",
        "Analytics dashboard for engagement tracking",
        "Real-time project data synchronization",
      ],

        quote:
        "Good interaction design does not just present information — it guides people through understanding it."
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
        title: "Designing for Discovery and Speed",
        body: "The platform was designed to support two core shopping behaviors — exploration and intentional purchasing — while keeping the experience clean, intuitive, and responsive.",
        features: [
          {
            icon: Compass,
            title: "Exploration-First Browsing",
            description: "Clear categories, curated layouts, and visual browsing help users discover books even when they do not know exactly what they want.",
          },
          {
            icon: Search,
            title: "Fast Intent-Based Search",
            description: "Prominent search and streamlined navigation help users quickly find books, authors, and product details with minimal friction.",
          },
          {
            icon: ShoppingCart,
            title: "Frictionless Purchasing",
            description:
              "Simplified cart and checkout flows reduce unnecessary steps and make purchasing feel fast, familiar, and reliable.",
          },
        ],
      },
      design: {
        title: "Thinking Behind the Interface",
        intro: "Key design decisions focused on simplifying navigation, improving discoverability, and making online book shopping feel approachable and intuitive.",
        items: [
          {
            number: "01",
            title: "Designing for Different Shopping Behaviors",
            description: "The interface supports both exploratory browsing and direct purchasing, allowing users to either discover visually or search with intent.",
            image: shopping,
          },
          {
            number: "02",
            title: "Clear Navigation & Information Hierarchy",
            description: "The platform was structured around core user actions such as browsing, searching, viewing details, and purchasing to reduce confusion and improve flow.",
            image: structure,
          },
          {
            number: "03",
            title: "Simplifying Purchase Decisions",
            description: "Product pages prioritize essential information like ratings, pricing, stock availability, and purchase actions to reduce hesitation during checkout.",
            image: purchase,
          },
          {
            number: "04",
            title: "Responsive & Consistent Experience",
            description: "Reusable layouts, responsive grids, and consistent interaction patterns create a seamless experience across desktop, tablet, and mobile devices.",
            image: responsive,
          },
        ],
        footer: {
          title: "Core Experience Features",
          description: "Every interaction was designed to feel lightweight, responsive, and easy to understand.",
          features: [
            { icon: Search, title: "Search Functionality", description: "Fast access to books, authors, and categories." },
            { icon: ShoppingCart, title: "Cart & Checkout", description: "Streamlined purchasing with minimal friction." },
            { icon: LayoutGrid, title: "Responsive Layout", description: "Optimized browsing across all screen sizes." },
          ],
        },
      },
      impact: {
        title: "What the Platform Delivered",
        body: "The final product demonstrates how thoughtful UX and clean interface structure can simplify online shopping and improve product discoverability.",

        userValue: [
        "Made browsing large book catalogs feel more organized and approachable",
        "Reduced friction between discovery, product viewing, and purchasing",
        "Supported both exploratory browsing and direct search behaviors",
      ],

        technicalOutcome: [
        "Responsive e-commerce interface built using HTML, CSS, and JavaScript",
        "Reusable layout patterns for scalable product and category pages",
        "Semantic and mobile-first frontend structure for accessibility and responsiveness",
      ],

        features: [
        { icon: LayoutGrid, title: "Categorized Listings" },
        { icon: Search, title: "Book Search" },
        { icon: ShoppingCart, title: "Add to Cart" },
        { icon: CreditCard, title: "Checkout Flow" },
        { icon: Smartphone, title: "Responsive Design" },
        { icon: Star, title: "Ratings & Reviews" },
      ],
    },
      reflection: {
        title: "What I learned",
        subtitle: "Designing the bookstore experience reinforced how simplicity and structure improve usability in e-commerce products.",

        learnings: [
        "This project taught me how information architecture directly affects user confidence. Clear hierarchy, navigation, and layout patterns made large product catalogs feel easier to explore.",

        "I also learned that good e-commerce experiences balance aesthetics with efficiency. Users want visually engaging interfaces, but they also expect speed, clarity, and minimal friction during purchasing.",
      ],

        improvements: [
         "Personalized book recommendations",
         "Advanced filtering and sorting options",
         "Usability testing for validating shopping flows",
      ],

        quote:
        "A good e-commerce experience doesn't just help users buy faster. It helps them decide with confidence."
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
        title: "A Centralized Workflow, Not Just a Database",
        body: "The system was designed as a unified operational workflow focused on clarity, speed, and reliability — instead of treating inventory management as a collection of spreadsheets and forms.",
        features: [
          {
            icon: Activity,
            title: "Real-Time Inventory Tracking",
            description: "Giving users immediate visibility into product availability and inventory movement.",
          },
          {
            icon: Database,
            title: "Centralized Inventory Management",
            description: "All inventory records, transactions, and stock information are managed within a single accessible platform.",
          },
          {
            icon: BarChart3,
            title: "Operational Visibility",
            description:
              "Reports, analytics, and alerts help users monitor inventory activity and make faster operational decisions.",
          },
        ],
      },
      design: {
        title: "Designing for Operational Clarity",
        intro: "The system was designed to simplify inventory workflows, reduce friction, and make technical operations feel more approachable for everyday users.",
        items: [
          {
            number: "01",
            title: "User-Centered Thinking",
            description: "The interface was designed to remain accessible for users with varying technical backgrounds by simplifying navigation, reducing cognitive load, and prioritizing clarity.",
            image: centered,
          },
          {
            number: "02",
            title: "Structured Information Architecture",
            description: "Features were organized into clear sections with logical navigation flows so users could easily understand where they are and what actions are available.",
            image: architecture,
          },
          {
            number: "03",
            title: "Consistent Interaction Design",
            description: "Actions, controls, and feedback were designed to feel predictable and responsive, helping reduce user error while improving usability.",
            image: interaction,
          },
          {
            number: "04",
            title: "Balancing Technical Systems with UX",
            description: "The project balanced backend functionality such as database management and deployment with usability-focused design decisions that kept workflows intuitive.",
            image: technical,
          },
        ],
        footer: {
          title: "System Foundations",
          description: "The platform combines operational functionality with structured workflows and reliable system architecture.",
          features: [
            { icon: Server, title: "Local Hosting", description: "Configured using XAMPP, Apache, and MySQL" },
            { icon: Database, title: "Database Integration", description: "Connected PHP frontend with MySQL backend" },
            { icon: Users, title: "Role-Based Access", description: "Different permissions for admins and staff" },
          ],
        },
      },
      impact: {
        title: "What the System Achieved",
        body: "The project improved operational efficiency by simplifying inventory workflows, centralizing data management, and making technical systems easier to use.",

        userValue: [
        "Reduced manual tracking errors through centralized inventory records",
        "Improved usability with clearer workflows and simplified navigation",
        "Faster onboarding for users due to intuitive interface structure",
      ],

        technicalOutcome: [
        "Fully functional inventory management system with CRUD operations",
        "Structured and scalable PHP/MySQL architecture for future expansion",
        "Reliable local deployment using XAMPP and database integration",
      ],

        features: [
        { icon: Package, title: "Inventory Tracking" },
        { icon: Pencil, title: "CRUD Operations" },
        { icon: Database, title: "Database Integration" },
        { icon: Users, title: "User Roles" },
        { icon: BarChart3, title: "Reports & Analytics" },
        { icon: Monitor, title: "Local Hosting" },
      ],
    },
      reflection: {
        title: "What I learned and where it could go",
        subtitle: "Designing the system reinforced how usability can improve even highly technical operational tools.",

        learnings: [
        "This project reinforced the importance of simplifying technical systems for non-technical users. Clear structure and predictable workflows significantly improved usability.",

        "I also learned that operational software succeeds not only through functionality, but through trust. Users need systems that feel reliable, understandable, and easy to navigate.",
      ],

        improvements: [
        "Barcode scanner integration for faster inventory updates",
        "Real-time cloud synchronization across devices",
        "Mobile-responsive interface for on-site inventory checks",
        "Automated low-stock notification system",
      ],

        quote:
        "Good operational software is not just about managing data. It is about making complex workflows feel simple and reliable."
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
    link: "https://www.figma.com/proto/Od9NUuJokk0CffHxM1mjGn/Productivity-App?page-id=0%3A1&node-id=93-1730&p=f&viewport=76%2C625%2C0.07&t=mmcdmJwaLWg3Gpb5-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=93%3A1730",
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
        title: "A Focused Productivity Companion",
        body: "Instead of building another feature-heavy productivity platform, BusyBee was designed as a lightweight and reliable task companion focused on speed, clarity, and everyday usability.",
        features: [
          {
            icon: Sparkles,
            title: "Simplicity First",
            description: "Every feature must earn its place. If it does not directly help users create, edit, or complete a task, it does not belong in BusyBee. This constraint drives clarity.",
          },
          {
            icon: Zap,
            title: "Instant Task Capture",
            description: "The barrier to adding a task must be as low as possible. A single tap to create, minimal typing, and smart defaults ensure users actually use the app. ",
          },
          {
            icon: ChartNoAxesCombined,
            title: "Visual Progress Awareness",
            description:
              "Clear progress indicators help users quickly understand completed and pending tasks.",
          },
        ],
      },
      design: {
        title: "How the Experience Was Crafted",
        intro: "Every interaction was designed to reduce friction, maintain clarity, and make task management feel lightweight instead of overwhelming.",
        items: [
          {
            number: "01",
            title: "Clean Task List Interface",
            description: "The main interface prioritizes clarity through spacing, hierarchy, and simple visual organization so users can focus on tasks without distraction.",
            image: task,
          },
          {
            number: "02",
            title: "Frictionless Task Creation",
            description: "Adding a new tasks is a single-tap action, designed to be instant and lightweight. The goal is to get the thought captured before it is forgotten.",
            image: creation,
          },
          {
            number: "03",
            title: "Task Editing & Management",
            description: "Editing, completing, and deleting tasks follows a consistent interaction pattern that keeps users oriented while maintaining fast workflows.",
            image: management,
          },
          {
            number: "04",
            title: "Progress Tracking",
            description: "Visual summaries and completion indicators provide motivation by helping users instantly understand progress and remaining work.",
            image: tracking,
          },
        ],
        footer: {
          title: "Interaction & Feedback System",
          description: "Subtle feedback and lightweight interactions help users feel in control while keeping the experience responsive and predictable.",
          features: [
            { icon: Plus, title: "Quick Add", description: "Single-tap task creation flow" },
            { icon: CheckCircle2, title: "Completion Feedback", description: "Visual confirmation for finished tasks" },
            { icon: Pencil, title: "Inline Editing", description: "Edit tasks without losing context" },
          ],
        },
      },
      impact: {
        title: "What the App Achieved",
        body: "Measured improvements in usability, workflow efficiency, and system reliability.",

        userValue: [
        "Reduced mental load by providing a reliable external task memory",
        "Encouraged consistent productivity through simple task completion",
        "Lowered barrier to entry compared to complex productivity suites",
      ],

        technicalOutcome: [
        "Fully functional CRUD system with local data persistence",
        "Smooth, responsive UI built natively for Android",
        "Scalable architecture supporting future feature expansion",
      ],

        features: [
        { icon: Plus, title: "Create Tasks" },
        { icon: Pencil, title: "Edit Tasks" },
        { icon: CheckCircle2, title: "Mark Complete" },
        { icon: Trash2, title: "Delete Tasks" },
        { icon: Filter, title: "Status Filtering" },
        { icon: PieChart, title: "Progress Summary" },
      ],
    },
      reflection: {
        title: "What I learned and where it could go",
        subtitle: "Building the product revealed how simplicity improves usability.",

        learnings: [
        "Building BusyBee reinforced the power of constraint-based design. By limiting the feature set to what truly matters, the app became more usable, more focused, and easier to build correctly.",

        "I also learned that mobile productivity apps succeed not through complexity, but through speed. The faster a user can capture a task, the more likely they are to build a habit around the app."
      ],

        improvements: [
        "Weekly productivity analytics dashboard",
        "Cloud sync across multiple devices",
        "Dark mode for low-light usage"
      ],

        quote:
        "A simple to-do app does not just help users remember tasks. It helps them feel in control of their day."
      },
    },
  },
];
