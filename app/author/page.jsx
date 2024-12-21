import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Author",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="">
        <div className="flex flex-col  items-center p-16">
          <h1 className="text-4xl lg:text-5xl text-center font-bold py-4 lg:py-10">
            Author
          </h1>

          <div className="px-2 lg:px-10 py-5 flex  bg-white rounded-lg flex-col lg:flex lg:flex-row  w-[400px] md:w-[800px] lg:w-[1200px]  items-center gap-10">
            <div className="relative h-[350px] w-[300px] rounded-2xl shadow-2xl">
              <img
                src="/author.jpeg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold  text-white">
                  Vaibhav Negi
                </h1>
                <p className="text-sm text-gray-300 pb-2">Author</p>
              </div>
              <div className=" text-[16px] mt-6">
                <p className=" text-[20px] font-bold">Know More</p>

                <a target="_blank" href="https://www.negivaibhav.com/">
                  <p className="text-blue-500 underline">negivaibhav.com</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[900px]  leading-[1.4rem] mt-14 md:mt-0 lg:mt-0">
              <div className="lg:text-start text-center">
                <h2 className="font-bold text-2xl text-black">Vaibhav Negi</h2>
                <p className="text-black">Educational Content Specialist</p>
              </div>
              <p>
                Hello there! I&apos;m Vaibhav Negi, an education enthusiast and
                content creator with over three years of experience in digital
                marketing, specifically in the education sector. My journey into
                the world of content creation began with a simple goal: to
                connect with people through words. Over time, I discovered a
                true passion for crafting impactful content that empowers
                students, parents, and educators alike.
              </p>
              <p>
                From guiding families to choose the perfect school to exploring
                the latest trends in education, I&apos;ve had the privilege of
                collaborating with various platforms dedicated to shaping young
                minds. My work is driven by the belief that meaningful content
                can inspire confidence and spark curiosity in its readers.
              </p>
              <p>
                At Schools123, my focus lies in simplifying the school selection
                process for families. By providing detailed insights into a
                school&apos;s culture, academics, and unique features, I aim to
                bridge the gap between questions and answers, making
                decision-making less overwhelming. Whether it&apos;s a comprehensive
                guide or a thoughtful review, every piece of content I create is
                tailored to India&apos;s diverse education landscape, ensuring it&apos;s
                both informative and engaging.
              </p>
              <p>
                Beyond the education niche, I&apos;ve also had the opportunity to
                explore sports writing as a freelancer with Sportskeeda. This
                experience has broadened my ability to connect with varied
                audiences while maintaining authenticity and quality in every
                piece of writing.
              </p>
              <p>
                At Schools123, my mission is clear: to make school selection an
                enriching experience for families. By providing trustworthy,
                well-researched, and contextually relevant content, I hope to be
                a helpful guide for students and their parents in finding the
                best fit for their educational journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
