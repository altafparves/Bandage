import React, { useState, useRef, useEffect } from "react";
import Card from "../components/card/card";
import styles from "./styles.module.css";
import CatalogData from "../data/catalogData";
import Hero from "../layout/hero/hero";

export default function Home() {
  // show only 8 items initially
  const [visibleItems, setVisibleItems] = useState(8); 
  const observerRef = useRef(null);

  const loadMoreItems = () => {
    console.log("Loading more items...");
    setVisibleItems((prev) => {
      const newVisibleItems = Math.min(prev + 8, CatalogData.length);
      console.log(`Items visible updated: ${newVisibleItems}`);
      return newVisibleItems;
    });
  };

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      console.log("Old observer disconnected");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Last item is visible");
          loadMoreItems();
        } else {
          console.log("Last item is not visible");
        }
      },
      { threshold: 1.0 } 
    );

    const lastItem = document.querySelector(`.${styles.cardContainer} > div:last-child`);
    if (lastItem) {
      console.log("Observing last item:", lastItem);
      observer.observe(lastItem);
    } else {
      console.log("No last item found to observe.");
    }

    observerRef.current = observer; 
    return () => {
      console.log("Cleaning up observer...");
      observer.disconnect();
    };
  }, [visibleItems]);

  return (
    <div className={styles.frame}>
      <Hero />
      <section className={styles.catalog}>
        <p className={styles.catalogTitle}>BESTSELLER PRODUCTS</p>
        <div className={styles.cardContainer}>
          {CatalogData.slice(0, visibleItems).map((item) => (
            <Card key={item.id} img={item.img} title={item.title} subtitle={item.subtitle} prevPrice={item.prevPrice} price={item.price} />
          ))}
        </div>
      </section>
    </div>
  );
}

