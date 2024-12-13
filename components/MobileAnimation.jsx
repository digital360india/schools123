

import Image from "next/image";
import React from "react";

const MobileAnimation = () => {
  const reasons = [
    {
      title: "Customized School Guidance",
      description:
        "At Schools123, we focus on understanding your child's unique needs, providing personalized recommendations to help you find a school that best supports their talents and goals.",
    },
    {
      title: "Trusted Educational Advisors",
      description:
        "Our experienced team offers expert guidance at every stage, ensuring you have the support and knowledge needed to make confident decisions about your child's education.",
    },
    {
      title: "Targeted Assessments for Success",
      description:
        "Schools123 provides tailored mock tests and assessments to uncover your child's strengths and areas for improvement, enabling a perfect match with schools that nurture their potential.",
    },
    {
      title: "Detailed School Insights",
      description:
        "We equip you with in-depth school profiles, including academic offerings, extracurricular opportunities, and campus facilities, helping you make informed choices with confidence.",
    },
    {
      title: "Fair and Transparent Services",
      description:
        "Schools123 is built on trust and honesty. By charging families instead of partnering with schools, we guarantee unbiased recommendations focused solely on your child's success.",
    },
    {
      title: "Comprehensive Admission Assistance",
      description:
        "From your first consultation to the final admission process, Schools123 offers end-to-end support, ensuring a seamless and stress-free school selection journey.",
    },

  ];

  return (
    <div className="md:hidden bg-white m-6">
      <h2 className="text-2xl text-[#323232] font-bold pb-6 text-center">
        Why Choose Us?
      </h2>
      <div className="space-y-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              
              <Image
                src="/pointer.svg"
                width={1000}
                height={1000}
                className="w-[20px] h-[20px]"
                alt="Pointer"
              />
              
              {/* {index < reasons.length - 1 && ( */}
                <div className="w-[2px] h-24 bg-background-dark mt-2"></div>
              {/* )} */}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#323232] text-lg mb-2">{reason.title}</h3>
              <p className="text-[#898989] text-[12px]">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAnimation;
