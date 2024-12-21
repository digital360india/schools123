import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy Policies",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Privacy Policy</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/privacy.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to School123&apos;s Privacy Policy
          </p>
          <p>
            Your trust is important to us at School123. This privacy policy
            explains how we collect, use, and safeguard your information while
            ensuring complete transparency. It applies to all interactions with
            our website and associated digital services.
          </p>
          <p>
            {" "}
            <p className="text-[24px] font-semibold">Information We Collect</p>
            At School123, we collect only the information necessary to provide
            you with a seamless and personalized experience. This may include
            details like your name, email address, and preferences. Whether it&apos;s
            helping you find the right school or sending important updates, your
            information is used strictly to serve your needs.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Understanding User Activity
            </p>
            To continuously improve, we use technology that tracks browsing
            activity and user preferences. These insights help us refine our
            platform&apos;s functionality, create better tools, and offer
            recommendations that align with your interests.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">Protecting Your Data</p>
            Keeping your information secure is a priority. We use advanced
            safeguards to protect against unauthorized access or misuse. While
            no system can guarantee 100% security, we are committed to
            minimizing risks and ensuring your data is handled responsibly.
          </p>
          <p>
            <p className="text-[24px] font-semibold">Sharing with Care</p>
            We may share select information with trusted partners or service
            providers solely to improve your experience. Rest assured, this is
            done within strict boundaries and in line with our privacy
            commitments. No data is shared without your knowledge or outside the
            scope of what&apos;s necessary.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Evolving with Transparency
            </p>
            As our platform grows, we may make updates to this privacy policy to
            reflect new features or changes in practices. We&apos;ll always ensure
            you&apos;re informed about significant updates, keeping you in the loop
            every step of the way.
          </p>
          {/* <p>
            <p className="text-[24px] font-semibold">
            Contact Us Anytime
            </p>
            If you have questions, concerns, or feedback about your privacy, we&apos;re here to help. Reach out to us using the details below:

          </p> */}
          <p>
            <p className="text-[24px] font-semibold"> Contact Us Anytime</p>
            If you have questions, concerns, or feedback about your privacy,
            we&apos;re here to help. Reach out to us using the details below:
            <br />
            <p>Email: info@goedu.in</p>
            <p>Contact Number:01353530324, 9557695360</p>
          </p>

          <p>
            Thank you for being a valued part of the School123 community. We&apos;re
            committed to protecting your privacy and supporting your educational
            journey with integrity.
          </p>
        </div>
      </div>
    </>
  );
}
