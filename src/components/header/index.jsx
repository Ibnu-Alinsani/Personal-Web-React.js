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
      className={`fixed top-0 z-10 w-full overflow-hidden border-black bg-white/30 backdrop-blur-xl transition delay-75 duration-200 ${
        isVisible ? "translate-x-0" : "-translate-y-14"
      }`}
    >
      <ul className="my-2 flex justify-evenly text-center">
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
