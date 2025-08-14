import {
  aibs,
  aibsAssurance,
  aibsMobile,
  aibsPartenaire,
  angular,
  backend,
  cofat,
  tunisieTelecom,
  creator,
  css,
  firebase,
  flutter,
  git,
  githubBlack,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  ont,
  reactjs,
  tailwind,
  typescript,
  frelance,
  web,
  scope_concepts,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Github",
    icon: githubBlack,
  },
];

const experiences = [
  {
    title: "Network Technician Intern",
    company_name: "Tunisie Télécom",
    icon: tunisieTelecom,
    iconBg: "#fff",
    date: "June 2018 - August 2019",
    points: [
      "Analyzed and assessed network security by simulating realistic scenarios using Cisco Packet Tracer and GNS3, enhancing infrastructure resilience. (Tools: Cisco Packet Tracer, GNS3)",
      "Designed and deployed virtualized network environments to test and optimize security policies and configurations, ensuring robust performance. (Tools: VMware, VirtualBox, Cisco Packet Tracer)",
      "Configured and optimized firewalls to protect networks from unauthorized access and cyber threats, improving overall security. (Tools: Cisco ASA, pfSense, Firewalls)",
      "Implemented VLAN segmentation and access control lists (ACL) to optimize network security and performance, reducing intrusion risks. (Tools: Cisco Switches, VLAN, ACL)",
      "Deployed and secured static and dynamic routing using protocols such as OSPF and EIGRP, ensuring secure data transmission and reliable connectivity. (Tools: Cisco Routers, OSPF, EIGRP)",
    ],
  },

  {
    title: "Software Developer Intern",
    company_name: "Tunisie Télécom",
    icon: tunisieTelecom,
    iconBg: "#fff",
    date: "June 2021 - August 2021",
    points: [
      "Designed and developed an Intrusion Detection System (IDS) based on Deep Learning to identify and neutralize cyber threats in real time. (Tools: Python, TensorFlow, Keras)",
      "Developed and optimized AI models, including Convolutional Neural Networks (CNN), for real-time network traffic analysis and anomaly detection. (Tools: CNN)",
      "Collected and preprocessed network traffic datasets (e.g., KDD99) to improve model training accuracy. (Tools: Python, Pandas, NumPy)",
      "Conducted penetration testing and security audits to assess system vulnerabilities and ensure resilience against cyberattacks. (Tools: Kali Linux)",
      "Documented research findings and technical implementation, delivering presentations to both academic and industry professionals. (Tools: LaTeX, Microsoft Office, PowerPoint)",
    ],
  },
  {
    title: "Remote Freelance Software Engineer (Angular - MongoDB)",
    company_name: "Self-Employed",
    icon: frelance,
    iconBg: "#fff",
    date: "January 2022 – March 2023",
    points: [
      "Created custom, high-performance websites for SMEs and startups with a strong focus on user experience, accessibility, and performance. (Tech: HTML, CSS, JavaScript, React.js, UI/UX Design)",
      "Delivered static and dynamic web projects in collaboration with companies across various sectors, featuring custom APIs. (Tech: Node.js, Express, Java, REST API, SSR)",
      "Implemented NoSQL and real-time databases for secure and scalable management solutions. (Tech: Firebase, Firestore, MongoDB, Authentication, Realtime DB)",
      "Automated deployments via CI/CD, optimized web performance, and configured cloud hosting environments. (Tech: GitHub Actions, Netlify, Render, Firebase Hosting, Lighthouse)",
    ],
  },
  {
    title: "Web and Mobile Developer ",
    company_name: "Karma solution",
    icon: aibs,
    iconBg: "#0063ce",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Build and sustain high-performance mobile applications utilizing Flutter and associated frameworks",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AIBS Assurance",
    description:
      "A web platform designed for an insurance company, enabling users to seamlessly manage their insurance needs. The website allows users to purchase insurance, file claims for problems or issues, and access a range of services in a user-friendly and efficient manner.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: aibsAssurance,
    source_code_link: "https://www.aibs-assurances.fr/",
  },
  {
    name: "AIBS Partenaire",
    description:
      "A web application designed to empower users in managing their insurance needs while offering a unique profit-sharing model. Users can purchase insurance for themselves or others, earning a profit for each policy bought. The platform also enables users to file claims for issues and seamlessly cash out their earned profits, providing a comprehensive and rewarding insurance experience.",
    tags: [
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: aibsPartenaire,
    source_code_link: "https://aibs-part.web.app/presentation",
  },
  {
    name: "AIBS Partenaire mobile",
    description:
      "A cross-platform mobile app offering seamless functionality as AIBS Partenaire, enabling users to manage insurance, file claims, earn profits, and cash out rewards conveniently.",
    tags: [
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
    ],
    image: aibsMobile,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.sg.aibs_partenaire_mobile&hl=fr&pli=1",
  },
  {
    name: "scope-concepts ",
    description:
      "A showcase website for the Saudi Arabian company Scope Concepts, presenting its portfolio of work and allowing visitors to get in touch via email or WhatsApp to request quotes.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: scope_concepts,
    source_code_link: "https://scope-concepts.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
