import PropTypes from "prop-types";
import Link from "next/link";
import { PullRequest } from "../../components";

import "./RepositoryDetail.scss";

const RepositoryDetail = ({ repo, org }) => {
  return (
    <div className="RepositoryDetail">
      <h6 className="RepositoryDetail-title">Repository Info</h6>

      <span className="RepositoryDetail-name">
        <Link href={"/[org]"} as={`/${org}`}>
          {org}
        </Link>
      </span>
      <span className="RepositoryDetail-name">{` / ${repo.name}`}</span>
      <ul>
        <li>
          <img
            className="RepositoryDetail-icon"
            alt="star icon"
            src="../../static/star.svg"
            height="20px"
            width="20px"
          />
          {repo.stargazers.totalCount.toLocaleString()}
        </li>
        <li>
          <img
            className="RepositoryDetail-icon"
            alt="calendar icon"
            src="../../static/calendar.svg"
            height="20px"
            width="20px"
          />
          created on {new Date(repo.createdAt).toDateString()}
        </li>
        <li>
          <img
            className="RepositoryDetail-icon"
            alt="clock icon"
            src="../../static/clock.svg"
            height="20px"
            width="20px"
          />
          last updated on {new Date(repo.updatedAt).toDateString()}
        </li>
        <li>
          <img
            className="RepositoryDetail-icon"
            alt="code icon"
            src="../../static/code.svg"
            height="20px"
            width="20px"
          />
          {<span>{repo.languages.nodes.map(l => l.name).join(", ")}</span>}
        </li>
      </ul>
      <h6 className="RepositoryDetail-title">Pull Requests</h6>
      {repo.pullRequests.nodes.map(pr => {
        return <PullRequest key={pr.id} data={pr} />;
      })}
    </div>
  );
};

RepositoryDetail.defaultProps = {
  repo: {
    languages: {
      nodes: []
    },
    pullRequests: {
      nodes: []
    }
  }
};

RepositoryDetail.propTypes = {
  repo: PropTypes.object,
  org: PropTypes.string
};

export default RepositoryDetail;
