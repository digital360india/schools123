import Authprovider from "@/components/Authprovider/Authprovider";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { FooterLinks } from "@/components/FooterLinks";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Popup from "@/components/Popup";
// import Head from "next/head";
// import Popup from "@/components/Ppoup";

export async function generateMetadata() {
  return {
    title: "Discover Top Boarding Schools Instantly | Schools123",
    description:
      "Explore your dream boarding school in no time with Schools123. Open the door to limitless educational options and begin your path to a brighter future today.",
    icons: [{ rel: "icon", url: "/schools123logo.png" }],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head></Head> */}
      <body className="overflow-x-hidden">
        <ToastContainer />
        <Authprovider>
          <Navbar />
          <Popup/>
          {children}
          <Footer />
          <FooterLinks />
        </Authprovider>
        <div className="fixed bottom-4 left-4 z-50">
          <Link href="tel:+9557695360" aria-label="Phone">
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600">
              <FaPhoneAlt className="text-2xl " />
            </button>
          </Link>
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <Link href="https://wa.me/9557695360" aria-label="WhatsApp">
            <button className="bg-green-500 text-white p-[12px] rounded-full shadow-lg hover:bg-green-600">
              <FaWhatsapp className="md:text-[33px] text-3xl md:text-2xl" />
            </button>
          </Link>
        </div>
      </body>
    </html>
  );
}
