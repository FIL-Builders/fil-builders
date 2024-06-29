"use client";

import React from "react";

export default function Learn() {
  return (
    <>
      <section className="hero bg-primary text-white h-full p-8">
        <div className="text-6xl font-bold mb-8">Learn</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex align-center justify-center text-center">
          <div className="border rounded-md p-10 border-4">
            Learn about the Filecoin Virtual Machine
          </div>
          <div className="border rounded-md p-10 border-4">
            Learn about building applications on Filecoin
          </div>
          <div className="border rounded-md p-10 border-4">
            Filecoin Docs Programmability page
          </div>
          <div className="border rounded-md p-10 border-4">
            Github ref-fvm project
          </div>
          <div className="border rounded-md p-10 border-4">fvm.filecoin.io</div>
        </div>
      </section>
    </>
  );
}
