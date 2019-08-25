import "./PullRequest.scss";

const PullRequest = ({ data }) => {
  const avatarUrl = data && data.author && data.author.avatarUrl;
  const login = data && data.author && data.author.login;
  const url = data && data.author && data.author.url;
  return (
    <div className="PullRequest">
      <div className="PullRequest-avatar" key={avatarUrl}>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={avatarUrl} alt={login} />
        </a>
      </div>
      <div className="PullRequest-info">
        <a
          className="PullRequest-info--link"
          href={data.url}
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="PullRequest-title">{data.title}</h4>
        </a>
        <ul>
          <li>
            <img
              className="PullRequest-icon"
              alt="clock icon"
              src="../../static/person.svg"
              height="20px"
              width="20px"
            />
            {login}
          </li>
          <li>
            <img
              className="PullRequest-icon"
              alt="clock icon"
              src="../../static/clock.svg"
              height="20px"
              width="20px"
            />
            last updated on {new Date(data.updatedAt).toDateString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PullRequest;
