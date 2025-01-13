
import AboutUsSchool123 from "@/components/AboutUsSchool123";


export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to Schools123 - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const About = () => {
  return (
    <>

      <AboutUsSchool123 />

     

    </>
  );
};

export default About;
