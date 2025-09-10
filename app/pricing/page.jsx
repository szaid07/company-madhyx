import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/pricing/Breadcumb";
import Faq from "@/components/pricing/Faq";

import Pricing from "@/components/pricing/Pricing";
import React from "react";

export const metadata = {
  title: "Pricing || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function PricingPage() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Pricing />
      <Faq />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
