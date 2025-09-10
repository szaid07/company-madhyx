import BlogList1 from "@/components/blog/BlogList1";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import Header1 from "@/components/headers/Header1";

import Footer1 from "@/components/footers/Footer1";

import React from "react";

export const metadata = {
  title: "Blogs || Madhyx Tech",
};
export default function BlogPage1() {
  return (
    <>
      <Header1 />
      <Breadcumb url="/assets/img/blog/blog.png" />
      <BlogList1 />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
