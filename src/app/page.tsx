"use client";
import { useEffect, useState } from "react";
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import Learn from "@/components/Learn";
import Build from "@/components/Build";
import Meet from "@/components/Meet";

export default function Home() {
  const [dynamicText, setDynamicText] = useState("FILBUILDERS");
  useEffect(() => {
    const texts = [
      "FILBUILDERS",
      "FIL-DAPPS",
      "FIL-TOOLS",
      "FIL-INFRA",
      "FIL-ONCHAIN",
    ];
    let index = 0;
    const interval = setInterval(() => {
      setDynamicText(texts[index]);
      index = (index + 1) % texts.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Learn />
      <Build />
      <Meet />
      <Footer />
    </>
  );
}
