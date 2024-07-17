import React from "react";
import firstProjectImg from "../images/pexels-goumbik-574071.jpg";
import secontProjectImg from "../images/pexels-pixabay-459653.jpg";
import thirdProjectImg from "../images/pexels-designecologist-1779487.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";

const data = [
  {
    img: firstProjectImg,
    title: "Phone store",
    subTitle: "react web development",
    projectDate: "July 10, 2024",
  },
  {
    img: secontProjectImg,
    title: "Resort App",
    subTitle: "react web development with contentful",
    projectDate: "July 10, 2024",
  },
  {
    img: thirdProjectImg,
    title: "project flex",
    subTitle: "design web development",
    projectDate: "July 10, 2024",
  },
];

const Projects = () => {
  return (
    <Section
      title="projects"
      titleColor="title-color"
      className="projects"
      showThreeGrids={true}
    >
      {data.map((list, index) => (
        <article className="projects-item" key={index}>
          <img src={list.img} alt="" />
          <div className="img-text">
            <h1>{list.title}</h1>
            <h6>{list.subTitle}</h6>
          </div>
          <div className="img-footer">
            <span>
              <FontAwesomeIcon icon={faComment} /> 0
            </span>
            <div className="footer-date">{list.projectDate}</div>
          </div>
        </article>
      ))}
    </Section>
  );
};

export default Projects;
