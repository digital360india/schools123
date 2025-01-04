

import "./globals.css";
import HeroSchool123 from "@/components/HeroSchool123";
import FormSchool123 from "@/components/FormSchool123";
import WhyChooseUsSchool123 from "@/components/WhyChooseUsSchool123";
import AboutSchool123 from "@/components/AboutSchool123";
import TestimonailSchool123 from "@/components/TestimonailSchool123";
import MapSchool123 from "@/components/MapSchool123";
import MobileAnimation from "@/components/MobileAnimation";

export async function generateMetadata() {
  return {
    title: "Discover Top Boarding Schools Instantly | Schools123",
    description:
      "Explore your dream boarding school in no time with Schools123. Open the door to limitless educational options and begin your path to a brighter future today.",
    icons: [{ rel: "icon", url: "/schools123logo.svg" }],
    other: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        name: "description",
        content:
          "Explore your dream boarding school in no time with Schools123. Open the door to limitless educational options and begin your path to a brighter future today.",
      },
      {
        name: "keywords",
        content:
          "School Admissions, School consultancy, School consultancy, Online School Listings, Admissions Guidance, Boarding School Listings, Trusted School Consultancy, School Admission Information, Finding the Right Boarding School",
      },
      {
        name: "application-name",
        content: "Schools123",
      },
    ],
    openGraph: {
      locale: "en_US",
      type: "website",
      title: "Discover Top Boarding Schools Instantly | Schools123",
      description:
        "Explore your dream boarding school in no time with Schools123. Open the door to limitless educational options and begin your path to a brighter future today.",
      url: "https://www.schools123.com/",
      site_name: "Schools123",
      images: [
        {
          url: "https://schools123.com/categoryschools123.svg",
          alt: "Schools123 Logo",
        },
      ],
    },
  };
  
}

export default function Home() {
  return (
    <div>
      <HeroSchool123 />
      <FormSchool123 />
      <MapSchool123 />
      <WhyChooseUsSchool123 />
      <div className="xl:hidden">
        <MobileAnimation />
      </div>
      <AboutSchool123 />
      <TestimonailSchool123 />
    </div>
  );
}
