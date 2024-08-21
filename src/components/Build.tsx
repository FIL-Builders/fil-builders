"use client";

import React from "react";

export default function Build() {
  return (
    <>
      <section className="hero bg-primaryBlue text-black h-full p-8">
        <div
          className="text-6xl font-bold mb-8 text-white"
          style={{ textShadow: "10px 5px 0px black" }}
        >
          Build
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            Build your first solution
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            Filecoin Docs Builder Cookbooks
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex items-center justify-center relative shadow-custom-black-box bg-white">
            FF grants
          </div>
        </div>
      </section>
    </>
  );
}
