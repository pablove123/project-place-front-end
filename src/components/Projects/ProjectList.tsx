import { Project, User } from "../../types/models";
import ProjectCard from "../ProjectCard/projectCard";

interface ProjectProps{
  projects: Project[], 
  user: User| null;
  handleDeleteProject: (name:string) => void;
  handleUpdateProject: (projectData:Project) => void
}
const ProjectList = (props:ProjectProps) => {
  const {projects} = props
  return (
    <>
    <h1 id="projectListHeader">Posted Projects</h1>
    <div className='projectListContainer'>
    <ProjectCard projects={projects} user={props.user} handleDeleteProject={props.handleDeleteProject} handleUpdateProject={props.handleUpdateProject}/>
    </div>
    </>
    );

}

export default ProjectList;
