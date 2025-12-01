import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Breadcumb from "@/components/service/Breadcumb";
import Features1 from "@/components/service/Features1";

import Video from "@/components/service/Video";
export const metadata = {
  title: "Services || Madhyx Tech",
};

export default function ServicePage1() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Features1 />
      {/* <Video /> */}
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
