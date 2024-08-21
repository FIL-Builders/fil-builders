import Head from "next/head";

import React from "react";
import LogoLandscape from "./svg/LogoLandscape";

const NavBar = () => {
  return (
    <div className="text-primary flex flex-col">
      <Head>
        <title>FIL Builders</title>
        <meta name="description" content="Cross the Filecoin chasm with us." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-primaryBlue text-white p-4 flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <LogoLandscape height={400} width={200} />
          <nav>
            <a href="/" className="mx-2 text-lg">
              Home
            </a>
            <a href="/team" className="mx-2 text-lg">
              Team
            </a>
            <a href="/blog" className="mx-2 text-lg">
              Blog
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
