import React from "react";
import Card from "../components/card/card";
import styles from './styles.module.css';
import CatalogData from "../data/catalogData";
import Hero from "../layout/hero/hero";

export default function Home(){
    return (
      <div className={styles.frame}>
        <Hero/>
        <section className={styles.catalog}>
          <p className={styles.catalogTitle}>BESTSELLER PRODUCTS</p>
          <div className={styles.cardContainer}>
            {CatalogData.map((item) => (
              <Card key={item.id} img={item.img} title={item.title} subtitle={item.subtitle} prevPrice={item.prevPrice} price={item.price} />
            ))}
          </div>
        </section>
      </div>
    );
}