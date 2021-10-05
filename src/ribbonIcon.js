import React from "react";
import PropTypes from "prop-types";

function RibbonIcon({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="26"
      viewBox="0 0 21 26"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M17.503.65H3.497C1.949.65.71 1.878.71 3.394L.696 25.35l9.804-4.117 9.804 4.117V3.394c0-1.516-1.253-2.744-2.8-2.744z"
      />
    </svg>
  );
}

RibbonIcon.propTypes = {
  fill: PropTypes.string
};

RibbonIcon.defaultProps = {
  fill: "#4B4B4B"
};

export default RibbonIcon;
