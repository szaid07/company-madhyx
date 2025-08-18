import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/team/Breadcumb";
import Contact from "@/components/team/Contact";

import Team from "@/components/team/Team";
import React from "react";

export const metadata = {
  title: "Team || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function TeamPage() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Team />
      <Contact />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
