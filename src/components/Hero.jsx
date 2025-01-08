import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        className="bg-cover mt-10 bg-center h-screen flex items-center justify-center text-center"
        style={{ backgroundImage: "url('banner.jpg')" }}
      >
        <div className="bg-white/70  p-8 rounded-md ">
          <h1 className="text-4xl font-bold">
            Your Gateway to Global Opportunities
          </h1>
          <p className="mt-4 text-lg">
            Expert guidance for student visas, work abroad, and study
            consultancy.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md">
            Let's Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
