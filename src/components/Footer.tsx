import React from "react";
import Logo from "./svg/Logo";

import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from  "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-primaryBlue flex flex-col">
      <footer className="bg-primary text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex items-center gap-10 hidden md:flex">
            <Logo height={100} width={50} />
          </div>
          <nav className="flex gap-6 items-center justify-center md:justify-start">
            <a
              href="mailto:contact@fil.builders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <MdEmail style={{ width: "30px", height: "30px" }} />
            </a>
            <a
              href="https://x.com/FILBuilders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter style={{ width: "30px", height: "30px" }} />
            </a>
            <a
              href="https://discord.gg/filecoin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord style={{ width: "30px", height: "30px" }} />
            </a>
            <a
              href="https://github.com/filecoin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ width: "30px", height: "30px" }} />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
