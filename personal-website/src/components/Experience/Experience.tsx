"use client";

import React, { useEffect } from "react";
import styles from "../Experience/Experience.module.css";
import ExperienceCard from "./ExperienceCard";
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
      <ExperienceCard startDate="MAY 2023" endDate="SEPT 2024" cardTitle="Web Developer Co-op" subTitle="Cambio Earth Systems (BGC Engineering)" bullets={['aasdasdasdasd', 'jniasujiasdni', 'ajksasdjkasdjk', 'jkadasdjnkasdjnk']}/>
    </div>
  );
}

export default Experience;
