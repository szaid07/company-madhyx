import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/service/Breadcumb";
import Clients from "@/components/service/Clients";
import Faq from "@/components/service/Faq";

import React from "react";

export const metadata = {
  title: "Service 3 || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function ServicePage3() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Faq />
      <Clients />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
