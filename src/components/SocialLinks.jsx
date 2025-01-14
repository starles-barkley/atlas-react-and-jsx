import React from "react";
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

function SocialLinks() {
  return <div className="social-links">
    <a href="https://www.linkedin.com/in/starleejiles/" src={linkedin}></a>
    <a href="https://github.com/starles-barkley" src={github}></a>
  </div>
}

export default SocialLinks;