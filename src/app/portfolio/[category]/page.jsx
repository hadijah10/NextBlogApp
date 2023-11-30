import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

function Category({ params }) {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              src={item.image}
              fill={true}
              alt="Pic"
            />
          </div>
        </div>
      ))}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            omnis numquam dicta dignissimos assumenda optio, asperiores maiores
            corrupti esse libero cupiditate voluptates rerum magnam rem nobis.
            Vel dolor maxime dignissimos.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            fill={true}
            alt="Pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
