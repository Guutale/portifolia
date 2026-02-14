import {
    Code2,
    Cpu,
    Globe,
    Layout,
    Server,
    Smartphone,
    Terminal
} from 'lucide-react';

export const portfolioData = {
    name: "Abdisamad Abdirizak Guutale",
    role: "Full Stack Web Developer | MERN Stack Specialist",
    about: "I am a Year 2 student at Hormuud University specializing in Web Development. I build full-stack applications using the MERN Stack (MongoDB, Express, React, Node.js). I focus on building scalable, structured, enterprise-level systems including Management Systems, Payroll Systems, Delivery & Dispatch Systems, and AI-based Applications. I am passionate about solving real-world business problems through technology.",
    socialLinks: {
        github: "https://github.com/Guutale",
        email: "mailto:cbdisamadfast@gmail.com",
        linkedin: "#" // Add if available
    },
    skills: [
        {
            category: "Programming Languages",
            items: [
                { name: "HTML", icon: Layout },
                { name: "CSS", icon: Layout },
                { name: "JavaScript", icon: Code2 },
                { name: "Python", icon: Terminal }
            ]
        },
        {
            category: "Frameworks & Stack",
            items: [
                { name: "React.js", icon: Code2 },
                { name: "Node.js", icon: Server },
                { name: "Express.js", icon: Server },
                { name: "MongoDB", icon: Server },
                { name: "MERN Stack", icon: Globe }
            ]
        },
        {
            category: "Tools & Platforms",
            items: [
                { name: "VS Code", icon: Code2 },
                { name: "GitHub", icon: Code2 },
                { name: "Antigravity Gemini", icon: Cpu },
                { name: "Stitch", icon: Code2 },
                { name: "ChatGPT", icon: Cpu },
                { name: "EdrawMax", icon: Layout }
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Online Course Management System",
            desc: "Comprehensive platform for managing online courses with student and instructor roles.",
            stack: ["MERN Stack", "React", "Node.js", "MongoDB"],
            features: [
                "Course CRUD system",
                "Authentication",
                "Admin dashboard",
                "Role-based access"
            ]
        },
        {
            id: 2,
            title: "Enterprise Restaurant Management System",
            desc: "A robust system effectively managing restaurant operations including payroll and delivery.",
            stack: ["MERN Stack", "Stripe API", "GPS Integration"],
            features: [
                "Multi-role system (Admin, HR, Chef, Delivery)",
                "Payroll management",
                "Delivery assignment with GPS",
                "Audit logs & Analytics"
            ]
        },
        {
            id: 3,
            title: "Online Stadium Management System",
            desc: "Booking and management system for sports venues and stadium facilities.",
            stack: ["MERN Stack", "React", "Node.js"],
            features: [
                "Booking system",
                "Time-slot management",
                "Admin panel",
                "Revenue tracking"
            ]
        },
        {
            id: 4,
            title: "AI Resume Builder",
            desc: "Intelligent tool helping users create professional resumes with AI suggestions.",
            stack: ["MERN Stack", "OpenAI API", "React PDF"],
            features: [
                "Resume generation",
                "AI content suggestions",
                "PDF export",
                "Custom templates"
            ]
        }
    ],
    contact: {
        email: "cbdisamadfast@gmail.com",
        github: "Guutale"
    }
};
