import { Experience, Project, Skill, Testimonial, LearningItem } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Huseyn Aslanli",
  title: "Legal Extern @ Hydroficient | LLM, API, Application Development",
  location: "Tempe, Arizona",
  phone: "6029215286",
  email: "aslanlihuseyn87@gmail.com",
  contactEmail: "aslanlihuseyn87@gmail.com", // Specific email for contact form
  linkedin: "https://www.linkedin.com/in/haslanli",
  github: "https://github.com/haslanli",
  instagram: "https://www.instagram.com/iamhaslanli?igsh=d3d6NmM5NHNmeWNh",
  summary: "As a Computer Science undergraduate specializing in Cybersecurity at Arizona State University, I contribute as a Legal Extern at Hydroficient, focusing on developing and securing IoT pipelines with Python, TLS encryption, and device certificates. My work includes security testing, replay attack simulations, and creating real-time security dashboards. I also serve as VP of Corporate Relations for ACM at ASU and on the Board of the Claude Builder Club, fostering connections between students, industry, and AI technology."
};

export const EXPERIENCE: Experience[] = [
  {
    id: 'hydroficient',
    role: "Extern - IoT Cyber Defense",
    company: "Hydroficient",
    date: "February 2026 - Present",
    location: "Remote/Hybrid",
    description: [
      "Built and secured an MQTT-based IoT pipeline using Python, TLS encryption, and device certificates to simulate and protect real-time water monitoring systems.",
      "Conducted security testing, including replay attack simulations and TLS performance benchmarking, identifying vulnerabilities and tuning defenses.",
      "Developed a real-time security dashboard using Streamlit to monitor pipeline health, detect threats, and track system status."
    ]
  },
  {
    id: 'acm-asu',
    role: "Vice President Corporate Relations",
    company: "ACM at ASU",
    date: "January 2026 - Present",
    location: "Tempe, Arizona",
    description: [
      "Directly sourcing and recruiting senior engineers from top-tier firms (e.g., Apple, Nvidia, Google) for exclusive campus seminars using cold outreach strategies.",
      "Acting as the primary bridge between the student body and industry professionals to organize technical talks.",
      "Hosting 'Technical Deep-Dive' sessions connecting hundreds of CS students with mentors from FAANG and Fortune 500 companies."
    ]
  },
  {
    id: 'claude-builder',
    role: "Board Member",
    company: "Claude Builder Club @ ASU",
    date: "January 2026 - Present",
    location: "Tempe, Arizona",
    description: [
      "Lead technical workshops to equip students with 'future-ready skills' in artificial intelligence.",
      "Facilitate hands-on projects by organizing development teams to build innovative applications using Claude’s advanced API capabilities.",
      "Contribute to the growth of a student-run AI community dedicated to exploring Anthropic’s Claude LLM."
    ]
  },
  {
    id: 'independent-hardware',
    role: "Independent Developer (Hardware Technician)",
    company: "Self-Employed",
    date: "January 2024 - April 2024",
    location: "Baku, Azerbaijan",
    description: [
      "Designed and engineered custom high-fidelity IEMs with integrated Qudelix 5K DAC/AMPs.",
      "Prototype successfully validated and sold to a private client for $5,880.",
      "Used software tuning to equalize earphones to match the Harman Curve for scientifically preferred frequency response."
    ]
  },
  {
    id: 'independent-game',
    role: "Game Developer",
    company: "Self-Employed",
    date: "September 2023 - December 2023",
    location: "Baku, Azerbaijan",
    description: [
      "Developed and sold a first-person shooter (FPS) game for $800, handling design and deployment.",
      "Tackled AI behavior, game physics, and user feedback implementation to refine gameplay."
    ]
  },
  {
    id: 'sg-richardson',
    role: "Technical Analyst",
    company: "SG&RICHARDSON TRADING DMCC",
    date: "May 2023 - August 2023",
    location: "Dubai, UAE",
    description: [
      "Created a Python-based trading bot utilizing various tools for core functionality.",
      "Consulted with the analysis team regarding technology usability and emerging market trends.",
      "Offered feedback on products to help analysts understand preferences of younger consumers."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'iot-dashboard',
    title: "IoT Security Dashboard",
    description: "A real-time monitoring system for secure MQTT pipelines. Visualizes data flow, detects replay attacks, and manages TLS certificate status for connected water monitoring devices.",
    technologies: ["Python", "Streamlit", "MQTT", "TLS/SSL", "Cryptography"],
    github: "https://github.com/haslanli",
    link: "#"
  },
  {
    id: 'trading-bot',
    title: "Algorithmic Trading Bot",
    description: "Automated trading system analyzing market trends to execute trades. Features backtesting capabilities and real-time market data integration.",
    technologies: ["Python", "Pandas", "API Integration", "Data Analysis"],
    github: "https://github.com/haslanli"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'placeholder-1',
    name: "Referral Name",
    role: "Job Title",
    company: "Company Name",
    text: "Text will be here",
    image: "", // Add URL here (e.g., https://example.com/photo.jpg)
    linkedin: "https://linkedin.com",
    email: "email@example.com"
  },
  {
    id: 'placeholder-2',
    name: "Referral Name",
    role: "Job Title",
    company: "Company Name",
    text: "Text will be here",
    image: "", 
    linkedin: "https://linkedin.com"
  },
  {
    id: 'placeholder-3',
    name: "Referral Name",
    role: "Job Title",
    company: "Company Name",
    text: "Text will be here"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "TypeScript/React", category: "Language" },
  { name: "MQTT", category: "Concept" },
  { name: "Threat Modeling", category: "Concept" },
  { name: "TLS Encryption", category: "Concept" },
  { name: "IoT Security", category: "Concept" },
  { name: "LLM Integration", category: "Concept" },
  { name: "Streamlit", category: "Tool" },
  { name: "API Development", category: "Tool" },
  { name: "Git/GitHub", category: "Tool" },
];

export const LEARNING_PATH: LearningItem[] = [
  {
    name: "CompTIA Security+",
    link: "https://www.comptia.org/en-us/certifications/security/",
    status: "In Progress",
    platform: "CompTIA"
  },
  {
    name: "Illinois Accelerated Computer Science Fundamentals",
    link: "https://www.coursera.org/specializations/cs-fundamentals",
    status: "In Progress",
    platform: "Coursera/Illinois"
  },
  {
    name: "IBM Back-End Development Professional Certificate",
    link: "https://www.coursera.org/professional-certificates/ibm-backend-development",
    status: "Planning",
    platform: "Coursera/IBM"
  }
];

export const EDUCATION = {
  school: "Arizona State University",
  degree: "Bachelor of Science, Computer Science",
  date: "August 2024 - May 2028"
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: PERSONAL_INFO.github, icon: Github },
  { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: Linkedin },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Huseyn Aslanli on his portfolio website.
Your goal is to answer questions about Huseyn's professional background, skills, and experience in a friendly and professional manner.

Use the following context to answer questions:

Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location}
Summary: ${PERSONAL_INFO.summary}

Education:
${EDUCATION.degree} at ${EDUCATION.school} (${EDUCATION.date})

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.date}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Skills:
${SKILLS.map(s => s.name).join(', ')}

Continuous Learning (In Progress):
${LEARNING_PATH.filter(l => l.status === 'In Progress').map(l => `- ${l.name} (${l.platform})`).join('\n')}

Planned Learning:
${LEARNING_PATH.filter(l => l.status === 'Planning').map(l => `- ${l.name} (${l.platform})`).join('\n')}

Links:
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Instagram: ${PERSONAL_INFO.instagram}

Guidelines:
- Keep answers concise and relevant.
- If asked about contact info, provide his email or LinkedIn.
- Highlight his work in IoT security and AI/LLMs if asked about his strengths.
- Speak in the first person ("I" or "My") if you want to sound like Huseyn, or third person ("Huseyn") if preferred. Let's use third person "Huseyn" to be clear you are an AI.
- If you don't know the answer, politely say that this information is not available in the portfolio.
`;