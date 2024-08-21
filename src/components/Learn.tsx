"use client";

import React from "react";
import RedPopBox from "./svg/RedPopBox";

export default function Learn() {
  return (
    <>
      <section className="hero bg-primaryBlue text-black h-full p-8">
        <div
          className="text-6xl font-bold mb-8 text-white"
          style={{ textShadow: "10px 5px 0px black" }}
        >
          Learn
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            Learn about the Filecoin Virtual Machine
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            Learn about building applications on Filecoin
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            Filecoin Docs Programmability page
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            Github ref-fvm project
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            fvm.filecoin.io
          </div>
        </div>
      </section>
    </>
  );
}
