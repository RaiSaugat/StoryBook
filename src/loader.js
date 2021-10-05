import PropTypes from "prop-types";

import "./loader.scss";

function Loader({ stroke }) {
  return (
    <svg width="20" height="20">
      <circle
        className="loader"
        stroke={stroke}
        fill="transparent"
        cx="10"
        cy="10"
        r="8.5"
        stroke-width="1.5"
      ></circle>
    </svg>
  );
}

Loader.propType = {
  stroke: PropTypes.string
};

Loader.defaultProps = {
  stroke: "#17d6df"
};

export default Loader;
