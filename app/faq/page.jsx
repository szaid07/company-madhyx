import MarqueeComponent from "@/components/common/Marquee";
import Breadcumb from "@/components/faq/Breadcumb";
import ContactInfo from "@/components/faq/ContactInfo";
import Faq from "@/components/faq/Faq";
import Header1 from "@/components/headers/Header1";

import Footer1 from "@/components/footers/Footer1";

import React from "react";

export const metadata = {
  title: "Faq || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function FaqPage() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Faq />
      <ContactInfo />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
