import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/service/Breadcumb";
import Contact from "@/components/service/Contact";
import Features2 from "@/components/service/Features2";

export const metadata = {
  title: "Service 2 || Frisk - Creative Agency & Portfolio Nextjs Template",
};

import React from "react";

export default function ServicePage2() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Features2 />
      <Contact />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
