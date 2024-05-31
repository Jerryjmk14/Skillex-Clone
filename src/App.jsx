import React from "react";
import Header from "./components/Header";
import Services from "../src/components/Services";
import SkillsSection from "../src/components/SkillsSection";
import CustomerFeedback from "./components/CustomerFeedback";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Services />
      <SkillsSection />
      <CustomerFeedback />
      <Footer />
    </div>
  );
}
