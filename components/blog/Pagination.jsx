"use client";

import { allBlogs } from "@/data/blogs";

export default function Pagination({ onPageChange, currentPage }) {
  const totalPages = Math.ceil(allBlogs.length / 5);

  const handlePageChange = (newPage) => {
    currentPage = newPage;
    onPageChange(newPage);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = (currentPage) => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = (currentPage) => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-wrap mt-50">
      <nav aria-label="Page navigation example">
        <ul className="pagination list-wrap">
          {currentPage > 0 && (
            <li
              className="page-item next-page"
              onClick={() => handlePrevPage(currentPage)}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                <i className="fas fa-arrow-left"></i>
              </div>
            </li>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index ? "active" : ""}`}
              onClick={() => handlePageChange(index)}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                {index + 1}
              </div>
            </li>
          ))}
          {currentPage > totalPages - 1 && (
            <li className={`page-item active`}>
              <div style={{ cursor: "pointer" }} className="page-link">
                {currentPage}
              </div>
            </li>
          )}
          {currentPage < totalPages - 1 && (
            <li
              className="page-item next-page"
              onClick={() => handleNextPage(currentPage)}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                <i className="fas fa-arrow-right"></i>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
