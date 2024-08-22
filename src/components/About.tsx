"use client";

import Image from "next/image";
import rish from "../../public/rish.png";
import longfei from "../../public/longfei.jpeg";
import mikers from "../../public/mikers.png";
import xors from "../../public/xors.png";
import truckerfling from "../../public/truckerfling.jpg";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import React from "react";

export default function About() {
  return (
    <>
      <section className="mission bg-primaryBlue min-h-screen text-primaryBlue p-8 font-paragraph">
        <div className="container mx-auto mb-4 text-white font-body">
          <h2 className="text-4xl font-display font-bold text-center mb-4">
            Meet The Team
          </h2>
          <p className="text-xl text-white text-center mb-8 font-paragraph">
            FIL-B is spun out of former developer experience teams from{" "}
            <a href="https://protocol.ai/">
              <u>Protocol Labs</u>
            </a>
            , the R&D lab that launched Filecoin. We helped launch on-chain
            features, such as{" "}
            <a href="https://docs.filecoin.io/smart-contracts/fundamentals/the-fvm">
              <u>Filecoin Virtual Machine</u>
            </a>{" "}
            and{" "}
            <a href="https://docs.ipc.space/">
              <u>Interplanetary Consensus</u>
            </a>{" "}
            and bring deep expertise and community connections to FIL-B. FIL-B
            is proudly part of the public goods layer of the{" "}
            <a href="https://www.plnetwork.io/">
              <u>Protocol Labs Network</u>
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white mb-10">
            <Image
              src={truckerfling}
              alt="Trucker Fling"
              width={200}
              height={200}
            />
            <div className="mt-4">
              <div className="font-body text-lg">Sarah Thiam</div>
              <div className="font-subtitle">Team Lead</div>
              <div className="font-subtitle">@Trucker_Fling</div>
              <nav className="flex gap-6 items-center justify-center mt-4">
                <a
                  href="https://x.com/Trucker_Fling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter style={{ width: "30px", height: "30px" }} />
                </a>
                <a
                  href="https://linkedin.com/in/truckerfling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin style={{ width: "30px", height: "30px" }} />
                </a>
              </nav>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white mb-10">
            <Image src={rish} alt="Rishikesh Kale" width={200} height={200} />
            <div className="mt-4">
              <div className="font-body text-lg">Rishikesh Kale</div>
              <div className="font-subtitle">Developer Advocate</div>
              <div className="font-subtitle">@Rishikesh_Kale</div>
              <nav className="flex gap-6 items-center justify-center mt-4">
                <a
                  href="https://x.com/Rishikesh_Kale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter style={{ width: "30px", height: "30px" }} />
                </a>
                <a
                  href="https://linkedin.com/in/rishikeshkale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin style={{ width: "30px", height: "30px" }} />
                </a>
              </nav>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white mb-10">
            <Image src={longfei} alt="Longfei Wang" width={200} height={200} />
            <div className="mt-4">
              <div className="font-body text-lg">Longfei Wang</div>
              <div className="font-subtitle">Developer Advocate</div>
              <div className="font-subtitle">@Longfei_Wang</div>
              <nav className="flex gap-6 items-center justify-center mt-4">
                <a
                  href="https://x.com/longfei_w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter style={{ width: "30px", height: "30px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/longfei-wang-a7b3b125/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin style={{ width: "30px", height: "30px" }} />
                </a>
              </nav>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white mb-10">
            <Image src={mikers} alt="Mikers" width={200} height={200} />
            <div className="mt-4">
              <div className="font-body text-lg">Mikers</div>
              <div className="font-subtitle">Developer Advocate</div>
              <div className="font-subtitle">@Mikers</div>
              <nav className="flex gap-6 items-center justify-center mt-4">
                <a
                  href="https://x.com/mseiler1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter style={{ width: "30px", height: "30px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mseiler/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin style={{ width: "30px", height: "30px" }} />
                </a>
              </nav>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white mb-10">
            <Image src={xors} alt="XORS" width={200} height={200} />
            <div className="mt-4">
              <div className="font-body text-lg">XORS</div>
              <div className="font-subtitle">DX Engineer</div>
              <div className="font-subtitle">@XORS</div>
              <nav className="flex gap-6 items-center justify-center mt-4">
                <a
                  href="https://x.com/truckerfling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter style={{ width: "30px", height: "30px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sarahthiam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin style={{ width: "30px", height: "30px" }} />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
