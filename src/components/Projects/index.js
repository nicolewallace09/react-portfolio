import React from 'react'; 
// import projects from src
import projects from '../../projects.json'

function ProjectCard(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>{props.name}</strong>
            </li>
            <li>
              <a href={props.deployedapp}>View Deployed Application</a> 
            </li>
            <li>
              <a href={props.github}>View Git Hub Page</a> 
            </li>
          </ul>
        </div>
      </div>
    );
}

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Projects () {  
    return (
    <>
    <div className="project-title">
    <h1 className="title">FULL STACK PROJECTS</h1>
    </div>
      <Wrapper>
        {projects.map((project) => (
          <ProjectCard 
          name={project.name}
          key={project.id}
          image={project.image}
          github={project.github}
          deployedapp={project.deployedapp}
          />
        ))}
      </Wrapper>
      </>
    );
  }
  
  export default Projects;
