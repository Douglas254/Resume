import React from "react";
import { Typography } from "@material-ui/core";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlined from "@material-ui/icons/PersonOutlineOutlined";

import resumeData from "../../utils/resumeData";
import resume from "../../static/DouglasObaraCV.pdf";

import "./Profile.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetApp from "@material-ui/icons/GetApp";

// function to dislay the timeline items on the profile section
const CustomTimelineItem = ({ title, text, socialLinkEndpoint, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span> &nbsp;
          <a href={link} target="_blank" rel="noreferrer">
            {socialLinkEndpoint}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>&nbsp;
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img
          src={`${process.env.PUBLIC_URL}/douglasProfile.jpg`}
          alt="douglas profile pic"
        />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlined />}>
          {/* calling CustomTimelineItem function */}
          <CustomTimelineItem title="Name" text={resumeData.name} />
          {/* <CustomTimelineItem title="Birthday" text={resumeData.birthday} /> */}
          <CustomTimelineItem title="Role" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {/* { mapping through socials object} */}
          {Object.keys(resumeData.socials).map((key,index) => (
            <CustomTimelineItem
            key={index}
              title={key}
              socialLinkEndpoint={resumeData.socials[key].socialLinkEndpoint}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer noopener"
            id="resumelink"
          >
            <CustomButton text="Download Cv" icon={<GetApp />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
