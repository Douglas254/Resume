import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { AssignmentOutlined, WebOutlined } from "@material-ui/icons";

const resumeData = {
  name: "Douglas Obara",
  title: "Web Developer",

  birthday: "30th July 1997",
  email: "douglasobara97@gmail.com",
  address: "34567, Nairobi 00100.",
  phone: "+2547 42 608 717",

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

  about:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  experiences: [
    {
      title: "Work 1",
      date: "2018 - Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work 2",
      date: "Aug 2016 - Sep 2018",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work 3",
      date: "2014 - 2015",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],

  educations: [
    {
      title: "Education 1",
      date: "2018 - Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Education 2",
      date: "Aug 2016 - Sep 2018",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Education 3",
      date: "2014 - 2015",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
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
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebases", "No SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],
};

export default resumeData;
