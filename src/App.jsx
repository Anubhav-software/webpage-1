import React from "react";
import Navbar from "./components/manual/Navbar/Navbar";
import Hero from "./components/manual/Hero/Hero";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
