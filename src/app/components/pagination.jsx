import React from "react";
import _ from "lodash";

export const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item" + (page === currentPage ? " active" : "")}
            key={"page_" + page}
          >
            <button
              href="#"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};
