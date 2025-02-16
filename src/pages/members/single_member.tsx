import React from "react";
import "./profile.css";

//export {};

export interface MemberProps {
  name: string;
  role: string;
  description: string;
  photo: string;
  email: string;
}

export function Member(props: MemberProps) {
  function makeEmail(email: string): string {
    return "mailto:" + email;
  }

  return (
    <div className="member-card">
      <h2 aria-label="lab member role">{props.role}</h2>

      <div className="member-body">
        <img src={props.photo} alt="lab member picture" className="photo" />
        <div className="description">
          <h2 className="bold" aria-label="lab member name">
            {props.name}
          </h2>
          <p aria-label="lab member description">{props.description}</p>
          <br></br>
          <p>
            <a className="email" href={makeEmail(props.email)}>
              {props.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
