import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/myimage.jpeg';
import flowerImage from '../../assets/images/myflower.png';


function About() {
    return(
    <section className="title">
      <h1 class="name">NICOLE WALLACE</h1>
      {/* <img src="https://t4.ftcdn.net/jpg/03/03/32/51/240_F_303325182_SLF7omOzNoqO0uau5xtJYv1tqu8tOFNh.jpg" className="banner" alt="cover" /> */}
      <div className="row" id="about-container">
      <div className="col-3" id="myImage">
          <img src={flowerImage} className="image" alt="profile"/>
      </div>
      <div className="col-7">
      <center><img src={myImage} className="my-image" alt="nicole-profile"/></center>
      <h2 class="welcome">GET TO KNOW ME</h2>
      <p>
      I switched my gears from my education in Business to take on Web Development to keep challenging myself in ways I thought I never could. 
      Web Development allows me to continually create and creatively find new ways to make processes better. I always believed that anything can be improved and 
      there are different ways to solve problems. I have finally found my passion.
      <br></br>
      <br></br>
      With that being said, I am Full Stack Web Developer with a Bachelor’s Degree and 2+ years professional experience in Business Administration combined 
      with 3 different Liberal Arts Associate’s Degrees. I am a naturally curious person which makes me want to always learn new things. I am a problem-solver who 
      questions everything. I am a hard worker who doesn't take life too seriously and enjoys the little things. You will always find a smile on my face.
      <br></br>
      <br></br>
      When I am not working on projects, I love spending time with my dog, going to concerts, and going to Disneyland. I am also trying to work with Procreate for designs. :) Feel free to reach out to me with any questions!
      </p>
      </div>  
      </div>
    </section> 
)}
  
export default About;