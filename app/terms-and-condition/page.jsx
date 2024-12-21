import Hero from "@/components/Hero";

export async function generateMetadata() {
  return {
    title: "Terms and Condition",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const TermsAndCondition = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Terms And Condition</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/term.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to School123&apos;s Terms and Conditions{" "}
          </p>
          <p>
            We&apos;re delighted to have you as part of our community at School123.
            By accessing our platform, you&apos;re stepping into a world of
            opportunities where students and parents can explore and connect
            with some of the best boarding schools across India. These terms
            exist to ensure that your experience here is smooth, secure, and
            rewarding.
          </p>
          {/* Please read these terms carefully. */}
          <p>
            {/* {" "}
            <p className="text-base font-semibold mb-1">Terms Acceptance</p>
            By using our services, you agree to adhere to the terms outlined
            here. If you disagree with these terms, please refrain from using
            our website and services. */}
            {/* <p>
              <p className="text-base font-semibold mb-1">Usage of Website</p>
              <p>
                {" "}
                Lawful Usage: You agree to use our website and services solely
                for lawful purposes.
              </p>
              Prohibited Activities: You must not transmit any malicious code or
              engage in activities that disrupt the operation of our website.
            </p> */}
            {/* <p>
              <p className="text-base font-semibold mb-1">
                Service Changes and Pricing
              </p>{" "}
              Edu 123 reserves the right to modify or discontinue any service or
              feature without prior notice. Prices for our services are subject
              to change without warning.
            </p> */}
            <p className="pb-4">
              <p className="text-[20px]  font-bold mb-1">
                Use with Care and Respect
              </p>
              School123 is a space created to simplify educational decisions and
              provide reliable guidance. We encourage all users to navigate our
              platform responsibly and respectfully, ensuring a positive
              environment for everyone involved.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Evolving with Your Needs
              </p>
              To serve you better, we&apos;re always working on enhancing our
              features and offerings. Whether it&apos;s adding new tools or updating
              existing resources, we aim to keep School123 aligned with the
              ever-changing educational landscape.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Your Account, Your Security{" "}
              </p>
              When you create an account with School123, you take the first step
              toward accessing tailored solutions. To keep your journey secure,
              we recommend safeguarding your credentials and updating your
              information as needed.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Accuracy You Can Rely On
              </p>
              We take pride in providing precise, up-to-date information about
              schools, programs, and admissions processes. Our team diligently
              reviews and updates the content to ensure that the insights you
              rely on are trustworthy and current.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Your Voice Matters
              </p>
              At School123, we believe collaboration fuels improvement. Your
              thoughts, suggestions, and feedback inspire us to refine our
              platform, making it even more helpful for everyone.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Prioritizing Privacy
              </p>
              Your trust is valuable to us. Any information you share is treated
              with utmost care and confidentiality, ensuring that your personal
              data is used solely to enhance your experience.
            </p>{" "}
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Committed to Clarity
              </p>
              If there&apos;s ever a discrepancy or an update needed, our team is
              quick to make the necessary adjustments. We&apos;re dedicated to
              ensuring that every detail on our platform remains clear and
              correct.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Positive Interactions Only
              </p>
              School123 thrives on positive energy. We request users to engage
              with our resources constructively, keeping the platform a helpful
              and supportive space for all.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Continuity with Care
              </p>
              While we aim for uninterrupted service, occasional hiccups may
              happen. Rest assured, our team is always on hand to resolve issues
              swiftly and get you back on track.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Adapting to Change
              </p>
              As education evolves, so do we. Our terms and conditions may be
              updated periodically to reflect new developments or improvements.
              Don&apos;t worry—we&apos;ll keep you informed of any major changes.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Here to Support You
              </p>
              We&apos;re more than just a platform; we&apos;re your partner in education.
              If you have any questions, concerns, or simply want to share your
              thoughts, feel free to connect with us:
            </p>
          </p>
          <p className="pb-4">
            <p className="text-[24px] font-semibold">Contact Us Anytime</p>
            If you have questions, feedback, or need further assistance,
            we&apos;re here for you! Please reach out to us at: <br />
            <p>Email: info@goedu.in</p>
            <p>
              Contact Number: 01353530324, 9557695360
              <p className="pt-4">
                Thank you for choosing School123 to guide you through the
                important decisions of your educational journey. We&apos;re excited
                to walk this path with you!
              </p>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
