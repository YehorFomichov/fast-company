import React from "react";

const Bookmark = (props) => {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-bookmark-fill"
      viewBox="0 0 16 16"
    >
      <path d={props.link} />
    </svg>
  );
};

export default Bookmark;
