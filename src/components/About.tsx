"use client";

import Image from "next/image";
import rish from "../../public/rish.png";
import longfei from "../../public/longfei.jpeg";
import mikers from "../../public/mikers.png";
import truckerfling from "../../public/truckerfling.jpg";

import React from "react";

export default function About() {
  return (
    <>
      <section className="mission bg-white h-full text-primaryBlue p-8">
        <div className="container mx-auto mb-4">
          <h2 className="text-4xl font-bold text-center mb-4">Meet The Team</h2>
          <p className="text-xl text-center">
            FIL-B (FIL-Builders) is an open-source funding initiative dedicated
            to supporting innovative projects and solutions within the Filecoin
            ecosystem. By providing resources and financial backing, Note aims
            to foster development, collaboration, and growth among developers
            and contributors who are building on the Filecoin platform. Whether
            you`&apos`re working on a groundbreaking application, enhancing
            existing tools, or contributing to community-driven projects, Note
            offers the support needed to bring your ideas to life. For more
            information or to apply for funding, please reach out to
            contact@fil.builders.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white">
            <Image src={rish} alt="FIL-B logo" width={200} height={100} />
            <div className="mt-4">
              <div className="font-medium text-lg">Rishikesh Kale</div>
              <div className="font-normal">Developer Advocate</div>
              <div className="font-light">@Rishikesh_Kale</div>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white">
            <Image src={longfei} alt="FIL-B logo" width={200} height={100} />
            <div className="mt-4">
              <div className="font-medium text-lg">Rishikesh Kale</div>
              <div className="font-normal">Developer Advocate</div>
              <div className="font-light">@Rishikesh_Kale</div>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white">
            <Image src={mikers} alt="FIL-B logo" width={200} height={100} />
            <div className="mt-4">
              <div className="font-medium text-lg">Rishikesh Kale</div>
              <div className="font-normal">Developer Advocate</div>
              <div className="font-light">@Rishikesh_Kale</div>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white">
            <Image
              src={truckerfling}
              alt="FIL-B logo"
              width={200}
              height={100}
            />
            <div className="mt-4">
              <div className="font-medium text-lg">Rishikesh Kale</div>
              <div className="font-normal">Developer Advocate</div>
              <div className="font-light">@Rishikesh_Kale</div>
            </div>
          </div>
          <div className="border-primaryBlue rounded-md p-10 flex flex-col items-center justify-center relative shadow-custom-black-box bg-white">
            <Image src={rish} alt="FIL-B logo" width={200} height={100} />
            <div className="mt-4">
              <div className="font-medium text-lg">Rishikesh Kale</div>
              <div className="font-normal">Developer Advocate</div>
              <div className="font-light">@Rishikesh_Kale</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
