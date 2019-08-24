import "./Org.scss";
import { Members, Repositories } from "../index";

const Org = ({ data, error, loading }) => (
  <div>
    {loading && <div>Loading</div>}
    {error && <ErrorMessage message="Error fetching data" />}
    {data && data.organization && (
      <div className="Org">
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
            </ul>
          </div>
        </div>
        <p className="Org-description">{data.organization.description}</p>
        <div>
          <Members members={data.organization.membersWithRole.nodes} />
          <Repositories repos={data.organization.repositories.nodes} />
        </div>
      </div>
    )}
  </div>
);

export default Org;
