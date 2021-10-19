import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AssignmentOutlined,
  Language,
  WebOutlined,
  YouTube,
} from "@material-ui/icons";

const resumeData = {
  name: "Douglas Obara",
  title: "Web Developer",

  birthday: "30th July 1997",
  email: "douglasobara97@gmail.com",
  address: "8303 - 00200 , Kibera Drive.",
  phone: "(+254)7 42 608 717",

  about:
    "Hello!, My name is Douglas Obara student at Kabarak University hounding Bachelor of Science in Information Technology(BSc IT),this where i was introduced to the Web Application Programming and since then i developed interest in building web application projects and work with some machine learning models algorithms when i was studying DataScience.I am a Front-end Web Developer.I just fell in love with ReactJs as my favourite library/framework for front-end technology.\n\nCurrently i am learning Java Platform, Enterprise Edition (Java EE) which i found it useful and good to know when i was introduced to HealthIT Systems since it is the technology stack used in the KenyaEMR system, which is based on OpenMRS and many more systems by KabarakHealthIT student innovation hub(iHub) mentors for us to be able to deploy the system to various facilities at County level and even customize to meet the requirements of the facility that the system is being deployed.I always believe in myself in all that i do since am a goal-driven mindset person and passionate for learning new technology that arises in order to solve problems and drive the organization towards achieving its goals, objective ~ effectively & efficiently.I like reading, coding, research, hiking, listening to Music and dancing to the tune.",

  socials: {
    Facebook: {
      link: "https://web.facebook.com/douglas.omwando.92/",
      text: "MyFacebook",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://twitter.com/Douglas__Obara",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/douglas-obara/",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/douglas254",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },

  experiences: [
    {
      title: "Technical Support @WOFAK",
      date: "Jan 2020 - Dec 2020",
      description:
        "Assisted the staff on the technical aspect of the operation in their machines and made sure the system is running as well and troubleshoot the network incase of failure.",
    },
  ],

  educations: [
    {
      title: "KABARAK UNIVERSITY",
      date: "May 2018 - Present",
      description:
        "Bachelor of Science in Information Technology (BSc IT)",
    },
    {
      title: "ST. JOHN'S NYAMAGWA BOYS HIGH SCHOOL",
      date: "2014 - 2017",
      description:
        "The experience was cool after passing my exam in class eight(KCPE) where i got scholarship by the carolina for kibera (CFK) foundation to pay my secondary school fees signed in the contract which lasted for only four years under certain conditions",
    },
    {
      title: "SOWETO ACADEMY",
      date: "2006 - 2013",
      description:
        "This where my journey of schooling began and did my best in the kenya certificate of primary education (KCPE)",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "i have experience in website development",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Illustrator",
      description: "I have been working on illustration design for 6 years.",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "Javascript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["Java", "Python","NodeJS"],
    },
    {
      title: "DATABASES",
      description: ["MySQL","PostgreSQL", "MongoDB","Firebase"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      tags: "React",
      image:
        "https://www.cce.csus.edu/sites/main/files/main-images/camera_lense_0.jpeg",
      title: "React Project 1",
      caption: "A short Description",
      description: "This is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tags: "React",
      image:
        "https://www.cce.csus.edu/sites/main/files/main-images/camera_lense_0.jpeg",
      title: "React Project 2",
      caption: "A short Description",
      description: "This is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tags: "Python",
      image:
        "https://www.cce.csus.edu/sites/main/files/main-images/camera_lense_0.jpeg",
      title: "Python Project 1",
      caption: "A short Description",
      description: "This is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tags: "Java",
      image:
        "https://www.cce.csus.edu/sites/main/files/main-images/camera_lense_0.jpeg",
      title: "Java Project 1",
      caption: "A short Description",
      description: "This is my project description. Please fill it in.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
};

export default resumeData;
