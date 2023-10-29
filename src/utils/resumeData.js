import {
  Twitter,
  LinkedIn,
  GitHub,
  SettingsApplications,
  Language,
  AcUnit,
  ViewAgenda,
  Code,
} from "@mui/icons-material";

import covid19tracker from "../assets/projects/covid-19-tracker.jpg";
import restaurantwebsite from "../assets/projects/Restaurant-Website.jpg";
import travelagencywebsite from "../assets/projects/Travel-Agency-Website.jpg";
import diabetesprediction from "../assets/projects/diabetes-prediction.jpg";
import douglasobaragithub from "../assets/projects/douglasobara-github.png";
import fredouwebtech from "../assets/projects/fredouwebtech.jpg";
import ecommercewordpress from "../assets/projects/ecommercewordpress.jpg";
import ecommercelaravel from "../assets/projects/ecommercelaravel.jpg";
import projectspro from "../assets/projects/projectspro.png";
import nikestorecommerce from "../assets/projects/nikestorecommerce.png";
import inuaukulima from "../assets/projects/inuaukulima.png";
import kenyadnsforum from "../assets/projects/kenyadnsforum.png";
import sliquorstore from "../assets/projects/sliquorstore.png";
import managelandingpage from "../assets/projects/managelandingpage.png";
import cuisinedishes from "../assets/projects/cuisinedishes.png";
import astro from "../assets/projects/astro.png";
import parceldeliveriesadministration from "../assets/projects/parceldeliveriesadministration.png";

