import React from "react";

type PaginationProps = {
  currentPage: number;
  pages: number;
  switchPage: any;
};

export function Pagination({
  currentPage,
  pages,
  switchPage,
}: PaginationProps) {
  const pageLinks = [];

  for (let i = 1; i <= pages; i++) {
    // let active = currentPage === i ? "active" : "";
    pageLinks.push(
      <li onClick={() => switchPage(i)} key={i}>
        {i}
      </li>
    );
  }

  return (
    <div>
      {currentPage > 1 ? (
        <li onClick={() => switchPage(currentPage - 1)}>Prev</li>
      ) : (
        ""
      )}
      {pageLinks}
      {currentPage < pages ? (
        <li onClick={() => switchPage(currentPage + 1)}>Next</li>
      ) : (
        ""
      )}
    </div>
  );
}
