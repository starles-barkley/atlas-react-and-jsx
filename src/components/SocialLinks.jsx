import React from 'react';
import linkedinImage from '../assets/linkedin.svg';
import githubImage from '../assets/github.svg';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/starleejiles/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinImage} alt="LinkedIn" />
      </a>
      <a href="https://github.com/starles-barkley" target="_blank" rel="noopener noreferrer">
        <img src={githubImage} alt="GitHub" />
      </a>
    </div>
  );
}

export default SocialLinks;
