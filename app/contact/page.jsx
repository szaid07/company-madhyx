import MarqueeComponent from "@/components/common/Marquee";
import Breadcumb from "@/components/contact/Breadcumb";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Header1 from "@/components/headers/Header1";

import Footer1 from "@/components/footers/Footer1";

import React from "react";

export const metadata = {
  title: "Contact || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function ContactPage() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <ContactInfo />
      <Contact />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
