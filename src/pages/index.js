import React from "react";
import Card from "../components/card/card";
import './styles.css';
import CatalogData from "../data/catalogData";

export default function Home(){
    return (
      <div className="frame">
        <section className="hero w-full">
                
        </section>
        <section className="catalog">
          <p className="catalog-title">BESTSELLER PRODUCTS</p>
          <div className="card-container ">
            {CatalogData.map((item) => (
              <Card key={item.id} img={item.img} title={item.title} subtitle={item.subtitle} prevPrice={item.prevPrice} price={item.price} />
            ))}
          </div>
        </section>
      </div>
    );
}