import React from "react";

export default function Breadcumb({ url = null }) {
  const tempUrl = url || "/assets/img/bg/breadcumb-bg1-8.jpg";
  return (
    <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: `url(${tempUrl})` }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Blog</h1>
        </div>
      </div>
    </div>
  );
}
