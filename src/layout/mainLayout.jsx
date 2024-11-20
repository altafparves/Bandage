import React from "react";
// import Navbar from "../components/navbar";
export default function MainLayout({children}){
    return (
      <>
        <div className="w-screen h-screen bg-black p-0">
          {/* <Navbar /> */}
          <main>{children}</main>
        </div>
      </>
    );
}