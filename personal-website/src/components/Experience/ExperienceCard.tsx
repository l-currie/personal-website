import React from "react";
import styles from "../Experience/Experience.module.css";

type ExperienceCardProps = {
  startDate: string;
  endDate: string;
  cardTitle: string;
  subTitle: string;
  bullets: string[];
};

function ExperienceCard({ startDate, endDate, cardTitle, subTitle, bullets }: ExperienceCardProps) {
  return (
    <div className={styles.cardContaienr}>
      <div className={styles.leftContainer}>
        <div className={styles.timeStampContainer}>
          <div className={styles.timeStampText}>{endDate}</div>
          <span className={styles.timeStampDot}></span>
        </div>
        <div className={styles.sideBar}></div>
        <div className={styles.timeStampContainer}>
          <div className={styles.timeStampText}>{startDate}</div>
          <span className={styles.timeStampDot}></span>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.cardHeaderContainer}>
          <div className={styles.cardTitleText}>{cardTitle}</div>
          <div className={styles.subTitleText}>{subTitle}</div>
        </div>
        <div className={styles.bulletContainer}>
          {bullets.map((b, i) => (
            <div className={styles.bulletText} key={i} dangerouslySetInnerHTML={{ __html: `- ${b}` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
