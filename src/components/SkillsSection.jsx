import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFileText,
  faMap,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "code",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam nostrum dolor alias iure voluptatum ipsum! Aut repellat corporis omnis?",
    icon: faCode,
  },
  {
    title: "documented",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam nostrum dolor alias iure voluptatum ipsum! Aut repellat corporis omnis?",
    icon: faFileText,
  },
  {
    title: "optimized",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam nostrum dolor alias iure voluptatum ipsum! Aut repellat corporis omnis?",
    icon: faMap,
  },
  {
    title: "retina",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam nostrum dolor alias iure voluptatum ipsum! Aut repellat corporis omnis?",
    icon: faDesktop,
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        {data.map((list) => (
          <article className="skills-item">
            <span className="icon">
              <FontAwesomeIcon icon={list.icon} />
            </span>
            <h1>{list.title}</h1>
            <p>{list.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
