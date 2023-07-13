import "./App.css";
import React from "react";
import Header from "./components/header";
import About from "./components/about";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <main className="h-[100rem] bg-stone-100">
      <Header />
      <About />
    </main>
  );
}
export default App;
