export const projects = [
  {
    id: 1,
    title: "Real Estate Website",
    shortDescription: "Modern property listing platform with advanced search and filtering.",
    fullDescription: `A comprehensive real estate platform designed to revolutionize property discovery. This application provides users with an intuitive interface to browse, search, and filter properties based on location, price range, property type, and amenities. The platform features a responsive design that works seamlessly across all devices, from mobile phones to desktop screens.`,
    problem: "Traditional real estate websites often have cluttered interfaces, slow loading times, and poor mobile experiences. Finding the right property requires navigating through multiple pages and dealing with overwhelming amounts of information.",
    features: [
      "Advanced search with multiple filter criteria (location, price, bedrooms, bathrooms)",
      "Interactive property cards with image galleries and key details",
      "Responsive grid layout that adapts to all screen sizes",
      "Smooth animations and transitions for enhanced UX",
      "Property comparison functionality",
      "Contact agent integration with form validation"
    ],
    challenges: "Implementing efficient state management for complex filter combinations while maintaining smooth performance. Optimizing image loading for property galleries without compromising quality.",
    techStack: ["React", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
    ],
    liveDemo: null,
    github: null
  },
  {
    id: 2,
    title: "User Dashboard",
    shortDescription: "Analytics dashboard with charts, stats, and data visualization.",
    fullDescription: `A powerful analytics dashboard that transforms raw data into actionable insights. Built for data-driven decision making, this dashboard provides real-time visualization of key metrics through interactive charts, graphs, and statistical cards. The clean, modern interface ensures that complex data is presented in an easily digestible format.`,
    problem: "Businesses struggle to make sense of large datasets. Existing dashboard solutions are often bloated, slow, and difficult to customize. Users need a lightweight, fast, and visually appealing way to track their metrics.",
    features: [
      "Interactive charts with Chart.js for data visualization",
      "Real-time stat cards with animated counters",
      "Responsive sidebar navigation with collapsible menu",
      "Dark/Light theme toggle",
      "Data export functionality",
      "Customizable widget layout"
    ],
    challenges: "Optimizing chart rendering performance with large datasets. Ensuring consistent data visualization across different screen sizes while maintaining interactivity.",
    techStack: ["React", "Chart.js", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop"
    ],
    liveDemo: null,
    github: null
  },
  {
    id: 3,
    title: "Image Slider Project",
    shortDescription: "Responsive image carousel with autoplay and navigation controls.",
    fullDescription: `A feature-rich image carousel component built from scratch with React. This slider supports autoplay, manual navigation, touch/swipe gestures on mobile, and smooth CSS transitions. It's designed to be easily integrated into any React application as a reusable component with customizable settings.`,
    problem: "Most carousel libraries are heavy, have limited customization options, or don't support modern React patterns. Developers need a lightweight, customizable slider that works reliably across all devices.",
    features: [
      "Autoplay with configurable interval and pause on hover",
      "Touch/swipe support for mobile devices",
      "Keyboard navigation support (arrow keys)",
      "Smooth CSS transitions with multiple animation types",
      "Dot indicators and arrow navigation controls",
      "Responsive design with adaptive image sizing",
      "Infinite loop option"
    ],
    challenges: "Handling edge cases in touch gestures and ensuring smooth transitions without jank. Implementing proper cleanup for autoplay timers to prevent memory leaks.",
    techStack: ["React", "CSS3 Animations", "JavaScript ES6+", "Touch Events"],
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop"
    ],
    liveDemo: null,
    github: null
  }
];

export const skills = {
  frontend: [
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
    { name: "JavaScript (ES6+)", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "Responsive Design", icon: "MdDevices", color: "#14B8A6" },
    { name: "API Integration", icon: "MdApi", color: "#38BDF8" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Express.js", icon: "SiExpress", color: "#F8FAFC" },
    { name: "REST APIs", icon: "MdHttp", color: "#14B8A6" },
    { name: "Authentication", icon: "MdSecurity", color: "#38BDF8" },
  ],
  tools: [
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", color: "#F8FAFC" },
    { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
    { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
    { name: "WebSockets", icon: "MdWifiTethering", color: "#14B8A6" },
    { name: "Async/Await", icon: "MdSync", color: "#38BDF8" },
    { name: "Local Storage", icon: "MdStorage", color: "#94A3B8" },
    { name: "SEO Basics", icon: "MdSearch", color: "#14B8A6" },
    { name: "Accessibility", icon: "MdAccessibility", color: "#38BDF8" },
  ]
};

export const experience = [
  {
    year: "2023",
    title: "Started Learning Web Development",
    description: "Began my journey into web development, learning HTML, CSS, and JavaScript fundamentals. Built my first static websites and understood the core concepts of the web."
  },
  {
    year: "2023-2024",
    title: "Built JavaScript Projects",
    description: "Deepened my JavaScript knowledge by building interactive projects. Learned DOM manipulation, event handling, and ES6+ features. Created games, calculators, and interactive UI components."
  },
  {
    year: "2024",
    title: "Learned React and Built SPAs",
    description: "Mastered React fundamentals including components, state management, hooks, and routing. Built multiple Single Page Applications with modern React patterns and best practices."
  },
  {
    year: "2024-2025",
    title: "Learned Node.js and Express Basics",
    description: "Expanded into backend development with Node.js and Express. Learned to build REST APIs, handle authentication, and connect frontend applications to server-side logic."
  },
  {
    year: "2025-Present",
    title: "Building Full-Stack Projects",
    description: "Currently working on full-stack applications combining React frontend with Node.js backend. Focusing on database integration, deployment, and production-ready applications."
  }
];

export const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Used", value: "20+" },
  { label: "Code Commits", value: "500+" }
];