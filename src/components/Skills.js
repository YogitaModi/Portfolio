import React, { useRef, useEffect } from "react";
import { useScroll } from "../context/refContext";
import mongodb from "../resume/mongodb.png";
import css from "../resume/css.png";
import express from "../resume/express.png";
import node from "../resume/node.png";
import react from "../resume/react.png";
import bootstrap from "../resume/bootstrap.png";
import js from "../resume/js.png";
import web from "../resume/web.png";
import frontend from "../resume/frontend.png";

const Skills = () => {
  const skills = useRef();
  const [value] = useScroll();
  const handleScrolling = () => {
    window.scrollTo({ top: skills.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    if (value === "skills") handleScrolling();
  }, [value]);
  return (
    <>
      <div className="pro-heading">
        <h1>Skills</h1>
      </div>
      <div ref={skills} className="skills">
        <div className="skills">
          <h5 className="skill" data-aos="fade-right">
            <img src={js} alt="logo" />
            Javascript
          </h5>
          <h5 className="skill" data-aos="fade-down">
            {" "}
            <img src={css} alt="logo" />
            Css
          </h5>
          <h5 className="skill" data-aos="fade-left">
            {" "}
            <img src={bootstrap} alt="logo" />
            Bootstrap
          </h5>
          <h5 className="skill" data-aos="fade-right">
            {" "}
            <img src={express} alt="logo" />
            Express Js
          </h5>
          <h5 className="skill" data-aos="zoom-in-up">
            {" "}
            <img src={react} alt="logo" />
            React Js
          </h5>
          <h5 className="skill" data-aos="fade-left">
            {" "}
            <img src={node} alt="logo" />
            Node Js
          </h5>
          <h5 className="skill" data-aos="fade-right">
            {" "}
            <img src={mongodb} alt="logo" />
            Mongo DB
          </h5>
          <h5 className="skill" data-aos="zoom-in-up">
            {" "}
            <img src={web} alt="logo" />
            Web Development
          </h5>
          <h5 className="skill" data-aos="fade-left">
            {" "}
            <img src={frontend} alt="logo" />
            Frontend Development
          </h5>
          <h5
            className="skill"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {" "}
            <img src={mongodb} alt="logo" />
            Backend Development
          </h5>
          <h5
            className="skill"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {" "}
            <img src={mongodb} alt="logo" />
            Full Stack Development
          </h5>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Skills;
