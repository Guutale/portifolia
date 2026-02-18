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
    role: {
        en: "Full Stack Web Developer | MERN Stack Specialist",
        so: "Horumariye Web Full Stack | Khabiir MERN Stack"
    },
    aboutShort: {
        en: "I build scalable, structured systems and full-stack web applications using the MERN Stack.",
        so: "Waxaan dhisaa nidaamyo la ballaadhin karo oo habaysan, iyo barnaamijyo full-stack ah anigoo adeegsanaya MERN Stack."
    },
    about: {
        en: "I am a Year 2 student at Hormuud University specializing in Web Development. I build full-stack applications using the MERN Stack (MongoDB, Express, React, Node.js). I focus on building scalable, structured, enterprise-level systems including Management Systems, Payroll Systems, Delivery & Dispatch Systems, and AI-based Applications. I am passionate about solving real-world business problems through technology.",
        so: "Waxaan ahay arday sanadkiisa 2aad ee Jaamacadda Hormuud, waxaana ku takhasusay Horumarinta Webka. Waxaan dhisaa barnaamijyo full-stack ah anigoo adeegsanaya MERN Stack (MongoDB, Express, React, Node.js). Waxaan diiradda saaraa nidaamyo ballaadhan, habaysan, heer shirkadeed ah sida Nidaamyada Maareynta, Nidaamyada Mushaharka, Nidaamyada Gaarsiinta iyo Dirista, iyo barnaamijyada ku salaysan AI. Waxaan xiiseeyaa inaan teknoolojiyada ku xalliyo dhibaatooyinka ganacsiga ee dhabta ah."
    },
    socialLinks: {
        github: "https://github.com/Guutale",
        email: "mailto:cbdisamadfast@gmail.com",
        whatsapp: "https://wa.me/252612527767",
        linkedin: "#" // Add if available
    },
    skills: [
        {
            category: { en: "Programming Languages", so: "Luqadaha Barnaamijyada" },
            items: [
                { name: "HTML", icon: Layout },
                { name: "CSS", icon: Layout },
                { name: "JavaScript", icon: Code2 },
                { name: "Python", icon: Terminal }
            ]
        },
        {
            category: { en: "Frameworks & Stack", so: "Frameworks iyo Stack" },
            items: [
                { name: "React.js", icon: Code2 },
                { name: "Node.js", icon: Server },
                { name: "Express.js", icon: Server },
                { name: "MongoDB", icon: Server },
                { name: "MERN Stack", icon: Globe }
            ]
        },
        {
            category: { en: "Tools & Platforms", so: "Qalab iyo Platforms" },
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
            title: { en: "Online Course Management System", so: "Nidaamka Maareynta Koorsooyinka Online" },
            desc: {
                en: "Comprehensive platform for managing online courses with student and instructor roles.",
                so: "Madalfad dhameystiran oo lagu maareeyo koorsooyinka online, kana kooban arday iyo macallin (instructor) roles."
            },
            stack: ["MERN Stack", "React", "Node.js", "MongoDB"],
            features: {
                en: ["Course CRUD system", "Authentication", "Admin dashboard", "Role-based access"],
                so: ["CRUD koorsooyinka", "Galitaan (Authentication)", "Admin dashboard", "Helitaan ku saleysan role (RBAC)"]
            },
            links: {}
        },
        {
            id: 2,
            title: { en: "Enterprise Restaurant Management System", so: "Nidaamka Maareynta Maqaayadda (Enterprise)" },
            desc: {
                en: "A robust system effectively managing restaurant operations including payroll and delivery.",
                so: "Nidaam adag oo si hufan u maareeya hawlaha maqaayadda, oo ay ku jiraan mushahar iyo gaarsiin."
            },
            stack: ["MERN Stack", "Stripe API", "GPS Integration"],
            features: {
                en: [
                    "Multi-role system (Admin, HR, Chef, Delivery)",
                    "Payroll management",
                    "Delivery assignment with GPS",
                    "Audit logs & Analytics"
                ],
                so: [
                    "Nidaam roles badan (Admin, HR, Chef, Delivery)",
                    "Maareynta mushaharka",
                    "Qaybinta delivery-ga oo leh GPS",
                    "Audit logs iyo Analytics"
                ]
            },
            links: {}
        },
        {
            id: 3,
            title: { en: "Online Stadium Management System", so: "Nidaamka Maareynta Garoonka Online" },
            desc: {
                en: "Booking and management system for sports venues and stadium facilities.",
                so: "Nidaam booking iyo maareyn ah oo loogu talagalay garoomada iyo adeegyada ciyaaraha."
            },
            stack: ["MERN Stack", "React", "Node.js"],
            features: {
                en: ["Booking system", "Time-slot management", "Admin panel", "Revenue tracking"],
                so: ["Nidaamka booking-ka", "Maareynta waqtiga (time-slots)", "Admin panel", "La socodka dakhliga"]
            },
            links: {}
        },
        {
            id: 4,
            title: { en: "AI Resume Builder", so: "Sameeyaha CV-ga ee AI" },
            desc: {
                en: "Intelligent tool helping users create professional resumes with AI suggestions.",
                so: "Qalab caqli leh oo ka caawiya isticmaalayaasha inay sameystaan CV xirfadaysan, oo leh talooyin AI."
            },
            stack: ["MERN Stack", "OpenAI API", "React PDF"],
            features: {
                en: ["Resume generation", "AI content suggestions", "PDF export", "Custom templates"],
                so: ["Sameynta CV", "Talooyin qoraal oo AI", "Soo saarid PDF", "Templates gaar ah"]
            },
            links: {}
        },
        {
            id: 5,
            title: { en: "Fleet Management System", so: "Nidaamka Maareynta Gaadiidka (Fleet)" },
            desc: {
                en: "System for managing vehicles, drivers, trips, maintenance schedules, and operating costs.",
                so: "Nidaam lagu maareeyo gaadiidka, darawalada, safarada, jadwalka dayactirka, iyo kharashaadka shaqo."
            },
            stack: ["MERN Stack", "React", "Node.js", "MongoDB"],
            features: {
                en: [
                    "Vehicle profiles & registration",
                    "Driver management",
                    "Trip and route scheduling",
                    "Fuel logs and cost analytics",
                    "Maintenance reminders and service history"
                ],
                so: [
                    "Diiwaan gelinta iyo xogta gaari kasta",
                    "Maareynta darawalada",
                    "Jadwalinta safarada iyo wadooyinka",
                    "Diiwaanka shidaalka iyo falanqaynta kharashka",
                    "Xasuusin dayactir iyo taariikhda service-ka"
                ]
            },
            links: {}
        }
    ],
    contact: {
        email: "cbdisamadfast@gmail.com",
        github: "Guutale",
        phone: "612527767"
    }
};
