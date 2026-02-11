import { clients } from "@/data/clients";
import Image from "next/image";
import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

export default function Clients() {
  return (
    <section className="blog-area space-top">
      <div className="container w-100 mx-0" style={{ maxWidth: "100%" }}>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Our Clients</h2>
            </div>
          </div>
        </div>
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {clients.map((elm, i) => (
              <MarqueeItem key={i}>
                <div className="client-item">
                  <img alt={`Placeholder ${i}`} src={elm.img} />
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
    // <div className="client-area-2 overflow-hidden space-bottom">
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-xl-12">
    //         <ul className="client-list-wrap">
    //           {clients.slice(0, 6).map((elm, i) => (
    //             <li key={i}>
    //               <a href={elm.href}>
    //                 <span className="link-effect">
    //                   <span className="effect-1">
    //                     <Image
    //                       width={162}
    //                       height={35}
    //                       style={{
    //                         objectFit: "contain",
    //                         width: "162px",
    //                         height: "35px",
    //                       }}
    //                       src={elm.img}
    //                       alt="img"
    //                     />
    //                   </span>
    //                   <span className="effect-1">
    //                     <Image
    //                       width={162}
    //                       height={35}
    //                       style={{
    //                         objectFit: "contain",
    //                         width: "162px",
    //                         height: "35px",
    //                       }}
    //                       src={elm.img}
    //                       alt="img"
    //                     />
    //                   </span>
    //                 </span>
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
