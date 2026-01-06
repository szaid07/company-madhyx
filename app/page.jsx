import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home-1/Faq";

import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Clients from "@/components/service/Clients";
import Team from "@/components/homes/common/Team";
import Testimonials from "@/components/homes/common/Testimonials";

export const metadata = {
  title: "Madhyx Technologies",
};
export default function Home() {
  return (
    <>
      {/* <SearchPopup /> */}
      <Header1 />
      <Hero />
      <About />
      <Clients />

      <Faq />
      <Portfolio />
      {/* <Team /> */}
      <Testimonials />
      <Blogs />
      <Footer1 />
    </>
  );
}
