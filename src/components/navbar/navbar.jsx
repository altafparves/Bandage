import React from "react";
import Logo from "../logo";
import styles from "./styles.module.css";
import CartIcon from "../../assets/icons/ic-cart.svg";
import SearchIcon from "../../assets/icons/ic-search.svg";
import HeartIcon from "../../assets/icons/ic-heart.svg";
import AccIcon from "../../assets/icons/ic-person.svg";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen]=useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="w-full px-[35px] bg-[#fff] py-[10px] flex flex-row justify-between items-center">
      <Logo></Logo>
      <div
        className={`absolute left-0 top-[60px] w-full bg-white py-4 flex flex-col items-center gap-4 transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[20px] pointer-events-none"}`}
      >
        <div className={styles.menuLeft}>
          <button className={styles.menuItem}>Home</button>
          <button className={styles.menuItem}>Shop</button>
          <button className={styles.menuItem}>About</button>
          <button className={styles.menuItem}>Contact</button>
          <button className={styles.menuItem}>Pages</button>
        </div>
        <div className={styles.menuRight}>
          <button className={styles.actionBtn}>
            <img src={AccIcon} alt="" />
            <p className="text-[30px]"> Login/Register</p>
          </button>
          <button className={styles.actionBtn}>
            <img src={SearchIcon} alt="" />
          </button>
          <button className={styles.actionBtn}>
            <img src={CartIcon} alt="" />1
          </button>
          <button className={styles.actionBtn}>
            <img src={HeartIcon} alt="" />1
          </button>
        </div>
      </div>
      <button type="button" className="burger" onClick={toggleMenu}>
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z" fill="#737373" />
        </svg>
      </button>
    </nav>
  );
}
