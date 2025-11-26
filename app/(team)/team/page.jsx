import ContactForm from "@/components/about/Contact";
import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/team/Breadcumb";

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
      <ContactForm />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
