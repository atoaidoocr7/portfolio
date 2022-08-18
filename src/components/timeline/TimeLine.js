import './TimeLine.css'
import { ReactComponent as WorkIcon } from "../../svg-images/work.svg";
import { ReactComponent as SchoolIcon } from "../../svg-images/school.svg";

import { timelineElements } from "../../data/projects";
import { useContext } from "react";

import { ThemeContext } from "../modes/context";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function TimeLine() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title">Work Experience</h1>
      <VerticalTimeline
        bodyContainerStyle={{
          background: 'red',
          padding: '20px',
        }}
        className='vertical'
        lineColor={"black"}>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (

            <VerticalTimelineElement
            contentStyle={ {backgroundColor: darkMode && "#333"} }
              key={Math.random.toString()+ 10 * Math.random().toString()}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >

              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {!showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}


            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>


  );
}