const resumeData = {
  name: "Douglas Obara",
  title: "Software Engineer",
  email: "douglasobara97@gmail.com",
  mailto: "mailto:douglasobara97@gmail.com",
  address: "8303 - 00200 , Kibera Drive.",
  phone: "(+254)7 42 608 717",
  tel: "tel:+254742608717",
  about:
    "Hello 👋, I'm Douglas Obara. With a solid educational background in Information Technology, holding a Bachelor's degree, Information Technology (BSc in IT), and having honed my skills through a rigorous program in Software Engineering at Moringa School, I bring a unique blend of theoretical knowledge and practical expertise. My passion lies in leveraging technology to solve complex problems and streamline processes. \n\n With a keen eye for detail and a strong aptitude for innovative solutions, I am equipped to contribute significantly to any software development team. I am eager to apply my skills and contribute to a dynamic organization looking to make a meaningful impact in the tech industry.",

  socials: {
    Twitter: {
      link: "https://twitter.com/Douglas__Obara",
      text: "Twitter",
      socialLinkEndpoint: "@Douglas__Obara",
      icon: <Twitter />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/douglas-obara",
      text: "Linkedin",
      socialLinkEndpoint: "in/douglas-obara",
      icon: <LinkedIn />,
    },
    GitHub: {
      link: "https://github.com/douglas254",
      text: "Github",
      socialLinkEndpoint: "douglas254",
      icon: <GitHub />,
    },
  },

  experiences: [
    {
      title: "Frontend Engineer @CodeAfrika Business Solutions Limited",
      date: "Jun 2022 - Present",
      description:
        "My role involves implementing the visual and interactive elements of websites or applications. I collaborate closely with UI/UX designers, utilizing modern technologies like React to create user-friendly interfaces. Ensuring cross-browser compatibility and optimizing web performance which are crucial aspects of my work. I also integrate frontend with backend APIs, address technical issues, and stay updated with the latest frontend trends and best practices to continually improve my skill set.",
    },
    {
      title: "Web Developer @Machini Technologies",
      date: "May 2022 - Jun 2022",
      description:
        "Optimize the user experience by building and maintaining the user interface, as well as developing usable web applications.",
    },
    {
      title: "Frontend Engineer @Side Hustle",
      date: "Apr 2022 - May 2022",
      description:
        "Optimize the user experience by building and maintaining the user interface, as well as developing usable web applications.",
    },
    {
      title: "Technical Support @WOFAK",
      date: "Jan 2020 - Dec 2020",
      description:
        "Assisted the staff on the technical aspect of the operation in their machines and made sure the system is running as well and troubleshoot the network incase of failure.",
    },
  ],
  educations: [
    {
      title: "MORINGA SCHOOL",
      date: "May 2022 - Nov 2022",
      description: "Software Engineering Course",
    },
    {
      title:
        "QUEENSBOROUGH COMMUNITY COLLEGE OF THE CITY UNIVERSITY OF NEW YORK (CUNY)",
      date: "May 2022 - Jun 2022",
      description: "CUNNY/QCC Software Engineering",
    },
    {
      title: "KABARAK UNIVERSITY",
      date: "May 2018 - Apr 2022",
      description: "Bachelor of Science in Information Technology (BSc IT)",
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
      title: "Web Developer",
      description: "⭐⭐⭐⭐⭐",
      icon: <Code />,
    },
    {
      title: "Product UI/UX Designer",
      description: "⭐⭐⭐⭐⭐",
      icon: <SettingsApplications />,
    },
    {
      title: "Power Apps Developer",
      description: "⭐⭐⭐⭐⭐",
      icon: <ViewAgenda />,
    },
    {
      title: "WordPress Developer",
      description: "⭐⭐⭐⭐⭐",
      icon: <AcUnit />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "JavaScript",
        "ReactJS",
        "TailwindCss",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NextJS", "PHP/Laravel", "Python"],
    },
    {
      title: "DATABASES",
      description: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      tags: "React",
      image: nikestorecommerce,
      title: "Nike Store Commerce",
      caption:
        "Website that allows someone to buy Nike shoes and look for more Nike shoes with their price tags and description on external links.",
      description: "",
      links: [
        {
          link: "https://fredouwebtech.netlify.app/",
          icon: <GitHub />,
        },
        {
          link: "https://nike-store-commercev1.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: inuaukulima,
      title: "Inua Ukulima",
      caption:
        "Website that will leverage the artificial intelligence (AI) technologies on farming produce to increase yield.",
      description: "",
      links: [
        {
          link: "https://inuaukulima.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: kenyadnsforum,
      title: "Kenya DNS Forum",
      caption:
        "An annual open event for stakeholders in the Domain Name Industry in East Africa and beyond organized by Kenya Network Information Centre (KeNIC).",
      description: "",
      links: [
        {
          link: "https://dnsforumreactwebsite.vercel.app",
          icon: <GitHub />,
        },
        {
          link: "https://dnsforum.ke",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: fredouwebtech,
      title: "Fredouweb Technologies",
      caption:
        "Forum that provides Web Design/Development & ICT related Services.",
      description: "This was my first website to deploy to production",
      links: [
        {
          link: "https://fredouwebtech.netlify.app/",
          icon: <GitHub />,
        },
        {
          link: "https://fredouwebtech.com/",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: sliquorstore,
      title: "Sliquor Store",
      caption:
        "Is a liquor store website that showcase the products that are available and users can search for the brands that they want and differnt categories offered on the platform.",
      description: "",
      links: [
        {
          link: "https://liquor-store-eta.vercel.app",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: cuisinedishes,
      title: "Cuisine Dishes",
      caption:
        "Educates people on how to cook different kinds of foods from different countries, showing them name of the meal, ingredients & instructions on how to cook & video tutorial",
      description: "",
      links: [
        {
          link: "https://github.com/Douglas254/Phase2-Final-Project",
          icon: <GitHub />,
        },
      ],
    },
    {
      tags: "Astro",
      image: managelandingpage,
      title: "Manage Landing Page",
      caption: "Frontend mentor challenge.",
      description: "",
      links: [
        {
          link: "https://github.com/Douglas254/Manage-Landing-Page",
          icon: <GitHub />,
        },
      ],
    },
    {
      tags: "Astro",
      image: astro,
      title: "Astro Website",
      caption:
        "Website that i created while learning Astro which is an all-in-one web framework for building fast, content-focused websites.",
      description: "",
      links: [
        {
          link: "https://astro-website-self.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: covid19tracker,
      title: "Covid-19-TrackerApp",
      caption: "Track the covid-19 Victims",
      description:
        "Track Covid-19 numbers all across the world displaying ~ Confirmed Cases, Deaths, New & Recovered Cases using the Covid-19 API",
      links: [
        {
          link: "https://github.com/Douglas254/Covid-19-TrackerApp",
          icon: <GitHub />,
        },
        {
          link: "https://covid-19-trackerweb.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: restaurantwebsite,
      title: "Restaurant Website",
      caption: "Website for your restaurant",
      description:
        "This is my project that i build while studying Front-End Web UI Frameworks and Tools:Bootstrap 4 on Coursera.",
      links: [
        {
          link: "https://github.com/Douglas254/Restaurant-Website",
          icon: <GitHub />,
        },
        {
          link: "https://ristorante-con-fusion-web.netlify.app",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "React",
      image: travelagencywebsite,
      title: "Travel Agency Website",
      caption: "Website for your travels",
      description:
        "This was my first project that i build when i started learning ReactJs Front-End library ",
      links: [
        {
          link: "https://github.com/Douglas254/Travel-Agency-Website",
          icon: <GitHub />,
        },
        {
          link: "https://travel-agency-web.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "DataScience/AI",
      image: diabetesprediction,
      title: "Diabetes Prediction",
      caption: "With the best model Accuracy Score of 0.7965 (0.80%)",
      description:
        "Predict whether a patient has diabetes or not, based on certain diagnostic measurements included in the dataset. 0 – Absence of Diabetes 1 – Presence of Diabetes",
      links: [
        {
          link: "https://github.com/Douglas254/Machine-Learning-Projects/blob/master/Diabetes-Prediction/DiabetesPrediction.ipynb",
          icon: <GitHub />,
        },
        {
          link: "https://github.com/Douglas254/Machine-Learning-Projects/blob/master/Diabetes-Prediction/DiabetesPrediction.ipynb",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "PHP/Laravel",
      image: ecommercelaravel,
      title: "E-Commerce-Laravel",
      caption: "built with laravel php-framework(Backend)",
      description:
        "E-Commerce Website built with laravel php-framework(Backend)",
      links: [
        {
          link: "https://github.com/Douglas254/Ecommerce-Laravel",
          icon: <GitHub />,
        },
      ],
    },
    {
      tags: " Wordpress",
      image: ecommercewordpress,
      title: "E-Commerce Wordpress",
      caption:
        "Find one for your online store and manage product your products",
      description: "Full functioning app with the M~pesa and DPO Integration",
      links: [
        {
          link: "https://github.com/Douglas254/Ecommerce-wordpress",
          icon: <GitHub />,
        },
      ],
    },
    {
      tags: "Microsoft",
      image: projectspro,
      title: "ProjectsPro",
      caption:
        "The ultimate PowerApps streamlined project tracking app. Real-time updates, collaboration, and effortless progress monitoring. Boost productivity, eliminate delays and achieve project success.",
      description:
        "The cutting-edge project tracking system using Microsoft's PowerApps is designed to revolutionize Project Management. Targeting the challenges encountered by companies handling multiple projects, the system seeks to replace manual processes, particularly those relying on Excel spreadsheets for tracking project progress.",
      links: [
        {
          link: "https://devpost.com/software/projectspro",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "Microsoft",
      image: parceldeliveriesadministration,
      title: "Parcel Delivery Administration",
      caption: "Power Apps Design Challenge",
      description: "",
      links: [
        {
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7123295496818806784/",
          icon: <Language />,
        },
      ],
    },
    {
      tags: "Others",
      image: douglasobaragithub,
      caption: "More Projects Found Here ",
      description: "Check GitHub for more project",
      links: [
        {
          link: "https://github.com/Douglas254?tab=repositories",
          icon: <GitHub />,
        },
      ],
    },
  ],
};

export default resumeData;
