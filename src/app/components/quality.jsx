import React from "react";
const Quaility = (props) => {
  const getQualityClass = (quality) => {
    let qualities = "badge p-2 m-1 bg-";
    qualities += quality;
    return qualities;
  };
  const renderQualities = (qualities) => {
    return qualities.map((quality) => (
      <span
        key={quality._id}
        className={getQualityClass(quality.color)}
        badge-padding="10px"
      >
        {quality.name}
      </span>
    ));
  };
  return renderQualities(props.qualities);
};

export default Quaility;
