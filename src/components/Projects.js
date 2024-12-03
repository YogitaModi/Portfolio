import React, { useRef, useEffect } from "react";
import choco from "../resume/choco.webm";
import { useScroll } from "../context/refContext";

const Projects = () => {
  const project = useRef();
  const [value] = useScroll();
  const handleScrolling = () => {
    window.scrollTo({ top: project.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    if (value === "project") handleScrolling();
  }, [value]);
  return (
    <>
      <div className="pro-heading">
        <h1>Projects</h1>
      </div>
      <div ref={project} className="projects">
        <div className="project" data-aos="zoom-in">
          <div className="pro-video">
            <video
              src={choco}
              width="410"
              height="230"
              autoplay="true"
              loop
              muted
            ></video>
          </div>
          <h1 className="pro-title">E-Commerce Website</h1>
          <div className="tags">
            <p className="tag">CSS</p>
            <p className="tag">JAVASCRIPT</p>
            <p className="tag">EXPRESS JS</p>
            <p className="tag">MONGO DB</p>
            <p className="tag">NODE JS</p>
            <p className="tag">React Js</p>
          </div>

          <p className="pro-desc">
            A fully-fledged E-Commerce platform using the MERN stack and context
            API. Having integrated features like Shopping cart, user
            Authentication, PayPal and card payments. Deployed back-end part on
            render and frontend on netlify.
          </p>
          <a
            href="https://fullstack-ecommerce-website.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-link" style={{ color: "#663399" }} />
          </a>
        </div>
        <div className="project" data-aos="zoom-in">
          <h1 className="pro-title">Memory Game</h1>
          <div className="tags">
            <p className="tag">CSS</p>
            <p className="tag">JAVASCRIPT</p>
            <p className="tag">Bootstrap</p>
            <p className="tag">React Js</p>
          </div>
          <p className="pro-desc">
            I have created hashtag #Bingo-Blaster game using React JS library.
          </p>
          <p className="pro-desc">
            Bingo-blaster is a memory game with different features like
            Shuffling the cards, setting up the timer and for challenging
            itself, can set the number of moves for completing the game.
          </p>
          <a
            href="https://bingo-blaster.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-link" style={{ color: "#663399" }} />
          </a>
        </div>
        <div className="project" data-aos="zoom-in">
          <h1 className="pro-title">News App</h1>
          <div className="tags">
            <p className="tag">CSS</p>
            <p className="tag">JAVASCRIPT</p>
            <p className="tag">Bootstrap</p>
            <p className="tag">React Js</p>
          </div>
          <p className="pro-desc">
            I have created hashtag #News Rocket using React JS library.
          </p>
          <p className="pro-desc">
            News Rocket is a news reading wwebsite created using external api
            for news data. You can read diferent cateories news like science,
            sports, games, techhnoloy, health etc on this website.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
