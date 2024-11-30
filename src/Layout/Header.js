import React from "react";
import "./header.css";
import { useScroll } from "../context/refContext";

const Header = () => {
  const [value, setValue] = useScroll();
  return (
    <div>
      <div className="navbar">
        <div className="logo">YM</div>
        <h4
          className="nav-item"
          onClick={() => {
            setValue("about");
          }}
        >
          YOGITA MODI
        </h4>
        <h4
          className="nav-item"
          onClick={() => {
            setValue("about");
          }}
        >
          About Me
        </h4>
        <h4
          className="nav-item"
          onClick={() => {
            setValue("skills");
          }}
        >
          Skills
        </h4>
        <h4
          className="nav-item"
          onClick={() => {
            setValue("project");
          }}
        >
          Project
        </h4>
        <h4
          className="nav-item"
          onClick={() => {
            setValue("contact");
          }}
        >
          Contact
        </h4>
        <h4 className="nav-item">
          <a
            href="https://www.linkedin.com/in/yogita-modi-b55728169"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </h4>
        <h4 className="nav-item">
          <a href="https://github.com/YogitaModi" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Header;
