import { Project, User } from "../../types/models";

interface ProjectCardProps{
  projects: Project[],
  user: User | null | number;
  handleDeleteProject: (name) => void
}

const ProjectCard = (props:ProjectCardProps):JSX.Element => {
  const {projects} = props 
  if(!projects.length) return <p>Loading...</p>
  return ( 
    <>
      {projects.map((project)=>
        <>
          <div className="projectCard">
          <p>Name:{project.name}</p>
          <p>Photo:{project.picture}</p>
          <p><a href={project.github}>Github</a></p>
          <p><a href={project.app}>Deployed App</a></p>
          
          {project.profileId === props.user.id &&
            <div>
              <button onClick={() => props.handleDeleteProject(project.name)}>Delete</button>
            </div>
          }
          </div>
        </>
      )}
    </>
    
  );
}

export default ProjectCard;