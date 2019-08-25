import PropTypes from "prop-types";
import { Members, Repositories } from "../index";

import "./Org.scss";

const Org = ({ org }) => (
  <div>
    <div className="Org">
      <h6 className="Org-title">Organization Info</h6>
      <div className="Org-header">
        <div className="Org-image">
          <img src={org.avatarUrl} alt={`${org.name} avatar`} />
        </div>
        <div className="Org-info">
          <div>
            <h3 className="Org-name">{org.name}</h3>
          </div>
          <ul>
            {org.location && (
              <li>
                <img
                  className="Org-info--icon"
                  alt="location icon"
                  src="../../static/location.svg"
                  height="20px"
                  width="20px"
                />
                {org.location}
              </li>
            )}
            {org.websiteUrl && (
              <li>
                <img
                  className="Org-info--icon"
                  alt="link icon"
                  src="../../static/link.svg"
                  height="20px"
                  width="20px"
                />
                <a href={org.websiteUrl} target="_blank" rel="noreferrer">
                  {org.websiteUrl}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <p className="Org-description">{org.description}</p>
      <div>
        <h6 className="Org-title">Members</h6>
        <Members members={org.membersWithRole.nodes} />
        <h6 className="Org-title">Repositories</h6>
        <Repositories repos={org.repositories.nodes} org={org.login} />
      </div>
    </div>
  </div>
);

Org.propTypes = {
  org: PropTypes.object
};

export default Org;
