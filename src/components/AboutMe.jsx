import React from "react";
import professionalPhoto from '../assets/professional-photo.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <img
        src={professionalPhoto}
        alt="Professional"
        style={{width: '150px', borderRadius: '50%'}}
      />
      <p>
      Hello! My name is Starlee Jiles, and I am studying software engineering at Atlas School with a specialization in full-stack web development. My favorite technologies include React, Python, and MongoDB, as I enjoy building dynamic web applications. 
      After graduation, I aspire to work as either a full-stack web developer or potentially a project manager, building impactful applications that make a difference.
      When I’m not coding, I lead a young adults group and plan events for us to foster community. I also enjoy spending time with family, friends, and going hiking with my dogs!
      I’m always excited to learn and grow, both professionally and personally!
      </p>
    </div>
  )
}

export default AboutMe;