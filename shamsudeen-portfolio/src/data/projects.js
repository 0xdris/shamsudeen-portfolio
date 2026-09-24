export const projects = [
  {
    id: 1,
    title: "InvoiceFlow",
    shortDescription: "Invoice generator for freelancers and SMEs with live preview and PDF export.",
    fullDescription: `A professional invoice generator built for freelancers and small businesses. Users fill in their details, their client's details and a list of services, and a live preview of the invoice updates as they type. Finished invoices download as a clean A4 PDF in one click, and every invoice is saved to a local history so it can be reopened and reused later.`,
    problem: "Freelancers and small businesses often build invoices by hand in word processors or pay for heavy accounting tools they don't need. They need a fast, free way to produce a professional-looking invoice and keep track of what they've sent.",
    features: [
      "Live invoice preview that updates as you type",
      "Dynamic line items with automatic subtotal and total calculation",
      "One-click PDF export sized for A4 paper",
      "Invoice history saved in the browser with localStorage",
      "Reload any past invoice back into the editor to reuse it",
      "Multi-currency support, with Nigerian Naira (₦) as the default"
    ],
    challenges: "Turning an on-screen React component into a sharp, correctly-proportioned PDF. The preview is captured with html2canvas at double resolution and scaled into an A4 page with jsPDF. Keeping the history in sync with localStorage without losing data on reload was solved with a custom useInvoiceHistory hook.",
    techStack: ["React", "Tailwind CSS", "jsPDF", "html2canvas", "Local Storage", "Vite"],
    images: [
      "/projects/invoiceflow-2.jpg",
      "/projects/invoiceflow-3.jpg",
      "/projects/invoiceflow-1.jpg"
    ],
    liveDemo: null,
    github: "https://github.com/0xdris/invoiceflow"
  },
  {
    id: 2,
    title: "Ziba Real Estate",
    shortDescription: "Lagos real estate platform with property listings, agent verification and an admin review queue.",
    fullDescription: `A premium real estate platform for buying, leasing and short stays in Lagos. Visitors can search and filter listings and view full property details, while agents register, submit their documents for verification and manage their own listings from a dashboard. Admins approve agent applications from a review queue, and agents can add properties one at a time or in bulk from a CSV file.`,
    problem: "Property seekers in Lagos face unverified agents, outdated listings and cluttered websites. The platform needed to build trust by verifying agents before they can list, while keeping browsing fast and simple for buyers and renters.",
    features: [
      "Property search and filtering by location, type, bedrooms, price, furnishing and more",
      "Role-based sign-up for buyers/renters and agents/sellers",
      "Agent verification flow with drag-and-drop document upload and a pending-approval screen",
      "Admin review queue for approving agent applications",
      "Agent dashboard to add, edit and remove property listings",
      "Bulk property upload from CSV",
      "Real-time listings, inquiries and reports powered by Firebase Firestore"
    ],
    challenges: "Keeping the whole project on Firebase's free plan: instead of using Cloud Storage, profile photos and ID documents are compressed in the browser and stored as base64 text in Firestore. Real-time updates for listings and the admin queue use Firestore snapshot listeners.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "Firebase Auth", "Firestore", "Vercel"],
    images: [
      "/projects/ziba-1.jpg",
      "/projects/ziba-3.jpg",
      "/projects/ziba-2.jpg"
    ],
    liveDemo: null,
    github: "https://github.com/pinkberry527-sketch/ziba-real-estate-website"
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