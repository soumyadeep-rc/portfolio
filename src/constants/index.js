import julogo from "../assets/company/julogo.png";
import vmslogo from "../assets/company/vmslogo.png";
//import portfolio from "../assets/projects/portfolio.png";
import greenlens from "../assets/projects/greenlens.png";
import ragcraw from "../assets/projects/ragcraw.png";
import quizzy from "../assets/projects/quizzy.png";

export const navLinks = [
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

export const themes = [
  { name: "Chocolate Symphony (Default)", primaryColor: "#C24949", secondaryColor: "#75503A" },
  { name: "Ocean Breeze", primaryColor: "#00709C", secondaryColor: "#2243AA" },
  { name: "Forest Reverie", primaryColor: "#00FF00", secondaryColor: "#556B2F" },
  { name: "Simple Purple", primaryColor: "#7E117C", secondaryColor: "#7311B0" },
  { name: "Mango Tango", primaryColor: "#F7CD00", secondaryColor: "#EC5800" },
  { name: "Cherry Rose", primaryColor: "#F40000", secondaryColor: "#EC2C3D" },
];

export const skills = [
  "C++",
  "Java",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Solidity",
  "SQL",
  "Git",
  "Gemini API",
  "Tailwind CSS",
  "RAG Systems",
  "Docker",
  "Redis"
];

const education = [
  {
    title: "B.E. in Information Technology",
    company_name: "Jadavpur University, Kolkata",
    icon: julogo,
    iconBg: "#FFFAFA",
    date: "Aug 2024 - Expected July 2028",
    points: [
      "Current CGPA: 8.83 (till 3rd Semester).",
      "Core member of the JU ACM Student Chapter Web3 team, collaborating on decentralized applications."
    ],
  },
  {
    title: "Higher Secondary Examinations (Class XII)",
    company_name: "Vivekananda Mission School, Joka",
    icon: vmslogo,
    iconBg: "#F5F5DC",
    date: "2024",
    points: [
      "Graduated with 99.5% in the ISC Board Examinations.",
      "Secured an outstanding All India Rank 2 (AIR-2)."
    ],
  },
  {
    title: "Secondary Examinations (Class X)",
    company_name: "Vivekananda Mission School, Joka",
    icon: vmslogo,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Graduated with 98.6% in the ICSE Board Examinations."
    ],
  },
];

const achievements = [
  {
    title: "ICPC Asia West Regionalist",
    description: "Secured Rank 46 in the Chennai Regional and Rank 146 in the Amritapuri Regional contests for the 2025 season.",
    date: "2025",
  },
  {
    title: "Eastern India Blockchain Summit 2.0",
    description: "Selected as a Finalist at the Eastern India Blockchain Summit 2.0 hosted at IIT Kharagpur.",
    date: "2026",
  },
  {
    title: "Competitive Programming Mastery",
    description: "Reached Specialist status on Codeforces (Max Rating: 1448) and a 3-Star rating on CodeChef. Solved over 500+ algorithmic problems across various platforms.",
    date: "Present",
  },
  {
    title: "Engineering Entrance Examinations",
    description: "Achieved 98 percentile in JEE Mains 2024 and secured AIR 326 in WBJEE 2024.",
    date: "2024",
  },
  {
    title: "Academic Consistency",
    description: "Bagged All India Rank 2 in ISC Examinations 2024 and maintained a linear SGPA of 8.83 till 3rd semester",
    date: "Recent",
  }
];



const projects = [
  {
    name: "GreenLens",
    description:
      "A MERN-based dApp built during the Hacksprint hackathon at IIEST Shibpur. It tracks carbon footprints and rewards users with ERC-20 GreenTokens for maintaining eco-friendly habits.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "web3", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/soumyadeep-rc/GreenLens/",
    demo_link: "https://greenlens-ghdl.onrender.com/",
    target_blank: true,
    icon: greenlens,
  },
  {
    name: "RAG-CRAW",
    description:
      "A high-performance Retrieval-Augmented Generation (RAG) application that crawls live web pages, indexes their content into a vector store, and answers user queries using Gemini 2.5 Flash",
    tags: [
      { name: "langchain", color: "pink-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "gemini", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/soumyadeep-rc/RAG-CRAW/",
    demo_link: "https://src-rag-craw.streamlit.app/",
    target_blank: true,
    icon: ragcraw,
  },
  {
    name: "Quizzy",
    description:
      "A distributed live quiz application built with React, Node.js, and Redis. This platform utilizes WebSockets for real-time player interaction and Redis Sorted Sets for high-concurrency leaderboard management.",
    tags: [
      { name: "docker", color: "orange-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/soumyadeep-rc/Quizzy/",
    demo_link: "https://quizzy-src.vercel.app/",
    target_blank: true,
    icon: quizzy,
  },
];

export { education, achievements, projects };