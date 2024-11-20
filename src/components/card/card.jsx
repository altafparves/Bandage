import React from "react"
import './styles.css'

export default function Card({
    img,title, subtitle, prevPrice,price
}){
  console.log(img);
    return (
      <div className="card">
        <img src={img} alt="" className="h-[70%]" />
        <div className="content">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
          <p className="price">
            <span className="prevPrice">${prevPrice}</span>
            ${price}
          </p>
        </div>
      </div>
    );
}