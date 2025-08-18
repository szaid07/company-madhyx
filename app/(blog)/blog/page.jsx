import BlogList1 from "@/components/blog/BlogList1";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import Header1 from "@/components/headers/Header1";

import Footer8 from "@/components/footers/Footer8";

import React from "react";

export const metadata = {
  title: "Blog 1 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function BlogPage1() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <BlogList1 />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
