import { Grid, Paper, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CustomButton from "../../components/Button/Button";
import "./Resume.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import { TimelineContent, TimelineDot } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";

const Resume = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm();

  return (
    <React.Fragment>
      {/* About Me  */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"body2"} className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experience  */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {/* mapping through the array */}
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {/* mapping through the array */}
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services  */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <icon className="service_icon">{service.icon}</icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills  */}
      <Grid container className="section pb_45 gray_bg p_50">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {/* mapping through the skills array */}
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact  */}
      <Grid container spacing={6} className="section pt_45 pb_45">
        {/* contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <form className="form" method="POST">
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      {...register("name", {
                        required: "Name is Required",
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("name");
                      }}
                      label="Name"
                      required
                    />
                    {errors.name && (
                      <small className="text-danger">
                        {errors.name.message}
                      </small>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid email address",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                      label="Email"
                      required
                    />
                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message}
                      </small>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      {...register("message", {
                        required: "Message is Required",
                        minLength: {
                          value: 10,
                          message: "Minimum Required length is 10",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("message");
                      }}
                      label="Message"
                      multiline
                      rows={4}
                      required
                    />
                    {errors.message && (
                      <small className="text-danger">
                        {errors.message.message}
                      </small>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text="Submit" type="submit" />
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>

        {/* contact information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>
                      <RoomIcon className="material-design-icon" />
                      Adress:
                    </span>
                    <span className="contact-address">
                      {resumeData.address}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>
                      <PhoneIcon className="material-design-icon" />
                      Phone:
                    </span>
                    <a className="contact" href={resumeData.tel}>
                      {resumeData.phone}
                    </a>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>
                      <EmailIcon className="material-design-icon" />
                      Email:
                    </span>
                    <a className="contact" href={resumeData.mailto}>
                      {resumeData.email}
                    </a>
                  </Typography>
                </Grid>

                {/* social icon  */}
                <Grid item xs={12}>
                  <Grid container className="contactInfo_socialsContainer">
                    {/* mapping through the social object */}
                    {Object.keys(resumeData.socials).map((key) => (
                      <Grid item className="contactInfo_social">
                        <Tooltip title={resumeData.socials[key].text}>
                          <a href={resumeData.socials[key].link}>
                            {resumeData.socials[key].icon}
                          </a>
                        </Tooltip>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Resume;
