

import Image from "next/image";
import React from "react";

const MobileAnimation = () => {
  const reasons = [
    {
      title: "Authentic Recommendations",
      description:
        "We prioritize your child's unique needs over school preferences. Our unbiased recommendations are based solely on what suits your child best, ensuring a genuine selection process.",
    },
    {
      title: "Expert Counseling",
      description:
        "Our experienced consultants guide you through each step, offering personalized counseling to help you feel confident about every decision you make for your child's future.",
    },
    {
      title: "Mock Tests & Assessments",
      description:
        "We offer mock tests and customized assessments to evaluate your child's strengths and needs, allowing for a more accurate school placement tailored to their potential.",
    },
    {
      title: "Comprehensive School Insights",
      description:
        "Go Edu provides detailed information on each school, from academic programs to extracurriculars, so you can make fully informed choices for your child's education.",
    },
    {
      title: "Transparent and Trustworthy Service",
      description:
        "Built on trust, our approach is straightforward and transparent. We charge parents, not schools, to ensure our advice is honest, reliable, and truly in your child's best interest.",
    },
    {
      title: "End-to-End Support",
      description:
        "From initial consultations to application guidance and admission follow-ups, we're here to support you throughout the entire school selection process, making it stress-free and successful.",
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
                <div className="w-[2px] h-24 bg-[#1B6EA1] mt-2"></div>
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
