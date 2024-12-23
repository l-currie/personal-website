"use client";

import React, { useEffect } from "react";
import styles from "../Overview/Overview.module.css";
import Image from "next/image";

const nameHeaderText = "Hello, I'm Lucas Currie";

function Overview() {
  const [helloText, setHelloText] = React.useState("H");
  const [textIndex, setTextIndex] = React.useState(1);

  useEffect(() => {
    if (textIndex < nameHeaderText.length) {
      const timer = setTimeout(() => {
        setHelloText((prev) => prev + nameHeaderText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 95);
      return () => clearTimeout(timer);
    } else if (textIndex == nameHeaderText.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div>
          <div className={styles.nameHeaderContainer}>
            <div
              className={styles.nameText}
              style={helloText.length < nameHeaderText.length ? { borderRight: ".15em solid white" } : {}}
            >
              {helloText}
            </div>
            {textIndex > nameHeaderText.length && <div className={styles.handWave}>👋</div>}
          </div>
          <div className={styles.sweText}>Software Engineer</div>
        </div>
        <div className={styles.bodyText}>
          Ambitious Computer Science student studying at The University of British Columbia. Fullstack web developer
          with two years of industry experience. My most used technologies are React, TypeScript, C#, Dotnet, and SQL.
          Some of my hobbies include working out, cooking, and video editing. Making things with code is one of my
          lifelong passions, feel free to check out some of my recent projects below! Contact or reach out to me at any
          links below!
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.resumeButton}>View Resume</button>
          <div className={styles.linksContainer}>
            <a
              target="_blank"
              href="https://github.com/l-currie"
              rel="noopener noreferrer"
              className={styles.linkButtonContainer}
            >
              <Image
                className={styles.linkButton}
                src="/images/github.png"
                layout="fill"
                objectFit="cover"
                alt="github"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lucascurrie/"
              rel="noopener noreferrer"
              className={styles.linkButtonContainer}
            >
              <Image
                className={styles.linkButton}
                src="/images/linkedin.png"
                layout="fill"
                objectFit="cover"
                alt="github"
              />
            </a>
            <a
              target="_blank"
              href="mailto:lcurrie1@student.ubc.ca"
              rel="noopener noreferrer"
              className={styles.linkButtonContainer}
            >
              <Image
                className={styles.linkButton}
                src="/images/mail.png"
                layout="fill"
                objectFit="cover"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <Image src="/images/cbum.jpg" layout="fill" objectFit="cover" alt="cbum" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
