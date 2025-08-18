import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/service/Breadcumb";
import Features1 from "@/components/service/Features1";

import Video from "@/components/service/Video";
export const metadata = {
  title: "Service 1 || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function ServicePage1() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Features1 />
      <Video />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
