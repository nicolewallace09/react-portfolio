import React from 'react'; 
// import myImage from assets
import myImage from '../../assets/images/myimage.jpeg'

function About() {
    return(
    <section className="title">
      <h1 class="name">Nicole Wallace</h1>
      {/* <img src={coverImage} className="banner" alt="cover" /> */}
      
      <div className="row" id="about-container">
      <div className="myImage" id="myImage">
          <img src={myImage} className="my-image" alt="nicole-profile"/>
      </div>
      <div className="col-8">
      <h2 class="welcome">GET TO KNOW ME</h2>
      <p>
      I switched my gears from my education in Business to take on Web Development to keep challenging myself in ways I thought I never could. 
      Web Development allows me to continually create and creatively find new ways to make processes better. I always believed that anything can be improved and 
      there are different ways to solve problems. I have finally found my passion.
      <br></br>
      <br></br>
      With that being said, I am Full Stack Web Developer with a Bachelor’s Degree and 2+ years professional experience in Business Administration combined 
      with 3 different Liberal Arts Associate’s Degrees. I am a naturally curious person which makes me want to always learn new things. I am a problem-solver who 
      questions everything. I am a hard worker who doesn't take life too seriously and enjoys the little things. But most importantly, I love to have a good laugh.
      </p>
      </div>  
      </div>
    </section> 
)}
  
export default About;