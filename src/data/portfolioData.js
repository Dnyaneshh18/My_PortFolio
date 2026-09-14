export const portfolioData = {
  personal: {
    name: "Dnyaneshwar Vasant Patil",
    role: "Full Stack Developer & AI Data Science Engineer",
    roles: [
      "Full Stack Developer",
      "AI & Data Science Engineer",
      "Machine Learning & Analytics Builder",
      "Python & C++ Systems Engineer",
      "B.Tech in AI & Data Science"
    ],
    status: "Open to Full-Time Roles & Internships",
    location: "Pune, India",
    email: "dnyaneshwarvasantpatil296@gmail.com",
    phone: "+91 7972650026",
    avatar: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    github: "https://github.com/Dnyaneshh18",
    linkedin: "https://www.linkedin.com/in/dnyaneshwar-patil-35334b344",
    leetcode: "https://leetcode.com/u/Dnyaneshh29/",
    bioParagraphs: [
      "I am passionate about building impactful solutions through Full-Stack Development and Data Science, combining modern web technologies with data-driven insights. I enjoy solving real-world problems by breaking them into practical, scalable solutions and continuously learning new technologies to improve my approach.",
      "With hands-on experience as a Software Development Engineer Intern at Bluestock Fintech, I have engineered production-level web features, integrated high-throughput REST APIs, and fine-tuned application performance in agile team environments.",
      "My technical journey bridges deep computer science fundamentals (270+ LeetCode problems solved, published research at ICRATM-2026) with full-stack engineering across React, Node.js, Python, Scikit-learn, and network packet analysis."
    ],
    quickStats: [
      { value: "8.79", label: "CGPA · B.Tech AI & Data Science", icon: "GraduationCap" },
      { value: "270+", label: "LeetCode Problems Solved", icon: "Code2" },
      { value: "Published", label: "ICRATM-2026 Research Author", icon: "BookOpen" },
      { value: "SDE Intern", label: "Bluestock Fintech Experience", icon: "Briefcase" }
    ]
  },

  skills: [
    {
      category: "Programming & Core",
      icon: "Code",
      gradient: "from-violet-500 to-indigo-600",
      accent: "#8b5cf6",
      items: [
        { name: "C++", level: 90, tag: "DSA & Problem Solving" },
        { name: "Python", level: 94, tag: "AI/ML & Data Science" },
        { name: "JavaScript", level: 90, tag: "Full-Stack Web" },
        { name: "SQL", level: 88, tag: "Database Queries" },
        { name: "Socket Programming", level: 84, tag: "TCP/IP & UDP" }
      ]
    },
    {
      category: "AI, Machine Learning & Data",
      icon: "Cpu",
      gradient: "from-pink-500 to-rose-600",
      accent: "#ec4899",
      items: [
        { name: "Scikit-learn & XGBoost", level: 92, tag: "Predictive Modeling" },
        { name: "Pandas & NumPy", level: 94, tag: "Data Manipulation" },
        { name: "Computer Vision", level: 85, tag: "Image Processing" },
        { name: "Seaborn & Matplotlib", level: 90, tag: "Statistical Viz" },
        { name: "Machine Learning Pipelines", level: 88, tag: "End-to-End" }
      ]
    },
    {
      category: "Web & Backend Architecture",
      icon: "Server",
      gradient: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
      items: [
        { name: "React.js", level: 92, tag: "Modern Frontend" },
        { name: "Node.js & Express.js", level: 90, tag: "Microservices & APIs" },
        { name: "Flask", level: 88, tag: "Python Web APIs" },
        { name: "REST APIs", level: 94, tag: "Design & Integration" },
        { name: "HTML5 & CSS3", level: 95, tag: "Responsive UI/UX" }
      ]
    },
    {
      category: "Databases & Storage",
      icon: "Database",
      gradient: "from-emerald-500 to-teal-600",
      accent: "#10b981",
      items: [
        { name: "PostgreSQL", level: 88, tag: "Relational RDBMS" },
        { name: "MongoDB", level: 90, tag: "NoSQL Collections" },
        { name: "SQL & Relational Design", level: 90, tag: "ACID & Schema" },
        { name: "LocalStorage API", level: 95, tag: "Client State" }
      ]
    },
    {
      category: "Networking & Developer Tools",
      icon: "Layers",
      gradient: "from-amber-500 to-orange-500",
      accent: "#f59e0b",
      items: [
        { name: "Scapy & Packet Sniffing", level: 86, tag: "Traffic Analysis" },
        { name: "Nmap & Network Security", level: 82, tag: "Port Scans & Audits" },
        { name: "Git & GitHub", level: 94, tag: "Version Control" },
        { name: "VS Code & Linux CLI", level: 92, tag: "Development" },
        { name: "Agile & Deployment Workflows", level: 88, tag: "CI/CD" }
      ]
    }
  ],

  projects: [
    {
      id: "codementor-ai",
      title: "CodeMentorAI",
      subtitle: "AI Coding Learning Platform with Guided Feedback",
      year: "2026",
      category: "Full-Stack / AI Education",
      categoryKey: "ai",
      featured: true,
      rating: 5,
      metrics: "Error-Focused AI · Restrict Mode",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      image: "/projects/codementor-ai.jpg",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      accent: "#6366f1",
      icon: "Bot",
      summary: "Full-stack AI coding platform providing error-focused guided hints rather than complete spoon-fed solutions.",
      description: "An innovative coding platform engineered to cultivate genuine developer problem-solving skills. Unlike standard AI assistants that provide whole answers, CodeMentorAI diagnoses errors, provides targeted cognitive hints, tracks performance analytics, and features an exam 'Restrict Mode' that manages tab-switching, copy-paste, and undo.",
      points: [
        "Developed full-stack AI coding platform delivering targeted, error-focused feedback to enhance student mastery.",
        "Built REST API-driven performance analytics engine monitoring learning curves, syntax error frequency, and time-to-solve.",
        "Engineered Normal vs Restrict assessment modes with fine-grained controls preventing copy-paste, undo abuse, and tab switches.",
        "Architected scalable Express and MongoDB schema for user sessions, code submissions, and real-time evaluation logs."
      ],
      engineeringHighlights: [
        { title: "Cognitive Hint Engine", desc: "Designed AI prompt directives that identify exact line errors and guide students step-by-step without giving away answers." },
        { title: "Anti-Cheat Guard", desc: "Integrated browser event listeners and clipboard interception for honest evaluation in Restrict Mode." },
        { title: "Analytics Pipeline", desc: "Aggregated submission telemetry over MongoDB to graph student progress across 30-day cohorts." }
      ],
      github: "https://github.com/Dnyaneshh18",
      liveDemo: null
    },
    {
      id: "network-monitor",
      title: "Real-Time Network Traffic Monitor",
      subtitle: "Live Packet Capture & Anomaly Detection Dashboard",
      year: "2026",
      category: "Systems & Security",
      categoryKey: "systems",
      featured: true,
      rating: 5,
      metrics: "2-Sec Refresh · SYN Flood Alerts",
      tech: ["Python", "Scapy", "Flask", "TCP/IP", "UDP", "Nmap"],
      image: "/projects/network-monitor.jpg",
      gradient: "from-emerald-500 via-cyan-500 to-blue-500",
      accent: "#10b981",
      icon: "ShieldAlert",
      summary: "Raw socket packet monitoring system detecting SYN floods, port scans, and high-rate traffic anomalies in real time.",
      description: "A high-performance network security system utilizing Scapy and raw socket interfaces to capture and inspect live TCP/UDP packets, IP headers, ports, and flags. Includes a sliding-window detection engine that flags suspicious bursts, port scans, and SYN flood attacks, streaming live telemetry to a Flask dashboard refreshing every 2 seconds.",
      points: [
        "Built real-time packet monitoring system with Scapy and raw sockets to capture and parse TCP/UDP traffic and IP headers.",
        "Developed sliding-window anomaly detection for SYN flood attacks, stealth port scans, and anomalous packet bursts.",
        "Designed high-alert severity scoring that triggers notifications based on deviation from baseline traffic rates.",
        "Created a live Flask REST dashboard auto-refreshing network statistics, active connections, and threat levels every 2 seconds."
      ],
      engineeringHighlights: [
        { title: "Raw Socket Sniffing", desc: "Direct network interface packet capture without external proxy bottlenecks." },
        { title: "Sliding-Window Detector", desc: "Calculates live moving-average packet arrival rates to identify volumetric DDoS spikes." },
        { title: "Flask Telemetry Stream", desc: "Optimized non-blocking background workers ensuring zero packet drops during dashboard queries." }
      ],
      github: "https://github.com/Dnyaneshh18",
      liveDemo: null
    },
    {
      id: "agrisense-ai",
      title: "AgriSense AI",
      subtitle: "Intelligent Farming Assistant & Crop Diagnostics",
      year: "2025",
      category: "AI & Data Science",
      categoryKey: "ai",
      featured: true,
      rating: 5,
      metrics: "Computer Vision & ML",
      tech: ["Python", "Scikit-learn", "Machine Learning", "Computer Vision", "Pandas", "NumPy"],
      image: "/projects/agrisense-ai.jpg",
      gradient: "from-amber-400 via-emerald-500 to-teal-500",
      accent: "#f59e0b",
      icon: "Sparkles",
      summary: "Comprehensive agricultural AI platform combining ML crop recommendations with computer vision leaf disease detection.",
      description: "An end-to-end data-driven agriculture solution. Evaluates machine learning models (XGBoost, Random Forest) on soil nutrient and climate data to predict ideal crop and fertilizer choices, paired with computer vision models for early plant disease detection and market commodity price forecasting.",
      points: [
        "Trained and evaluated machine learning classifiers on soil and environmental parameters for high-accuracy crop recommendations.",
        "Implemented computer vision pipelines to analyze plant leaf imagery and detect early-stage crop infections.",
        "Integrated fertilizer recommendation algorithms optimizing soil nitrogen, phosphorus, and potassium (NPK) balances.",
        "Analyzed historical agricultural market price trends to provide farmers with predictive selling price horizons."
      ],
      engineeringHighlights: [
        { title: "Multivariate Modeling", desc: "Tuned Scikit-learn models taking into account temperature, humidity, pH, and rainfall metrics." },
        { title: "Plant Pathology Vision", desc: "Preprocessed multi-spectral leaf images to classify fungal and bacterial blights." },
        { title: "Decision Support", desc: "Synthesized predictions into actionable advisory cards for farmers." }
      ],
      github: "https://github.com/Dnyaneshh18",
      liveDemo: null
    }
  ],

  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Bluestock Fintech",
      period: "Sep 2025 — Nov 2025",
      type: "Internship",
      accent: "#6366f1",
      highlights: [
        "Developed and optimized production-level web features and integrated REST APIs for fintech applications in a collaborative Agile environment.",
        "Debugged critical application issues and contributed to deployment workflows and performance optimization for reliable software delivery.",
        "Collaborated with senior engineers on frontend responsiveness, API contract validation, and database queries."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science",
      institution: "Currently Pursuing Engineering Degree",
      period: "2024 — Present",
      grade: "CGPA: 8.79 / 10.0",
      status: "In Progress",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks.",
        "Specialized Subjects: Machine Learning, Statistical Analysis, Computer Vision, Artificial Intelligence Architectures.",
        "Consistent academic excellence with an active role in technical development initiatives."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "Ladkubai Vidya Mandir",
      period: "2024",
      grade: "Score: 84.50%",
      status: "Completed",
      highlights: [
        "Distinction in Physics, Chemistry, and Mathematics (PCM).",
        "Strong foundation in analytical reasoning, mathematics, and computer applications."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Navjeevan Day School",
      period: "2022",
      grade: "Score: 88.60%",
      status: "Completed",
      highlights: [
        "Excellence across mathematics and science curricula.",
        "Active participant in school science exhibitions and extracurricular problem-solving."
      ]
    }
  ],

  achievements: [
    {
      title: "Published Research Paper — ICRATM-2026",
      organization: "2nd International Conference on Recent Advances in Technology & Management",
      year: "Apr 2026",
      category: "Research Publication",
      icon: "BookOpen",
      accent: "#6366f1",
      description: "Published and presented 'Leveraging Seaborn and XGBoost for Customer Analysis and Early Dissatisfaction Detection'."
    },
    {
      title: "270+ Data Structures & Algorithms Solved",
      organization: "LeetCode (Profile: Dnyaneshh29)",
      year: "Continuous",
      category: "Competitive Coding",
      icon: "Code2",
      accent: "#10b981",
      description: "Consistent problem solver in C++ and Python covering arrays, strings, trees, dynamic programming, and graphs."
    },
    {
      title: "Technical Head — Entrepreneurship Development Cell (EDC)",
      organization: "EDC Student Body",
      year: "2025 — Present",
      category: "Leadership",
      icon: "Trophy",
      accent: "#f59e0b",
      description: "Led technical coordination, platform engineering, and digital setup for innovation workshops and flagship startup events."
    },
    {
      title: "Software Development Engineer Intern",
      organization: "Bluestock Fintech",
      year: "2025",
      category: "Industry Experience",
      icon: "Sparkles",
      accent: "#ec4899",
      description: "Delivered production-grade features, REST API integrations, and bug fixes for real fintech products."
    }
  ],

  certifications: [
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM (Coursera)",
      date: "Aug 2026",
      accent: "#06b6d4"
    },
    {
      title: "Getting Started with Git and GitHub",
      issuer: "IBM (Coursera)",
      date: "Aug 2026",
      accent: "#8b5cf6"
    },
    {
      title: "Data Analysis Using Excel",
      issuer: "Professional Certification",
      date: "Jan 2025",
      accent: "#10b981"
    }
  ],

  terminalCommands: {
    help: "Available commands: bio, skills, projects, achievements, edu, exp, contact, phone, leetcode, clear, matrix, hire",
    bio: "Dnyaneshwar Vasant Patil: Full Stack Developer & AI Data Science Engineer. B.Tech in AI & Data Science (CGPA: 8.79). 270+ LeetCode solved. SDE Intern @ Bluestock Fintech. Author of ICRATM-2026 research paper.",
    skills: "Languages: C++, Python, JavaScript, SQL | AI/ML: Scikit-learn, XGBoost, Computer Vision, Pandas, NumPy | Web: React.js, Node.js, Express.js, Flask | DB: PostgreSQL, MongoDB | Networking: Scapy, TCP/IP, Nmap",
    projects: "Flagship Projects: [1] CodeMentorAI (AI Coding Platform) [2] Real-Time Network Traffic Monitor & Anomaly Detection [3] AgriSense AI (Smart Farming Assistant)",
    exp: "SDE Intern @ Bluestock Fintech (Sep-Nov 2025): Developed production web features, integrated REST APIs, performance optimization.",
    achievements: "• Published Research Paper @ ICRATM-2026 | • Technical Head EDC | • 270+ LeetCode Solved | • SDE Intern @ Bluestock Fintech",
    edu: "B.Tech AI & Data Science (CGPA: 8.79) | HSC: 84.50% (Ladkubai Vidya Mandir) | SSC: 88.60% (Navjeevan Day School)",
    contact: "Email: dnyaneshwarvasantpatil296@gmail.com | Phone: +91 7972650026 | GitHub: github.com/Dnyaneshh18 | LinkedIn: linkedin.com/in/dnyaneshwar-patil-35334b344",
    phone: "Direct Phone / WhatsApp: +91 7972650026",
    leetcode: "LeetCode: leetcode.com/u/Dnyaneshh29/ (270+ solved)",
    hire: "✨ Dnyaneshwar Vasant Patil is actively open to Full-Time Roles & Internships in Full-Stack & AI Data Science. Contact: dnyaneshwarvasantpatil296@gmail.com / +91 7972650026!",
    matrix: "Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇"
  }
};
