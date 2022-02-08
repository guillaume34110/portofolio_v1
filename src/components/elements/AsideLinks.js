import React from 'react';
import ProfilePicture from './ProfilePicture';
import './style/aside-link.css'

export default function AsideLinks() {

  const redirect = (e) => {
    const href = e.target.dataset.id
    window.open(href , '_blank')
  }
  const copy = (e) => {
    const mail = e.target.dataset.id
    navigator.clipboard.writeText(mail)
    alert("Copied the mail: " + mail);
  }
  return (
  <div className="aside-links">
    <div className = "aside-links-icons">
    <div className = "aside-links-redirect"><i data-id = "https://github.com/guillaume34110" className = "icon icon-github" onClick={redirect}></i></div>
    <div className = "aside-links-redirect"><i data-id = "gaillard.guillaum@gmail.com" className = "icon icon-email" onClick={copy}></i></div>
    </div>
    <ProfilePicture />
    <div className = "aside-links-icons">
    <div className = "aside-links-redirect"><i data-id="https://www.linkedin.com/in/guillaume-gaillard-a16014227/" className = "icon icon-linkedin" onClick={redirect}></i></div>
    <div className = "aside-links-redirect"><i data-id="https://drive.google.com/file/d/10wEQlaFEdpQRAFP3c5pZGhZod5gvbfHj/view?usp=sharing" className = "icon icon-cv" onClick={redirect}></i></div>
    </div>
  </div>
  );
}
