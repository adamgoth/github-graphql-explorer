import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({ placeholder, onChange, value, type }) => {
  return (
    <input
      className="Input"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string
};

export default Input;
