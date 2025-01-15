import React from "react";
import copyIcon from '../assets/copy.svg';

function CopyLink({ link }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy link.');
    });
  };

  return (
    <img
      className="copy"
      src={copyIcon}
      alt="Copy Link"
      onClick={handleCopy}
      style={{cursor: 'pointer'}}
    />
  );
}

export default CopyLink;