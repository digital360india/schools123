"use client";

import React from "react";
import Image from "next/image";

const HeroSchool123 = () => {
  return (
    <div className="relative mt-24 w-full h-full">
      <Image
        src="/heroschool123.png"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-[70vh] object-cover hidden md:block"
      />

     
      <div className="md:hidden">
      <Image
        src="/heroschool123.png"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-[55vh] object-cover bottom-0 absolute"
      />

      </div>
    </div>
  );
};

export default HeroSchool123;
