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

export default Input;
