"use client";

import React from "react";

export default function Learn() {
  return (
    <>
      <section className="hero bg-primary text-white h-full p-8">
        <div className="text-6xl font-bold mb-8">Learn</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="border rounded-md p-10 border-4 flex items-center justify-center">
            Learn about the Filecoin Virtual Machine
          </div>
          <div className="border rounded-md p-10 border-4 flex items-center justify-center">
            Learn about building applications on Filecoin
          </div>
          <div className="border rounded-md p-10 border-4 flex items-center justify-center">
            Filecoin Docs Programmability page
          </div>
          <div className="border rounded-md p-10 border-4 flex items-center justify-center">
            Github ref-fvm project
          </div>
          <div className="border rounded-md p-10 border-4 flex items-center justify-center">
            fvm.filecoin.io
          </div>
        </div>
      </section>
    </>
  );
}
