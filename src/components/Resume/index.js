import React from 'react'; 
import { Row, Col } from 'react-bootstrap';

function Resume() {
    return(
        <>
        <h1 className="resume">RESUME</h1>
        <div class="resume-intro">
            <Row>
                <Col lg={8} md={12}>
                    Full Stack Web Developer who possesses technical skills within the MERN stack. Always continuously learning and trying to do better.
                </Col>
            </Row>
        </div>

        <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
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
                </Col>
        
            <Col lg={4} md={12}>
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
            </Col>
        </Row>
        </div>
        </>
)}
  
export default Resume;