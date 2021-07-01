import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
};

export default resumeData;
