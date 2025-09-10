import React from "react";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import Image from "next/image";
import { allBlogs } from "@/data/blogs";

export default function BlogDetails({ blogId }) {
  const blogItem = allBlogs.filter((elm) => elm.id == blogId)[0] || allBlogs[0];
  return (
    <section className="blog__details-area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog__details-wrap">
                <div className="blog__details-thumb">
                  <Image
                    width={856}
                    height={600}
                    src={blogItem.image}
                    alt="img"
                  />
                </div>
                <div className="blog__details-content">
                  <div className="blog-post-meta">
                    <ul className="list-wrap">
                      <li>{blogItem.date}</li>
                      <li>
                        <a href="#">{blogItem.category}</a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="title">{blogItem.title}</h2>
                  <p>{blogItem.p1}</p>
                  <p>{blogItem.p2}</p>
                  <blockquote>
                    <Image
                      width={52}
                      height={32}
                      className="blockquote-icon"
                      src="/assets/img/icon/quote.svg"
                      alt="img"
                    />
                    <p>{`“${blogItem.qoute}”`}</p>
                  </blockquote>
                  <p>{blogItem.p3}</p>
                  <div className="blog__details-inner">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="blog__details-inner-thumb">
                          <Image
                            width={416}
                            height={380}
                            className="cover-image"
                            src={blogItem.bgd_image_1}
                            alt="Blog post detail image showing visual content related to the article"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="blog__details-inner-thumb">
                          <Image
                            width={416}
                            height={380}
                            className="cover-image"
                            src={blogItem.bgd_image_2}
                            alt="Blog post detail image showing visual content related to the article"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>{blogItem.p4}</p>
                  <p>{blogItem.p5}</p>
                </div>
                {/* <div className="blog__avatar-wrap">
                  <div className="blog__avatar-img">
                    <a href="#">
                      <Image
                        width={196}
                        height={180}
                        src="/assets/img/blog/blog_avatar01.png"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="blog__avatar-info">
                    <h4 className="name">
                      <a href="#">Ashton Porter</a>
                    </h4>
                    <p>
                      But in order that you may see whence all this born error
                      of those who accuse pleasure and praise pain will open the
                      whole matter explain the very things which were said by
                      that
                    </p>
                  </div>
                </div>
                <Comments />
                <CommentReplay /> */}
              </div>
            </div>
            <div className="col-30">
              <aside className="blog__sidebar">
                {/* <BlogSerchbar /> */}
                <Categories categories={blogItem.categories} />
                <RecentPosts />
                <Tags tags={blogItem.tags} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
