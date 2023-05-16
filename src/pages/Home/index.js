import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Footer } from "../../components/Footer/Footer";
import { Feature } from "./components/Feature";
import { WhyUs } from "./components/WhyUs";
import { Testimonial } from "./components/Testimonial";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
// export * from "./Home";

export const Index = () => {
  return (
    <React.Fragment>
      <Hero />
      <Feature />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </React.Fragment>
  );
};
