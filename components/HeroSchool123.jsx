"use client";

import React from "react";
import Image from "next/image";

const HeroSchool123 = () => {
  return (
<div className=" mt-20 w-full h-full ">      <Image
        src="/heroschool123.png"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-[70vh] object-cover hidden md:block"
      />

      <div className="md:hidden w-full h-full ">
        <Image
          src="/heroschool123-1.png"
          alt="School choice"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSchool123;
