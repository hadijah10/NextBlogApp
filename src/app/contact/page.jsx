import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

export const metadata = {
  title: "Contact us",
  description: "Reach us with your concerns",
};
function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep in Touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="name" className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
