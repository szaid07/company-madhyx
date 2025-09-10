import Link from "next/link";
import React from "react";
import { allBlogs } from "@/data/blogs";

export default function Breadcumb2({ blogId }) {
  // const { blogId } = useParams(); // Get the blogId from the URL
  // console.log(`blogId: ${blogId}`);
  const blogItem = allBlogs.filter((elm) => elm.id == blogId)[0] || allBlogs[0];
  return (
    <div className="breadcumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
            <li>
              <Link scroll={false} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/blog">
                Blog
              </Link>
            </li>
            <li>{blogItem.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
