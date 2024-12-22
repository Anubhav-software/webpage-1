import React from "react";
import Navbar from "./components/manual/Navbar/Navbar";
import Hero from "./components/manual/Hero/Hero";
import Menus from "./components/manual/Menus/Menus";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus/>
      </main>
    </>
  );
};

export default App;
