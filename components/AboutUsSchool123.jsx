"use client";
import React from "react";
import MascotAnimation from "./MascotAnimation";
import Image from "next/image";

const AboutUsSchool123 = () => {
  return (
    <>
      <div className="absolute">{/* <MascotAnimation /> */}</div>

      <div className="bg-background-dark">
        <h1
          className="text-[#FFFFFF] text-[50px] md:text-[200px] text-center pt-40 md:pt-0 md:mt-20"
          style={{ fontFamily: "League Gothic" }}
        >
          About Us
        </h1>

        {/* <Image
              src="/abouteduline.svg"
              width={1000}
              height={1000}
              alt="line"
              className="w-[350px] h-[250px] absolute bottom-40 left-20 hidden md:block"
            /> */}
        <div className="flex justify-center items-center mb-20 ">
          <Image
            src="/schools123logo.svg"
            alt="about"
            width={1000}
            height={1000}
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full"
          />
        </div>

        <h2 className="text-center text-white text-[30px] mb-5">
          Let&apos;s Begin !!
        </h2>
        <div className="flex justify-center items-center pb-10">
          <Image
            src="/downarrowedu.svg"
            width={1000}
            height={1000}
            alt="down"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => {
              document.getElementById("scroll-target").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      <div
        id="scroll-target"
        className="sm:mt-12 text-[#323232] md:px-[100px]  pb-12 md:pb-0"
      >
        <div className="bg-[#F8F8F8] px-7 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left hidden md:block">
                Who We Are
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify mt-4 ">
                Schools123 is an online platform that connects families with the
                best boarding schools across India. We make it easy for parents
                and students to find the right school with detailed and reliable
                information.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center space-y-2 md:space-y-4 order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Who We Are
              </p>
              <img
                src="/schools123.svg"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-5 md:gap-0">
              <img
                src="./ourpassion.svg"
                className="w-[100px] h-[110px] md:h-[160px] md:w-[150px]"
                alt="Passion logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold md:hidden">
                Why Education Matters to Us
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                Why Education Matters to Us
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                At Schools123, we believe that quality education changes lives.
                Our team is dedicated to showcasing top boarding schools in
                India, offering families a wide range of options to suit their
                preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center  md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center pb-4 md:text-left hidden md:block">
                Our Values
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                We prioritize transparency and trust. Schools123 provides
                up-to-date and accurate information to help parents and students
                make well-informed and confident decisions.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Our Values
              </p>
              <img
                src="./ourmission.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                What We Strive For
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                What We Strive For
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Our mission is to simplify the search for the ideal boarding
                school. Schools123 aims to be the go-to resource for boarding
                school education in India, saving time for families and
                providing schools with a platform to reach more students.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left pb-4 hidden md:block">
                Connecting Families and Schools
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Schools123 bridges the gap between families and India&apos;s top
                boarding schools. We bring together curated school options for
                parents and students, while schools can showcase their unique
                features.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Connecting Families and Schools
              </p>
              <img
                src="/p.png"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px] bg-white"
                alt="Join us logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                Your Trusted Partner
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                Your Trusted Partner
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                We offer expert guidance and support to families throughout the
                school selection process. Our team is here to answer your
                questions and help you make the best choice for your child&apos;s
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSchool123;
