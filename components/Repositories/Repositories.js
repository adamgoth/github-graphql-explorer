import PropTypes from "prop-types";
import Link from "next/link";

import "./Repositories.scss";

const Repositories = ({ repos, org }) => {
  return (
    <div className="Repositories">
      {repos.map(repo => {
        const {
          description,
          name,
          stargazers,
          primaryLanguage,
          pullRequests
        } = repo;
        return (
          <div className="Repository" key={repo.name}>
            <Link href="/[org]/[name]" as={`/${org}/${name}`}>
              <h4 className="Repository-name">{name}</h4>
            </Link>
            <p className="Repository-description">{description}</p>
            <ul>
              <li>
                <img
                  className="Repository-icon"
                  alt="star icon"
                  src="../../static/star.svg"
                  height="20px"
                  width="20px"
                />
                {stargazers.totalCount.toLocaleString()}
              </li>
              <li>
                <img
                  className="Repository-icon"
                  alt="language icon"
                  src="../../static/code.svg"
                  height="20px"
                  width="20px"
                />
                {(primaryLanguage && primaryLanguage.name) || ""}
              </li>
              <li>
                <img
                  className="Repository-icon"
                  alt="pull request icon"
                  src="../../static/git-pull-request.svg"
                  height="20px"
                  width="20px"
                />
                {pullRequests.totalCount.toLocaleString()}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

Repositories.defaultProps = {
  repos: []
};

Repositories.propTypes = {
  repos: PropTypes.array,
  org: PropTypes.string
};

export default Repositories;
