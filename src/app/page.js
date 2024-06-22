"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import logo from '../../public/logo.white.png';

export default function Home() {
  const [dynamicText, setDynamicText] = useState('FILBUILDERS');

  useEffect(() => {
    const texts = ['FILBUILDERS', 'FIL-DAPPS', 'FIL-TOOLS', 'FIL-INFRA', 'FIL-ONCHAIN'];
    let index = 0;
    const interval = setInterval(() => {
      setDynamicText(texts[index]);
      index = (index + 1) % texts.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <section className="hero bg-primary text-white h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="flex justify-center">
            <Image src={logo} alt="FIL-B logo" width={200} height={100} />
          </div>
          <h1 className="text-6xl font-bold mt-4">FIL Builders</h1>
          <p className="text-2xl mt-4">Cross the Filecoin chasm with us.</p>
          <p className="text-2xl mt-2">{dynamicText}</p>
        </div>
      </section>
      <section className="mission bg-white text-primary p-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Mission</h2>
          <p className="text-xl text-center">
            FIL-B (FIL-Builders) is a public goods team committed to helping builders design,
            unblock and implement onchain solutions on Filecoin’s decentralized storage network.
            We focus on the Filecoin Virtual Machine’s development.
          </p>
        </div>
      </section>
    </Layout>
  );
}

