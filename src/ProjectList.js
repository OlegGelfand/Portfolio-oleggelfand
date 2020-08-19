import React, { useContext } from "react";
import { UniversalContext } from "./App";
import ProjectListItem from "./ProjectListItem";
import { Breakpoint } from "react-socks";


function ProjectList() {
  const projectContext = useContext(UniversalContext);
  const data = projectContext.projects;
  let renderProjects = this;

  if (data.feed) {
    renderProjects = data.feed.entry.map((e, index) => {
      return (
        <ProjectListItem element={e} key={index} index={index}/>
      );
    });
  }
  return (
    <div >
      <Breakpoint medium up>
      <div className="display-projects">{renderProjects}</div>
      </Breakpoint>
      <Breakpoint small down>
      <div className="display-projects-mobile">{renderProjects}</div>
      </Breakpoint>
    </div>
  );
}
export default ProjectList;
