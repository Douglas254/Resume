import React from "react";
import { Typography } from "@material-ui/core";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Douglas</Typography>
        <Typography className="title">Web Developer</Typography>
      </div>

      <figure className="profile_image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/douglasProfile.jpg`}
          alt="douglas profile pic"
        />
      </figure>

      <div className="profile_information">
        Insert Timeline
        <br />
        <button>My Button here</button>
      </div>
    </div>
  );
};

export default Profile;
