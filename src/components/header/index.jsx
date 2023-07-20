import React from "react";

function Header() {
  const [isVisible, setIsVisible] = React.useState(true);

  window.onwheel = (e) => {
    if (e.deltaY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <header
      className={`backdrop-blur-xl w-full bg-white/30 border-black fixed top-0 transition duration-200 delay-75 overflow-hidden z-10 ${
        isVisible ? "translate-x-0" : "-translate-y-14"
      }`}
    >
      <ul className="text-center flex justify-evenly my-2">
        <li className="list-nav">Home</li>
        <li className="list-nav">About</li>
        <li className="list-nav">Service</li>
        <li className="list-nav">Portfolio</li>
        <li className="list-nav">Contact</li>
      </ul>
    </header>
  );
}

export default Header;
