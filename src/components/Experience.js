import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { MdWork } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        //const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill style={{backgroundColor: work.type === "work" ? "#53cbce" : "#e76c5f"}} className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        let textProcessed = work.text.map((t, i) => {
          return (
            <p key={i} className="experience-text">
              {t}
            </p>
          );
        });
        /* var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        }); */
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: work.type === "work" ? "#01a2a5" : "#c84224",
              color: "#fff",
              textAlign: "center",
            }}
            icon={work.type === "work" ? <MdWork/> : <MdSchool/>}
            key={i}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "8px", marginBottom: "4px" }}>
              {textProcessed}
            </div>
            <div style={{ textAlign: "left", marginTop: "15px", marginBottom: "4px" }}>
              {mainTech}
            </div>
            {/* <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div> */}
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#efe1bd",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
