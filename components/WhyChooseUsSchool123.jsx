import Image from "next/image";
import React from "react";

const WhyChooseUsSchool123 = () => {
  return (
    <>
      <div className="bg-[#FFFFF] hidden md:block ">
        <h1 className="text-center text-[#323232] text-[2.25rem] mt-10">
          Why Choose Us?
        </h1>

        <div className="flex justify-center items-center">
          <div className="space-y-12 w-[210px] h-[485px]">
            <div className="w-[230px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">
                Customized School Guidance
              </h1>
              <p className="text-[#898989] text-[12px]">
                At Schools123, we focus on understanding your child&apos;s unique
                needs, providing personalized recommendations to help you find a
                school that best supports their talents and goals.
              </p>
            </div>
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">
                Trusted Educational Advisors
              </h1>
              <p className="text-[#898989] text-[12px]">
                Our experienced team offers expert guidance at every stage,
                ensuring you have the support and knowledge needed to make
                confident decisions about your child&apos;s education.
              </p>
            </div>
            <div className="w-[250px] h-[145px]">
              <h1 className="text-[#323232] text-[1rem]">
                Targeted Assessments for Success
              </h1>
              <p className="text-[#898989] text-[12px]">
                Schools123 provides tailored mock tests and assessments to
                uncover your child&apos;s strengths and areas for improvement,
                enabling a perfect match with schools that nurture their
                potential.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/leftframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[400px]"
            />
          </div>

          <div className="">
            <Image
              src="/whychooseus.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[440px] h-[550px]"
            />
          </div>

          <div>
            <Image
              src="/rightframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="space-y-14 w-[210px] h-[485px]">
            <div className="w-[280px] h-[138px] pt-1">
              <h1 className="text-[#323232] text-[1rem]">
                Detailed School Insights
              </h1>
              <p className="text-[#898989] text-[12px]">
                We equip you with in-depth school profiles, including academic
                offerings, extracurricular opportunities, and campus facilities,
                helping you make informed choices with confidence.
              </p>
            </div>
            <div className="w-[280px] h-[130px]">
              <h1 className="text-[#323232] text-[1rem]">
                Fair and Transparent Services
              </h1>
              <p className="text-[#898989] text-[12px]">
                Schools123 is built on trust and honesty. By charging families
                instead of partnering with schools, we guarantee unbiased
                recommendations focused solely on your child&apos;s success.
              </p>
            </div>
            <div className="w-[260px] h-[145px]">
              <h1 className="text-[#323232] text-[1rem]">
                Comprehensive Admission Assistance
              </h1>
              <p className="text-[#898989] text-[12px]">
                From your first consultation to the final admission process,
                Schools123 offers end-to-end support, ensuring a seamless and
                stress-free school selection journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSchool123;
