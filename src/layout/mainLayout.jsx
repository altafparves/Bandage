import React from "react";
import ArrowIc from "../assets/icons/ic-arrow.svg";

import Navbar from "../components/navbar/navbar";
export default function MainLayout({ children }) {
  return (
    <>
      <div className="w-screen h-scree bg-[#FAFAFA] p-0">
        <Navbar/>
        <p className="mt-[82px] breadCrumb flex flex-row justify-center items-center w-full py-[34px] lg:justify-start lg:px-[100px] text-black font-bold text-sm gap-[15px]">
          Home
          <img src={ArrowIc} alt="" />
          <span className="text-light_gray"> Shop</span>
        </p>
        <main>{children}</main>
      </div>
    </>
  );
}
