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
              <a href={props.github}><img src="https://img.icons8.com/dotty/50/000000/repository.png" alt="github-icon" id="port-icon"/></a> 
              <a href={props.deployedapp}><img src="https://img.icons8.com/carbon-copy/65/000000/internet.png" alt="app-icon" id="port-icon"/></a> 
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
    <h1 className="title">FULL STACK PROJECTS</h1>
    </div>

    <div className="key">
    <h2 class="key-title">Key:</h2>
    <img src="https://img.icons8.com/dotty/30/000000/repository.png" alt="github-icon" id="key-icon"/>= Git Hub Repository
    <img src="https://img.icons8.com/carbon-copy/35/000000/internet.png" alt="app-icon" id="key-icon"/>= Deployed Application
    </div>

    <div className="github-link">
    View my full <a href="https://github.com/nicolewallace09" className="link">projects list</a>
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
          />
        ))}
      </Wrapper>
    </>
    
    );
  }
  
  export default Projects;
