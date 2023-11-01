import React from "react";
import { Button } from "@material-ui/core";

import "./Button.css";

const CustomButton = ({ text, icon, loading }) => {
  // console.log(loading);
  return (
    <Button
      className={loading ? "disabled custom_btn" : "custom_btn"}
      type="submit"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
