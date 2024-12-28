"use client";

import React, { useEffect } from "react";
import styles from "../Experience/Experience.module.css";
import ExperienceCard from "./ExperienceCard";
import { experienceArr } from "./ExperienceData";
const experienceHeaderText = "Experience";

function Experience() {
  const [experienceText, setExperienceText] = React.useState("E");
  const [textIndex, setTextIndex] = React.useState(1);

  useEffect(() => {
    if (textIndex < experienceHeaderText.length) {
      const timer = setTimeout(() => {
        setExperienceText((prev) => prev + experienceHeaderText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 95);
      return () => clearTimeout(timer);
    } else if (textIndex == experienceHeaderText.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  return (
    <div className={styles.container}>
      <div
        className={styles.titleText}
        style={experienceText.length < experienceHeaderText.length ? { borderRight: ".15em solid white" } : {}}
      >
        {experienceText}
      </div>
      {experienceArr.map((e, i) => (
        <ExperienceCard startDate={e.startDate}
        endDate={e.endDate}
        cardTitle={e.cardTitle}
        subTitle={e.subTitle}
        bullets={e.bullets}
        skills={e.skills}/>
      ))}
    </div>
  );
}

export default Experience;
