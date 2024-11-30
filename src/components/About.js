import React, { useRef, useEffect } from "react";
import { useScroll } from "../context/refContext";
import resume from "../resume/resume.pdf";
import profile from "../resume/profile.jpg";
const About = () => {
  const about = useRef();
  const [value] = useScroll();
  const handleScrolling = () => {
    window.scrollTo({ top: about.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    if (value === "about") handleScrolling();
  }, [value]);
  return (
    <>
      <div className="row about" ref={about}>
        <div className="col-md-1"></div>
        <div className="col-md-5 intro">
          <h1>I'm Yogita Modi</h1>
          <p>FULL STACK DEVELOPER</p>
          <p>
            I am a passionate and versatile Full-Stack Developer specializing in
            JavaScript, with hands-on experience in building robust web
            applications. My technical expertise spans modern frameworks like
            React.js, Node.js, and Express, alongside database management with
            MongoDB. Before diving into the tech world, I embarked on a journey
            in Electrical Engineering, where I honed problem-solving and
            analytical skills essential for complex system design. My
            engineering background complements my ability to architect scalable
            and efficient digital solutions. In addition to my technical career,
            I also pursued my passion for entrepreneurship by running a
            successful confectionery business. This experience sharpened my
            skills in operations management, creative problem-solving, and
            customer-centric approaches—attributes I seamlessly integrate into
            my development work. Bringing together a unique blend of technical
            prowess, entrepreneurial spirit, and a creative mindset, I thrive in
            environments that demand innovation, adaptability, and
            cross-disciplinary collaboration.
          </p>
        </div>
        <div className="col-md-6 profile">
          <div className="pro-pic">
            <img src={profile} alt="profile image" />
          </div>
          <div className="resume">
            <a href={resume} download="resume.pdf">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
