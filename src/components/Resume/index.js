import React from 'react'; 

function Resume() {
    return(
        <>
        <h1 className="resume">RESUME</h1>
        <div class="row resume-intro">
            <div class="col-8">
                Full Stack Web Developer who possesses technical skills within the MERN stack. Always continuously learning and trying to do better.
                <br></br>
                Download my full <a href="https://docs.google.com/document/d/1PcqDKdG9-S-FM858u9WyHSUjUKZblV1tfPsq9p5y5Gc/edit?usp=sharing" class="link">resume</a><br></br>
            </div>
        </div>

        <div class="row resume-container">
            <div class="col-4">
            <h2 class="resume">FRONT END PROFICIENCIES</h2>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    jQuery
                </li>
                <li>
                    React.js
                </li>
                <li>
                    Framework (Bootstrap, Materalize)
                </li>
                <li>
                    UI/UX Design
                </li>
                <li>
                    Responsive Web Design
                </li>
            </ul>
        </div>
        

        <div class="col-4">
        <h2 class="resume">BACK END PROFICIENCIES</h2>
            <ul>
                <li>
                    Node.js
                </li>
                <li>
                    Express.js
                </li>
                <li>
                    MySQL (mysql lite3, mysql2)
                </li>
                <li>
                    NoSQL (MongoDB, Mongoose)
                </li>
                <li>
                    API's (web, third-party, RESTful, server-side)
                </li>
                <li>
                    Templating language (Handlebars)
                </li>
            </ul>
        </div>
        </div>
        </>
)}
  
export default Resume;