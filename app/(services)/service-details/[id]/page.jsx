import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import ServiceDetails from "@/components/service/ServiceDetails";
import { allFeatures } from "@/data/features";

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allFeatures.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export const metadata = {
  title:
    "Service Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default async function ServicePageDetails(props) {
  const params = await props.params;
  return (
    <>
      <Header1 />
      <ServiceDetails serviceId={params.id} />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
