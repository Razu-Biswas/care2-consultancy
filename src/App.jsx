import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChoice from "./components/WhyChoice";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <WhyChoice />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
