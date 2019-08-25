import "./Org.scss";
import { ErrorMessage, Members, Repositories } from "../index";

const Org = ({ data, error }) => (
  <div>
    {error && <ErrorMessage error={error} />}
    {!error && data && data.organization && (
      <div className="Org">
        <h6 className="Org-title">Organization Info</h6>
        <div className="Org-header">
          <div className="Org-image">
            <img
              src={data.organization.avatarUrl}
              alt={`${data.organization.name} avatar`}
            />
          </div>
          <div className="Org-info">
            <div>
              <h3 className="Org-name">{data.organization.name}</h3>
            </div>
            <ul>
              {data.organization.location && (
                <li>
                  <img
                    className="Org-info--icon"
                    alt="location icon"
                    src="../../static/location.svg"
                    height="20px"
                    width="20px"
                  />
                  {data.organization.location}
                </li>
              )}
              {data.organization.websiteUrl && (
                <li>
                  <img
                    className="Org-info--icon"
                    alt="link icon"
                    src="../../static/link.svg"
                    height="20px"
                    width="20px"
                  />
                  {data.organization.websiteUrl}
                </li>
              )}
            </ul>
          </div>
        </div>
        <p className="Org-description">{data.organization.description}</p>
        <div>
          <h6 className="Org-title">Members</h6>
          <Members members={data.organization.membersWithRole.nodes} />
          <h6 className="Org-title">Repositories</h6>
          <Repositories repos={data.organization.repositories.nodes} />
        </div>
      </div>
    )}
  </div>
);

export default Org;
