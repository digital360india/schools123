"use client";

import React from "react";
import Image from "next/image";

const HeroSchool123 = () => {
  return (
    <div className="relative mt-20 bg-green-700 w-full h-[100vh]">
      <Image
        src="/heroschool123.svg"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-[100vh] object-cover hidden md:block"
      />

      <div className="absolute top-[25%] md:top-1/2 right-10 transform -translate-y-1/2 text-white px-4 md:px-8 lg:right-20 lg:top-1/2 lg:transform lg:-translate-y-1/2">
        <p className="text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-light Merriweather text-center justify-center lg:text-right">
          Find the <span className="font-bold">Perfect School</span> for Every Child
        </p>
        <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-2 text-center lg:text-right Merriweather">
          Schools 123
        </p>
      </div>
      <div className="md:hidden">
      <Image
        src="/herofram.svg"
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
