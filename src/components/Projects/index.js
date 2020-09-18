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
              <p className="project-title">{props.name}</p>
            </li>
            <li>
            <p className="project-description">{props.description}</p>
            </li>
            <li>
              <div className="project-icons">
              <a href={props.github}><img src="https://img.icons8.com/ios/40/000000/github.png" alt="github-icon" id="port-icon"/></a> 
              <a href={props.deployedapp}><img src="https://img.icons8.com/metro/35/000000/cursor.png" alt="app-icon" id="port-icon"/></a> 
              </div>
            </li>
            <li>
            {props.skills}
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
    <div className="project">
    <h1 className="title">full stack projects</h1>
    </div>

      <Wrapper>
        {projects.map((project) => (
          <ProjectCard 
          name={project.name}
          key={project.id}
          image={project.image}
          github={project.github}
          deployedapp={project.deployedapp}
          skills={project.skills}
          description={project.description}
          />
        ))}
      </Wrapper>
    </>
    
    );
  }
  
  export default Projects;
