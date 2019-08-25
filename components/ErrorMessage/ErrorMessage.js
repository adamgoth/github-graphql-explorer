import "./ErrorMessage.scss";

const Error = ({ error }) => {
  const firstError = error.graphQLErrors[0];

  return (
    <aside className="ErrorMessage">
      <h2>Oops!</h2>
      <p className="ErrorMessage-message">{firstError.message}</p>
    </aside>
  );
};

export default Error;
