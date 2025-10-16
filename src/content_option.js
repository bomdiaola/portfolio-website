const logotext = "{JG}";

const meta = {
  title: "{Joan Garcés} | Cybersecurity Portfolio",
  description:
    "I'm {Joan Garcés}, a technologist and cybersecurity enthusiast.",
};

const introdata = {
  title: "Hi, I'm {Joan Garcés}",
  animated: {
    first: "Ethical Hacker",
    second: "Pentester",
    third: "Innovator",
    fourth: "Cybersecurity Analyst",
    fifth: "Gamer",
    sixth: "Analyst",
    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    "A Passionate about offensive cybersecurity, gaming, and software development. In this portfolio, I demonstrate my skills through projects, certifications, and practical experience in CTFs.",
  your_img_url: "https://i.imgur.com/PeqnDDA.gif",
};

const dataabout = {
  title: "Who am I?",
  aboutme:
    "Greetings. I'm Joan Garcés, a senior studying computer engineering with a focus on cybersecurity. An inventive mindset and a love of locating, evaluating, and reducing digital vulnerabilities are what propel my work. Having a strong background in full-stack development with frameworks like Angular and Django, I have a unique perspective on the architecture of an application, which directly influences how I approach penetration testing. When I'm not working on security, I love to study, research, and ride motorcycles. I appreciate you looking through my portfolio.",
};
const worktimeline = [
  {
    jobtitle: "Completing a degree in Computer Engineering",
    where: "DuocUC",
    date: "2025",
  },
  {
    jobtitle: "2nd Place Nationally in 'Innova Sostenible'",
    where: "EY (Ernst & Young)",
    date: "2023",
  },
  {
    jobtitle: "Certification: Junior Cybersecurity Analyst",
    where: "Cisco",
    date: "2023",
  },
  {
    jobtitle: "Beginning Higher Education",
    where: "DuocUC",
    date: "2021",
  },
];

const skills = [
  {
    // Seguridad Ofensiva
    name: "Pentesting",
  },
  {
    name: "Nmap",
  },
  {
    name: "Metasploit",
  },
  {
    name: "Burp Suite",
  },
  {
    name: "Wireshark",
  },
  {
    name: "Gobuster",
  },
  {
    name: "Hydra",
  },
  {
    name: "John the Ripper/Hashcat",
  },
  {
    name: "ffuf/wffuzz",
  },

  {
    name: "OSINT",
  },

  // Scripting y Desarrollo
  {
    name: "Python",
  },
  {
    name: "Bash",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Django",
  },
  {
    name: "Angular",
  },
  {
    name: "NodeJS",
  },
  {
    name: "HTML/CSS",
  },

  // Sistemas, BBDD y Redes
  {
    name: "Linux",
  },
  {
    name: "Windows",
  },
  {
    name: "Active Directory",
  },
  {
    name: "MySQL",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "SQLServer",
  },
];

// ❌ ELIMINADO: Variable dataportfolio (78 líneas)
// Razón: Nunca utilizada en el proyecto, contenía datos placeholder
// Los datos reales del portfolio están en src/portfolioData.js

const contactConfig = {
  YOUR_EMAIL: "joan.g.maldonado@gmail.com",
  description: "Looking forward to hearing from you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_xu2xdsl",
  YOUR_TEMPLATE_ID: "template_tjn4ukm",
  YOUR_USER_ID: "HxLJuqDnd9nED2QGD",
};

const socialprofils = {
  github: "https://github.com/bomdiaola",
  linkedin: "https://www.linkedin.com/in/joangarces/",
};
export {
  meta,
  dataabout,
  // dataportfolio, ❌ ELIMINADO - Variable no utilizada
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
