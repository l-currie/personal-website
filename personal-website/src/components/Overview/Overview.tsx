import React from "react";
import styles from "../Overview/Overview.module.css";
import Image from "next/image";

function Overview() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.sweText}>Software Engineer</div>
        <div className={styles.bodyText}>
          Ambitious Computer Science student studying at The University of British Columbia. Fullstack web developer
          with two years of industry experience. My most used technologies are React, TypeScript, C#, Dotnet, and SQL.
          Some of my hobbies include working out, cooking, and video editing. Making things with code is one of my
          lifelong passions, feel free to check out some of my recent projects below! Contact or reach out to me at any
          links below!
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.resumeButton}>View Resume</button>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.nameText}>Lucas Currie</h1>
        <div className={styles.imageContainer}>
          <Image src="/images/cbum.jpg" layout="fill" objectFit="cover" alt="cbum"/>
        </div>
      </div>
    </div>
  );
}

export default Overview;
