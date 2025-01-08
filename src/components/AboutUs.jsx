import React from "react";
import about from "./images/about.jpg";

const AboutUs = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-center underline  decoration-blue-800">
              About Us
            </h2>
            <p className="mt-4 font-normal">
              We provide expert advice for students, professionals, and
              travelers aiming to study or work abroad. With years of
              experience, we ensure a seamless journey for all clients.At Care2
              Training Consultancy, we specialize in guiding individuals on
              their journey to explore global opportunities through tailored
              consultancy services. Whether you’re aspiring to study, work, or
              live abroad, we provide expert advice and personalized solutions
              to help you achieve your dreams. With years of experience in the
              industry, we have assisted countless students and professionals in
              navigating the complexities of visa applications, international
              placements, and relocation processes. Our dedicated team of
              experts is committed to understanding your unique needs and
              providing reliable support at every step of the way. At Care2, we
              believe that no dream is too big. Our mission is to empower you
              with the knowledge, resources, and confidence to unlock global
              opportunities and build a brighter future. Trust us to be your
              partner in success as you take the next step in your international
              journey. Care2 Training Consultancy – Your Gateway to the World!
            </p>
          </div>
          <div className="mt-4">
            <img
              src={about}
              alt="Consultancy team"
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
