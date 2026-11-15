// All the content of the site. Values in [brackets] are placeholders.

module.exports = {
  profile: {
    name: "Harshit",
    status: "Open to software engineering roles",
    label: "Bachelor’s in CS · 2027",
    // The tagline is built as: before + italic1 + middle + italic2 + after
    tagline: {
      before: "Full-stack developer who turns ",
      italic1: "rough ideas",
      middle: " into ",
      italic2: "fast, polished products",
      after: ".",
    },
    bio: "Skilled in data structures & algorithms and full-stack development, and passionate about building scalable, efficient software. Currently finishing a Bachelor’s in Computer Science.",
    role: "Full-stack developer",
    model: "Model HR-FS",
    sheet: "Technical data sheet · rev. 2027",
    availability: {
      badge: "In stock · open to roles",
      note: "Ships 2027 with a Bachelor’s in Computer Science.",
    },
    email: "hr6087410@gmail.com",
    resume: "/resume.pdf",
    socials: [
      { name: "GitHub", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "mysite.com", url: "#" },
    ],
  },

  stats: [
    { label: "Course", value: "Web dev", unit: "completed" },
    { label: "Shipped", value: "2", unit: "full-stack apps" },
    { label: "Hackathons", value: "1", unit: "participated" },
    { label: "Graduating", value: "2027", unit: "Bachelor’s" },
  ],

  facts: [
    { label: "Looking for", value: "Software Engineer · Full-stack roles" },
    { label: "Graduating", value: "2027 · Bachelor’s in Computer Science" },
    { label: "Strongest at", value: "Node.js · Express · MongoDB · DSA" },
    { label: "Languages", value: "C++ · JavaScript · Python (basic)" },
    { label: "Work mode", value: "[Remote / On-site / Hybrid]" },
    { label: "Location", value: "[City]" },
  ],

  experience: [
    {
      title: "Bachelor’s in Computer Science · SLC, Delhi University",
      dates: "2023 — 2027 (expected)",
      badge: "Current",
      current: true,
      points: [
        "Qualification: Bachelor’s degree in Computer Science, graduating 2027.",
        "Core subjects: data structures & algorithms, [DBMS], [operating systems].",
      ],
      tags: [],
    },
    {
      title: "Web Development · Course",
      dates: "2025",
      badge: "Completed",
      current: false,
      points: [
        "Completed full-stack training across frontend and backend development.",
        "Built multiple projects with responsive UI, RESTful APIs and database integration.",
        "Hands-on with Node.js, Express.js, MongoDB, EJS, Cloudinary and Multer.",
      ],
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Multer"],
    },
    {
      title: "Participant · Tutedude Web Development Hackathon",
      link: { text: "Certificate ↗", url: "#" },
      current: false,
      points: [
        "Took part in a competitive web development hackathon.",
        "Worked hands-on across frontend and backend in a collaborative team.",
      ],
      tags: [],
    },
  ],

  projects: [
    {
      name: "Wanderlust",
      kind: "Hotel listing app",
      address: "[wanderlust demo link]",
      image: "/images/wanderlust.jpg",
      alt: "Wanderlust home page showing a grid of stay listings with category filters",
      description:
        "A full-stack hotel listing and search platform with clean server-side rendering and RESTful APIs.",
      features: [
        "Property listings with search & filtering",
        "User authentication",
        "Image uploads with Multer + Cloudinary",
      ],
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
      demo: "#",
      source: "#",
    },
    {
      name: "EquityX",
      kind: "Stock trading platform",
      address: "[equityx demo link]",
      image: "/images/equityx.jpg",
      alt: "EquityX holdings dashboard with a watchlist, a doughnut chart and a bar chart of stock prices",
      description:
        "A platform to buy and sell stocks, with a dashboard to track your portfolio.",
      features: [
        "Buy / sell orders, positions and funds",
        "Holdings with total investment, current value and P&L",
        "Watchlist with holdings charts",
      ],
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      demo: "#",
      source: "#",
    },
  ],

  skills: [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
    { group: "Backend", items: ["Node.js", "Express.js", "EJS"] },
    { group: "Languages", items: ["C++", "JavaScript", "Python (basic)"] },
    { group: "Database", items: ["MySQL", "MongoDB"] },
    { group: "Tools", items: ["Cloudinary", "Multer", "Git", "Chart.js"] },
    { group: "Core", items: ["Data Structures & Algorithms"] },
  ],

  contact: {
    text: "Open to software engineering roles and internships. Typical response time: under 24 hours.",
  },

  footer: {
    left: "© 2026 Harshit · Built with React & Express · Sheet 1 of 1",
  },
};
