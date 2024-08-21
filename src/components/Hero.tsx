import React from "react";
import TextSwapper from "./Typewriter";
import YellowCircle from "./svg/YellowCircle";
import RedPopBox from "./svg/RedPopBox";
import Logo from "./svg/Logo";
import { SquigglyUnderline } from "./SquigglyUnderline"; // Import SquigglyUnderline

export default function Hero() {
  const texts = ["BUILDERS", "DAPPS", "TOOLS", "INFRA", "ONCHAIN"];

  return (
    <>
      <section className="hero bg-primaryBlue text-white h-screen flex justify-center items-center relative p-4">
        <div className="flex flex-row justify-center items-center h-full w-full">
          <div className="flex-1 z-10 text-left p-10">
            <div className="text-6xl font-bold mb-10 max-w-3xl">
              Cross the Filecoin chasm{" "}
              <SquigglyUnderline>with us</SquigglyUnderline>.
            </div>
            <div className="font-semibold text-3xl text-secondaryYellow mb-5">
              <TextSwapper strings={texts} />
            </div>
            <div className="max-w-3xl mb-5">
              <p className="text-2xl font-light">
                <span className="font-bold text-inherit">
                  FIL-B (FIL-Builders){" "}
                </span>
                is a public goods team committed to helping builders design,
                unblock, and implement onchain solutions on Filecoin’s
                decentralized storage network. We focus on the Filecoin Virtual
                Machine’s development.
              </p>
            </div>
            <div className="flex gap-6 mb-5">
              <button className="bg-blue-700 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-blue-900 transition shadow-lg hover:shadow-xl">
                Get Involved
              </button>
              <button className="bg-blue-600 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-blue-800 transition shadow-lg hover:shadow-xl">
                Visit Our Blog
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute bottom-0 left-0 animate-bounce">
              <RedPopBox height={400} width={400} />
            </div>
            <div className="absolute inset-0 flex justify-center items-center z-10 animate-bounce">
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
