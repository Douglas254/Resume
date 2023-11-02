import React, { useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

import "./Portfolio.css";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  // Hooks
  const [tabValue, setTabValue] = useState("All");
  const [ProjectDialog, setProjectDialog] = useState(false);

  return (
    <div container spacing={4} className="section pt_45 pb_45">
      {/* Title  */}
      <Grid item xs={12} className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12} className="tabs">
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          ></Tab>

          {/* mapping through the project array using `set` in javascript */}
          {[...new Set(resumeData.projects.map((item) => item.tags))].map(
            (tag, index) => (
              <Tab
                key={index}
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              ></Tab>
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12} className="projects-card">
        <Grid container spacing={4} className="project-container">
          {resumeData.projects.map((project, index) => (
            <React.Fragment key={index}>
              {tabValue === project.tags || tabValue === "All" ? (
                <Grid item xs={12} lg={6}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                        <div className="tech_stack">
                          {project?.techtools?.map(
                            ({ name, colortext }, index) => (
                              <span
                                className={`${colortext}-text-gradient`}
                                key={index}
                              >
                                #{name}
                              </span>
                            )
                          )}
                        </div>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>

        {/* implementin the modal/Dialog  */}
        <Dialog
          className="projectDialog"
          maxWidth="sm"
          open={ProjectDialog}
          onClose={() => setProjectDialog(false)}
        >
          <DialogTitle
            onClose={() => setProjectDialog(false)}
            className="modal_title"
          >
            {ProjectDialog.title}
          </DialogTitle>
          <img
            src={ProjectDialog.image}
            alt=""
            className="projectDialog_image"
          />
          <DialogContent>
            <Typography className="projectDialog_description">
              {ProjectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className="projectDialog_actions">
            {ProjectDialog?.links?.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="projectDialog_icons"
              >
                {link.icon}
              </a>
            ))}
          </DialogActions>
          <div className="tech_stack">
            {ProjectDialog?.techtools?.map(({ name, colortext }, index) => (
              <span className={`${colortext}-text-gradient`} key={index}>
                #{name}
              </span>
            ))}
          </div>
        </Dialog>
      </Grid>
    </div>
  );
};

export default Portfolio;
