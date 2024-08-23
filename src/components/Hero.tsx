import React from "react";
import TextSwapper from "./Typewriter";
import YellowCircle from "./svg/YellowCircle";
import RedPopBox from "./svg/RedPopBox";
import Logo from "./svg/Logo";
import { SquigglyUnderline } from "./SquigglyUnderline";

export default function Hero() {
  const texts = ["BUILDERS", "DAPPS", "TOOLS", "INFRA"];

  return (
    <>
      <section className="hero bg-primaryBlue text-white h-screen flex justify-center items-center relative p-4 overflow-hidden">
        <div className="container mx-auto flex flex-row justify-center items-center h-full w-full">
          <div className="flex-1 z-10 text-left p-4">
            <div className="text-4xl md:text-6xl font-display font-bold mb-6 md:mb-8 max-w-full md:max-w-3xl antialiased -webkit-antialiased leading-tight md:leading-tight">
              The catalyst for builders on Filecoin.
            </div>
            <div className="font-subtitle text-xl md:text-3xl text-secondaryYellow mb-4 md:mb-5">
              <TextSwapper strings={texts} />
            </div>
            <div className="max-w-full md:max-w-3xl mb-4 md:mb-5">
              <p className="text-lg md:text-2xl font-paragraph">
                <span className="font-body text-inherit">
                  FIL-B (FIL-Builders){" "}
                </span>
                is a public goods developer experience team committed to helping
                builders design, unblock, and implement on-chain solutions on
                Filecoin’s decentralized storage protocol.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-5">
              <a
                href="https://medium.com/@filbuilders"
                className="bg-blue-800 text-white text-lg md:text-xl font-body py-4 px-8 rounded-full hover:bg-blue-900 transition shadow-lg hover:shadow-xl text-center"
              >
                Learn more
              </a>
              <a
                href="https://discord.gg/filecoin"
                className="bg-blue-700 text-white text-lg md:text-xl font-body py-4 px-8 rounded-full hover:bg-blue-800 transition shadow-lg hover:shadow-xl text-center"
              >
                Join the community
              </a>
              <a
                href="https://x.com/filbuilders"
                className="bg-blue-600 text-white text-lg md:text-xl font-body py-4 px-8 rounded-full hover:bg-blue-800 transition shadow-lg hover:shadow-xl text-center"
              >
                Get updates
              </a>
            </div>
          </div>

          <div className="flex-1 relative hidden md:flex">
            <div className="absolute bottom-0 left-0 animate-bounce">
              <RedPopBox height={400} width={400} />
            </div>
            <div className="absolute inset-0 hidden md:flex justify-center items-center z-10 animate-bounce">
              <Logo height={700} width={700} />
            </div>
            <div className="absolute top-0 right-0 animate-bounce">
              <YellowCircle height={400} width={400} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
