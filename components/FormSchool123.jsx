"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { base } from "@/app/api/airtable";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const FormSchool123 = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    phone: "",
    source : "Schools123 - https://schools123.vercel.app",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const airtablePayload = [
      {
        fields: {
          firstName: formData.name,
          phoneNumber: formData.phone,
          URL: window.location.href,
        },
      },
    ];
    try {
      await base("counsellorForm").create(
        airtablePayload,
        function (err, records) {
          if (err) {
            console.error("Airtable Error:", err);
            alert("Airtable submission failed. Please try again.");
            return;
          }

          records.forEach(() => {
            console.log("Airtable submission successful!");
          });
        }
      );

      const emailResponse = await axios.post(
        "https://goedunodemailer.onrender.com/send-email",
        formData
      );

      if (emailResponse.status === 200) {
        toast.success("Form Submitted Successfully!");
        setFormData({
          name: "",
          phone: "",
          source: "EduKaro - www.edukaro.com",
        });
      } else {
        alert("Email submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative w-full h-[510px] md:h-[539px]">
      <div className="absolute inset-0 z-0 md:block hidden w-[50%]">
          <Image
            src="/Bookconsultation1.png"
            alt="School choice"
            width={1000}
            height={1000}
            className="w-[795px] h-[539px] object-cover"
          />
        </div>

        <div className="absolute md:right-10  top-1/2 transform -translate-y-1/2 z-10 md:w-fit w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <div className="md:hidden block font-bold text-center text-[20px]">
            Confuse to choose the Best School ?
          </div>
          <h3 className="md:text-xl  text-[16px] my-6 text-[#323232]">
            Fill this form and get in touch with our counsellor
          </h3>
          <form onSubmit={handleSubmit} className="space-y-7">
            <input
            required
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded lg:w-[498px] sm:border-[#D9D9D9]"
            />
            {/* <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
          /> */}
             <div className="flex w-full lg:w-[498px]">
              <PhoneInput
                className="w-full border-[#D9D9D9] border rounded md:border md:rounded"
                country={"in"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "39px",
                  border: "none",
                }}
                buttonStyle={{
                  border: "1px solid #D9D9D9",
                }}
              />
            </div>
            {/* <div className="flex md:gap-20 gap-8">
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="p-2 border border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded "
            >
              <option value="" className="text-[#898989]">
                Class
              </option>
              
            </select>
            <select
              name="board"
              value={formData.board}
              onChange={handleChange}
              className="p-2 border border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded"
            >
              <option value="" className="text-[#898989]">
                BOARD
              </option>
              
            </select>
          </div> */}
            <div className="md:pt-2 pt-8 cursor-pointer">
              {/* <button
                type="submit"
                className="md:w-[160px] md:h-[50px] md:px-0 px-8 md:py-0 py-3  bg-[#1B6EA1] text-white p-2 rounded-lg hover:bg-[#1b6ea1c9]"
              >
                Submit
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className={`md:w-[160px] md:h-[50px] md:px-0 px-8 md:py-0 py-3 bg-background-dark text-white p-2 rounded-lg ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-[#1a674d]"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FormSchool123;
