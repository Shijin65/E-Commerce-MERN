import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export const Layout = ({ children, hero }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen ">
      <Header />
      {hero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};
