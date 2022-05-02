import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  ScreenSearchDesktop,
  SettingsApplications,
  Language,
  Web,
} from "@mui/icons-material";
import image1 from "../assets/projects/covid-19-tracker.jpg";
import image2 from "../assets/projects/Restaurant-Website.jpg";
import image3 from "../assets/projects/Travel-Agency-Website.jpg";
import image4 from "../assets/projects/diabetes-prediction.jpg";
import image5 from "../assets/projects/douglasobara-github.jpg";
import image6 from "../assets/projects/fredouwebtech.jpg";
import image7 from "../assets/projects/ecommercewordpress.jpg";
import image8 from "../assets/projects/ecommercelaravel.jpg";

const resumeData = {
  name: "Douglas Obara",
  title: "Web Developer",

  birthday: "30th July 1997",
  email: "douglasobara97@gmail.com",
  mailto: "mailto:douglasobara97@gmail.com",
  address: "8303 - 00200 , Kibera Drive.",
  phone: "(+254)7 42 608 717",
  tel: "tel:+254742608717",
  about:
    "Hello!, My name is Douglas Obara student at Kabarak University hounding Bachelor of Science in Information Technology(BSc IT),this where i was introduced to the Web Application Programming and since then i developed interest in building web application projects and work with some machine learning models algorithms when i was studying DataScience.I am a Front-End Developer.I just fell in love with ReactJs as my favourite JavaScript library for front-end technology.\n\nCurrently, I'm searching for a position where I may advance in my profession and learn new skills. I always believe in myself in everything I do since I am a goal-oriented person that is eager to learn new technology in order to solve problems and help the organization achieve its goals and objectives successfully and efficiently. Reading, coding, research, hiking, listening to music, and dancing to the beat are some of my favorite activities.",

  socials: {
    Facebook: {
      link: "https://web.facebook.com/douglas.omwando.92/",
      text: "MyFacebook",
      icon: <Facebook />,
    },
    Twitter: {
      link: "https://twitter.com/Douglas__Obara",
      text: "MyTwitter",
      icon: <Twitter />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/douglas-obara/",
      text: "MyLinkedin",
      icon: <LinkedIn />,
    },
    GitHub: {
      link: "https://github.com/douglas254",
      text: "MyGithub",
      icon: <GitHub />,
    },
  },

  experiences: [
    {
      title: "Web Developer @Machini Technologies",
      date: "May 2022 - Present",
      description:
        "This is where I optimize the user experience by building and maintaining the user interface, as well as developing usable web and mobile applications.",
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
      title: "KABARAK UNIVERSITY",
      date: "May 2018 - Present",
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
      title: "Web Design/Development",
      description:
        "I have experience in website development and thus i can write code, update websites, design layouts, edit website content and make adjustments based on the client feedback.",
      icon: <Web />,
    },
    {
      title: "Web Maintenance",
      description:
        "This is to take care of your web maintenance duties so that you can concentrate in running your business and attending to core duties.",
      icon: <SettingsApplications />,
    },
    {
      title: "SEO",
      description:
        "I can improve the quality and quantity of your website traffic or a web page from search engines.",
      icon: <ScreenSearchDesktop />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "Javascript", "Bootstrap", "Material UI"],
    },
    {
      title: "BACK-END",
      description: ["PHP", "Python", "NodeJS", "Java"],
    },
    {
      title: "DATABASES",
      description: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      tags: "React",
      image: image6,
      title: "Fredouweb Technologies",
      caption: "Fredouwebtech Website",
      description: "This the first website to deploy to production",
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
      image: image1,
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
      image: image2,
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
      image: image3,
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
      image: image4,
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
      image: image8,
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
      image: image7,
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
      tags: "Others",
      image: image5,
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
