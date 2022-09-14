import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../data";
import './education.css'


export default function Education() {

  return (
    <div className="educ" id="educ">
      {" "}
      <h2 className="educ-title">Education</h2>
      <VerticalTimeline style={"--line-color: #ff1212;"}>
        {education.map((educ) => {
          return (
            <VerticalTimelineElement
              key={educ.id}
              date={educ.date}
              dateClassName={educ.date}
              iconStyle={{
                background: "#fc3da0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
              lineColor={"red"}
              icon={<i className="fa-solid fa-graduation-cap"></i>}
            >
              <h4 className="vertical-timeline-element-title">
                {educ.diplome}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                {educ.niveau}
              </h5>
              <p>{educ.ecole}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
