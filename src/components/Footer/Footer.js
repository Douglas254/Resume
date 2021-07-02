import React from "react";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a
            href="https://github.com/douglas254"
            target="_blank"
            rel="noreferrer"
          >
            Douglas254
          </a>
          .
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
