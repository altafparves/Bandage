import React, { useState } from "react";
import Logo from "../logo";
import styles from "./styles.module.css";
import CartIcon from "../../assets/icons/ic-cart.svg";
import SearchIcon from "../../assets/icons/ic-search.svg";
import HeartIcon from "../../assets/icons/ic-heart.svg";
import AccIcon from "../../assets/icons/ic-person.svg";
import Banner from "../banner";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full z-50 fixed top-0 flex flex-col">
        <Banner />
        <div className={styles.navbar}>
          <Logo />
          <div
            className={`absolute lg:static left-0 top-[60px] lg:flex w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 flex-col lg:flex-row lg:items-center gap-4 lg:gap-[50px] transition-all duration-500 ease-in-out lg:gap-[70px] xl:gap-[125px] 
  ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[20px] pointer-events-none lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto"}`}
          >
            {/* Menu Left */}
            <div className={`${styles.menuLeft} lg:flex-row`}>
              <button className={styles.menuItem}>Home</button>
              <button className={styles.menuItem}>Shop</button>
              <button className={styles.menuItem}>About</button>
              <button className={styles.menuItem}>Contact</button>
              <button className={styles.menuItem}>Pages</button>
            </div>
            {/* Menu Right */}
            <div className={`${styles.menuRight} lg:flex-row`}>
              <button className={styles.actionBtn}>
                <img src={AccIcon} className={styles.IcBtn} alt="Account" />
                <p className="font-[400] text-[30px] lg:font-bold lg:text-[14px]">Login / Register</p>
              </button>
              <button className={styles.actionBtn}>
                <img className={styles.IcBtn} src={SearchIcon} alt="Search" />
              </button>
              <button className={styles.actionBtn}>
                <img className={styles.IcBtn} src={CartIcon} alt="Cart" />1
              </button>
              <button className={styles.actionBtn}>
                <img className={styles.IcBtn} src={HeartIcon} alt="Favorites" />1
              </button>
            </div>
          </div>
          <button type="button" className="burger block lg:hidden" onClick={toggleMenu}>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z" fill="#737373" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

