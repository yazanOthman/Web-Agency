import React from "react";
import firstProjectImg from "../images/pexels-goumbik-574071.jpg";
import secontProjectImg from "../images/pexels-pixabay-459653.jpg";
import thirdProjectImg from "../images/pexels-designecologist-1779487.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";

const data = [
  {
    img: firstProjectImg,
    title: "React post",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis animi mollitia illo sequi deserunt.",
    projectDate: "July 10, 2024",
  },
  {
    img: secontProjectImg,
    title: "Angular post",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis animi mollitia illo sequi deserunt.",
    projectDate: "July 10, 2024",
  },
  {
    img: thirdProjectImg,
    title: "Javascript post",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis animi mollitia illo sequi deserunt.",
    projectDate: "July 10, 2024",
  },
];

const Posts = () => {
  return (
    <Section
      title="recent posts"
      titleColor="title-color"
      showThreeGrids={true}
      className="posts"
    >
      {data.map((list, index) => (
        <article key={index} className="posts-item">
          <div className="image-container">
            <img src={list.img} alt="" />
            <button href="">
              <span className="icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </button>
          </div>
          <div className="text-container">
            <h1> {list.title}</h1>
            <p>{list.description}</p>
            <button>Read more</button>
          </div>
        </article>
      ))}
    </Section>
  );
};

export default Posts;
