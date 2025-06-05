import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Stack from "./components/Stack";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Stack />
      <Hero />
    </>
  );
};

export default App;
