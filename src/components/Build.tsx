"use client";

import React from "react";

export default function Build() {
  return (
    <>
      <section className="hero bg-primary text-white h-full p-8">
        <div className="text-6xl font-bold mb-8">Build</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="border rounded-md p-10 border-4 flex items-center justify-center">
            Build your first solution
          </div>
          <div className="border rounded-md p-10 border-4 flex items-center justify-center">
            Filecoin Docs Builder Cookbooks
          </div>
          <div className="border rounded-md p-10 border-4">FF grants</div>
        </div>
      </section>
    </>
  );
}
