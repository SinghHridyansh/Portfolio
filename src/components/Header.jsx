import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 ">
      <div className="max-w-screen-2xl w-full mx=auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr] ">
        <h1>
          <a href="/" className="logo">
            <img
              src="./Logo.png"
              width={40}
              height={40}
              alt="Hridyansh Singh"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => {
              setNavOpen((prev) => !prev);
            }}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <NavBar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
