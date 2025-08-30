import * as React from "react";
import styles from "../styles/sections/InfoCard.module.scss";

export function InfoCard({ icon, title, description }) {
  return (
    <div className={styles["info-card"]}>
      <img loading="lazy" src={icon} alt="" className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button
        className={styles["read-more"]}
        aria-label={`Read more about ${title}`}
      >
        Read More <span className={styles["symbol"]}>&gt;</span>
      </button>
    </div>
  );
}
