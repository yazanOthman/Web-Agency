import React from "react";
import Section from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import {
  faLineChart,
  faPencilSquare,
  faPieChart,
} from "@fortawesome/free-solid-svg-icons";
import bgImg from "../images/pexels-brett-sayles-2881233.jpg";

const data = [
  {
    icon: faGear,
    postTitle: "web development",
    postDescription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rem autem consectetur, officia cumque maiores.",
    postClass: "service-item service-item-black",
  },
  {
    icon: faPencilSquare,
    postTitle: "Design & branding",
    postDescription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rem autem consectetur, officia cumque maiores.",
    postClass: "service-item service-item-white",
  },
  {
    icon: faPieChart,
    postTitle: "analytics",
    postDescription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rem autem consectetur, officia cumque maiores.",
    postClass: "service-item service-item-black",
  },
  {
    icon: faLineChart,
    postTitle: "seo & smm",
    postDescription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rem autem consectetur, officia cumque maiores.",
    postClass: "service-item service-item-white",
  },
];

const Services = () => {
  return (
    <Section title="services" bgImg={bgImg} textColor="white">
      {data.map((item, index) => (
        <article key={index} className={item.postClass}>
          <div className="front-text">
            <span className="icon">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <h1>{item.postTitle}</h1>
          </div>
          <div className="back-text">
            <h1>{item.postTitle}</h1>
            <p>{item.postDescription}</p>
            <button>read more</button>
          </div>
        </article>
      ))}
    </Section>
  );
};

export default Services;
