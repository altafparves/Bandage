import React from "react";
import Logo from "./logo";
import './styles.css';



export default function Navbar(){
    return (
      <nav className="w-full px-[35px] pt-[23px] flex flex-row justify-between items-center  bg-white">
        <Logo></Logo>
        <div className="menu">
          <button className="menu-item">Home</button>
          <button className="menu-item">Shop</button>
          <button className="menu-item">About</button>
          <button className="menu-item">Contact</button>
          <button className="menu-item">Pages</button>
        </div>
        <div className="menu">
          <button>Login/Register</button>
          <button></button>
          <button>1</button>
          <button>1</button>
        </div>
        <button>
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z" fill="#737373" />
          </svg>
        </button>
      </nav>
    );
}