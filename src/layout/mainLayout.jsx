import React from "react";
import Navbar from "../components/navbar";
export default function MainLayout({children}){
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
}