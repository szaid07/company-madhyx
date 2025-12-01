import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/portfolio/Breadcumb";

import Projects from "@/components/portfolio/Projects";
import React from "react";
export const metadata = {
  title: "Projects || Madhyx Tech",
};
export default function ProjectPage1() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Projects />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
