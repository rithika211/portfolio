import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rithika Reddy</h1>
        <p className={styles.description}>
          Full-stack developer focused on designing scalable, user-centered web
          applications. Experienced in backend development with strong frontend
          integration skills.
        </p>
        <a href="mailto:rithikareddy00000@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/rithika.jpg")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
