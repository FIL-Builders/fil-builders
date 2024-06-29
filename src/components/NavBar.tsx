import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.white.png";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white text-primary flex flex-col">
      <Head>
        <title>FIL Builders</title>
        <meta name="description" content="Cross the Filecoin chasm with us." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Image src={logo} alt="FIL-B logo" width={100} height={50} />
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
