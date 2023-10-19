// import React from "react";
import Hero from "./components/Hero";
import DisplayDemo from "./components/DisplayDemo";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <DisplayDemo />
        <Footer/>
      </div>
    </main>
  );
};

export default App;
