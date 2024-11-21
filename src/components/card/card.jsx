import React from "react"
import styles from  './styles.module.css'

export default function Card({
    img,title, subtitle, prevPrice,price
}){
  console.log(img);
    return (
      <div className={styles.card}>
        <img src={img} alt="" className="h-[70%]" />
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.price}>
            <span className={styles.prevPrice}>${prevPrice}</span>
            ${price}
          </p>
        </div>
      </div>
    );
}