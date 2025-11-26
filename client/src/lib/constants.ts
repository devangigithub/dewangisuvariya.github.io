import { Github, Linkedin, Mail, Palette, Terminal, Database, Layout, Figma, Smartphone, Code2, Layers, Globe, Lock } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/devangigithub",
    icon: Github,
    label: "@devangigithub"
  },
  {
    name: "GitHub (Alt)",
    url: "https://github.com/dewangisuvariya",
    icon: Github,
    label: "@dewangisuvariya"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/devangi-suvariya-507ba333a",
    icon: Linkedin,
    label: "Devangi Suvariya"
  },
  {
    name: "Email",
    url: "mailto:dewangisuvariya@gmail.com",
    icon: Mail,
    label: "Contact Me"
  }
];

export const PROJECTS = [
  // Professional Work (from CV)
  {
    id: 101,
    title: "HSI App",
    description: "Professional Work. Fully responsive cross-platform mobile app using Flutter/Dart. Features real-time data fetching and dynamic content.",
    tech: ["Flutter", "Firebase", "REST API"],
    stars: 0,
    link: "#", // Private
    isPrivate: true
  },
  {
    id: 102,
    title: "Lunocto App",
    description: "Professional Work. Cross-platform app with secure login, session management, and full CRUD functionalities. Optimized for Android & iOS.",
    tech: ["Flutter", "Dart", "REST API"],
    stars: 0,
    link: "#", // Private
    isPrivate: true
  },
  // Repos from @dewangisuvariya
  {
    id: 201,
    title: "ONEGLOBE",
    description: "Professional Work optimized for tablet, desktop, Android, and iOS. Ensures smooth performance and consistent user experience across all devices and platforms.",
    tech: ["Flutter", "Dart"],
    stars: 0,
    link: "https://github.com/dewangisuvariya/ONEGLOBE"
  },
  // Repos from @devangigithub
  {
    id: 1,
    title: "Chat App",
    description: "A real-time chat app with Firebase message storage and auth. Supports email/Google login. Features responsive UI and instant message syncing across devices.",
    tech: ["Flutter", "Dart", "Firebase", "Local Notifications", "GetX"],
    stars: 0,
    link: "https://github.com/devangigithub/chat_app"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather app fetching live data via REST APIs. Users search cities for accurate forecasts. Delivers smooth performance with dynamic data updates.",
    tech: ["Flutter", "Dart", "REST API", "GetX"],
    stars: 0,
    link: "https://github.com/devangigithub/weather_app"
  },
  {
    id: 3,
    title: "Invoice Generator",
    description: "Smart invoicing app for calculating totals and generating professional PDF invoices. Features easy item addition and detailed billing accuracy.",
    tech: ["Flutter", "Dart", "PDF Generator"],
    stars: 0,
    link: "https://github.com/devangigithub/invoice_generator"
  },
  {
    id: 4,
    title: "Mirror Wall",
    description: "Multi-browser utility app consolidating government portals. Users select browser modes for quick navigation, improving accessibility and productivity.",
    tech: ["Flutter", "Dart", "Provider", "Connectivity Plus", "Shared Preferences"],
    stars: 0,
    link: "https://github.com/devangigithub/mirror_wall"
  },
  {
    id: 5,
    title: "Mediaplayer",
    description: "Simple yet powerful media player for audio and video playback. Offers smooth controls and responsive UI for a seamless media experience.",
    tech: ["Flutter", "Dart"],
    stars: 0,
    link: "https://github.com/devangigithub/mediaplayer"
  },
  {
    id: 6,
    title: "Contact Diary",
    description: "Cross-platform contact manager with iOS/Android themes. Features auth, CRUD operations, and secure data handling with a clean interface.",
    tech: ["Flutter", "Dart", "Provider", "Local Auth"],
    stars: 0,
    link: "https://github.com/devangigithub/contact_diary"
  },
  {
    id: 7,
    title: "Festival App",
    description: "Festive card-making app for personalized greetings. Includes custom assets like images, colors, and fonts to design shareable digital cards.",
    tech: ["Flutter", "Dart"],
    stars: 0,
    link: "https://github.com/devangigithub/festival-app"
  },
  {
    id: 8,
    title: "Galaxy Planets",
    description: "Educational app displaying animated galaxy and planet info. Uses smooth animations and engaging visuals to make learning interactive and fun.",
    tech: ["Flutter", "C++"],
    stars: 0,
    link: "https://github.com/devangigithub/Galaxy_Planets"
  },
  {
    id: 9,
    title: "Quote App",
    description: "Customizable quote manager with local storage. Users can edit, delete, and favorite quotes. Features offline access and easy navigation.",
    tech: ["Flutter", "C++", "SQFLite", "GetX"],
    stars: 0,
    link: "https://github.com/devangigithub/Quote_App"
  },
  {
    id: 10,
    title: "Departure Gita",
    description: "Multilingual app presenting Shrimad Bhagavad Gita in Hindi, Gujarati, and English. Instant language switching enables a localized reading experience.",
    tech: ["Flutter", "C++", "Provider", "Shared Preferences"],
    stars: 0,
    link: "https://github.com/devangigithub/departure_gita"
  },
  {
    id: 11,
    title: "Pr 5 Timer",
    description: "Versatile time-management app with stopwatch, digital clock, and custom timers. Designed with a clean interface for accurate productivity tracking.",
    tech: ["Flutter", "C++"],
    stars: 0,
    link: "https://github.com/devangigithub/pr_5_timer"
  }
];

export const SKILLS = [
  { name: "Flutter", icon: Smartphone, level: 95 },
  { name: "Dart", icon: Code2, level: 90 },
  { name: "Firebase", icon: Database, level: 85 },
  { name: "REST API", icon: Globe, level: 85 },
  { name: "UI/UX Design", icon: Layout, level: 80 },
  { name: "Figma", icon: Figma, level: 75 },
  { name: "C++", icon: Terminal, level: 70 },
  { name: "State Mgmt", icon: Layers, level: 85 },
];

export const EXPERIENCE = [
  {
    company: "GaminGuruz",
    role: "Flutter Developer",
    period: "02/2025 – Present",
    description: "Developed and maintained responsive cross-platform mobile applications. Integrated RESTful APIs and collaborated with teams to deliver feature-rich apps."
  }
];

export const EDUCATION = [
  {
    degree: "Flutter Developer",
    institution: "Red & White Multimedia Education",
    grade: "Grade: A"
  },
  {
    degree: "Bachelor of Commerce",
    institution: "M. J. Kundaliya Arts and Commerce Mahila College",
    grade: "71%"
  }
];
