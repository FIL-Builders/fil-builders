import Head from "next/head";
import React from "react";
import LogoLandscape from "./svg/LogoLandscape";

const NavBar = () => {
  return (
    <div className="text-primary flex flex-col font-medium">
      <header className="bg-primaryBlue text-white p-4 flex items-center justify-between w-full h-full">
        <div className="container mx-auto flex items-center justify-between">
          <LogoLandscape
            height={100}
            width={500}
            className="md:height-100 md:width-500"
          />
          <nav className="flex flex-row">
            <a
              href="/"
              className="md:block my-1 md:my-0 mx-2 md:mx-4 text-sm md:text-lg"
            >
              Home
            </a>
            <a
              href="/team"
              className="my-1 md:my-0 mx-2 md:mx-4 text-sm md:text-lg"
            >
              Team
            </a>
            <a
              href="https://filecoin.io/build/#features"
              className="my-1 md:my-0 mx-2 md:mx-4 text-sm md:text-lg"
            >
              Build
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
