import PropTypes from "prop-types";
import "./ErrorMessage.scss";

const ErrorMessage = ({ error }) => {
  const firstError = error.graphQLErrors[0];

  return (
    <aside className="ErrorMessage">
      <h2>Oops!</h2>
      <p className="ErrorMessage-message">{firstError.message}</p>
    </aside>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.object
};

export default ErrorMessage;
