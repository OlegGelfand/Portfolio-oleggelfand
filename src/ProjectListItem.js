import React, { useContext } from "react";
import { UniversalContext } from "./App";
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";


function ProjectListItem(props) {
  const projectContext = useContext(UniversalContext);
  // console.log("project context", projectContext.projects);
  const data = projectContext.projects;
 console.log('props',props)
  console.log('data', data)
  // console.log("index", projectContext.projectIndex);
  // console.log("props  from item", props.element);
  // const handleProjectClick = () => {
  //   console.log("here")
  //   projectContext.setProjectIndex("");
  //   history.push(`/projectdescription`);
  // };
  console.log("projectIndex",projectContext.projectIndex)
  return (
    <div>
      <Breakpoint medium up>
    <div className="allProjects" >
      <div className="project-squares" >
        <Link 
          className="projectsByTitle"
          to={{
            pathname: `/projects/` +props.index,
            state: {
              from: "root",
            },
          }}
        >
          <p>{props.element.gsx$title.$t}</p>
          <div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="9"
                    className="image"
                    src={props.element.gsx$image.$t}
                  ></img>
                </div>
                <div className="flip-card-back">
                  <img
                    alt="10"
                    className="image"
                    src={props.element.gsx$image2.$t}
                  ></img>
                  {props.element.gsx$description.$t}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </Breakpoint>
    <Breakpoint small down>
    <div className="allProjects-mobile" >
      <div className="project-squares-mobile" >
        <Link 
          className="projectsByTitle"
          to={{
            pathname: `/projects/` +props.index,
            state: {
              from: "root",
            },
          }}
        >
          <p>{props.element.gsx$title.$t}</p>
          <div>
            <div className="flip-card-mobile">
              <div className="flip-card-inner-mobile">
                <div className="flip-card-front-mobile">
                  <img
                    alt="9"
                    className="image-mobile"
                    src={props.element.gsx$image.$t}
                  ></img>
                </div>
                <div className="flip-card-back-mobile">
                  <img
                    alt="10"
                    className="image-mobile"
                    src={props.element.gsx$image2.$t}
                  ></img>
                  {props.element.gsx$description.$t}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </Breakpoint>
    </div>
  );
}
export default ProjectListItem;
