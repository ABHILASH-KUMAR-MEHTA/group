import * as React from "react";
import { InfoCard } from "../components/card";
import { aboutData, cards } from "../data/cards";
import styles from "../styles/sections/AboutSection.module.scss";

export default function AboutSection() {
  return (
    <section className={styles["about-section"]} aria-label="About Us Section">
      <div className={styles["content-container"]}>
        {/* Left Section */}
        <div className={styles["left-section"]}>
          <h2 className={styles.subtitle}>{aboutData.title}</h2>
          <h1 className={styles["main-heading"]}>{aboutData.mainHeading}</h1>
          <p className={styles.description}>{aboutData.description}</p>

          <div className={styles["actions-container"]}>
            <button className='theme-btn one' style={{ height: '58px' }}>Read More</button>
            <div className={styles["founder-section"]}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/bfcec1cfd00ce4555d755e48ac311890832103c1772c5146a9474da3509331ee"
                alt="Signature"
                className={styles.signature}
              />
              <div className={styles["founder-details"]}>
                <p className={styles["founder-name"]}>
                  {aboutData.founder.name}

                  <span className={styles["founder-title"]}>
                    {aboutData.founder.title}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className={styles["download-section"]}>
            <span className={styles["download-text"]}>
              Download our latest presentation
            </span>
            <a className={styles["download-btn"]}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/8ec0fe90232605c98de81317290b7387e3e5de93e849be98cccf871705e44c48"
                alt="Download"
                className={styles["download-icon"]}
              />
            </a>
          </div>
        </div>
        <div className="pd_top_40"></div>
        {/* Right Section */}
        <div className={styles["right-section"]}>
          <div
            className={`${styles["image-container"]} ${styles["clip-diagonal"]}`}
          >
            <img src="/image.png" alt="Company Illustration" />
          </div>
          <div className={`${styles["overlay-card"]} ${styles["card-1"]}`}>
            <InfoCard {...cards[0]} />
          </div>
          <div className={`${styles["overlay-card"]} ${styles["card-2"]}`}>
            <InfoCard {...cards[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
