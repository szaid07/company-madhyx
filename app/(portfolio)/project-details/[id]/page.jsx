import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Breadcumb2 from "@/components/portfolio/Breadcumb2";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import { allPortfolio } from "@/data/portfolio";
export const metadata = {
  title:
    "Project Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default async function ProjectPageDetails(props) {
  const params = await props.params;
  return (
    <>
      <Header1 />
      <Breadcumb2 portfolioId={params.id} />
      <ProjectDetails portfolioId={params.id} />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
