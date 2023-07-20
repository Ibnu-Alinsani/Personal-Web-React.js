import "./App.css";
import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <main className="h-[100rem] bg-stone-100">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
export default App;
