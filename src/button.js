import React, { useEffect } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./button.scss";

function Button({
  onClick,
  icon,
  text,
  classnames,
  type,
  borderNone,
  disabled,
  loader,
  color,
  bgColor,
  borderRadius
}) {
  let style = {
    color,
    backgroundColor: bgColor,
    borderRadius
  };

  let buttonClassName = cn({
    button: true,
    "no-border": borderNone,
    [type]: type,
    icon: icon && text,
    iconOnly: icon && !text,
    with__loader: loader,
    [classnames]: classnames,
    custom: bgColor
  });

  if (!text) {
    return (
      <button
        style={style}
        className={buttonClassName}
        disabled={disabled}
        onClick={onClick}
      >
        {loader ? loader : icon}
      </button>
    );
  } else if (text && icon) {
    return (
      <button
        style={style}
        className={buttonClassName}
        disabled={disabled}
        onClick={onClick}
      >
        {loader ? loader : icon} {text}
      </button>
    );
  } else {
    return (
      <button
        style={style}
        className={buttonClassName}
        disabled={disabled}
        onClick={onClick}
      >
        {loader}
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  borderNone: PropTypes.bool,
  icon: PropTypes.object,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  classnames: PropTypes.string,
  type: PropTypes.string,
  borderRadius: PropTypes.string
  // type: PropTypes.oneOf([
  //   'primary',
  //   'secondary',
  //   'transparent',
  //   'outline',
  //   'cancel',
  //   'danger',
  // ]),
};

Button.defaultProps = {
  onClick: () => {},
  borderNone: false,
  type: "",
  disabled: false,
  bgColor: "",
  color: "",
  classnames: "",
  borderRadius: "4px"
};

export default Button;
