import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.white.png";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Logo from "./svg/Logo";

const Footer = () => {
  return (
    <div className="bg-primaryBlue flex flex-col">
      <Head>
        <title>FIL Builders</title>
        <meta name="description" content="Cross the Filecoin chasm with us." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className="bg-primary text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Logo height={100} width={50} />
          <nav className="flex gap-6 items-center">
            <FaXTwitter style={{ width: "30px", height: "30px" }} />
            <IoLogoYoutube style={{ width: "30px", height: "50px" }} />
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
