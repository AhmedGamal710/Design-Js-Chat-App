import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://i.pinimg.com/originals/26/b1/61/26b1613b315bc6e6b8f220499014b427.jpg" />
          </div>
          <h4>Jimmy</h4>
          <p>Super-Fx</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
          A software engineer, Full stack developer and a CS student. I enjoy being challenged an engaging with projects I love creativity in design and i have worked on multiple projects using modern technologies and standards.
          </div>
        </div>
      </div>
    );
  }
}
