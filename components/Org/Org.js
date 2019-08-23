import "./Org.scss";
import { Members, Repositories } from "../index";

const Org = ({ data, error, loading }) => (
  <div>
    {loading && <div>Loading</div>}
    {error && <ErrorMessage message="Error fetching data" />}
    {data && data.organization && (
      <>
        <div className="Org">
          <div className="Org-image">
            <img
              src={data.organization.avatarUrl}
              alt={`${data.organization.name} avatar`}
            />
          </div>
          <div className="Org-info">
            <div className="Org-info--top">
              <h3>{data.organization.name}</h3>
              <p>{data.organization.description}</p>
            </div>
            <ul>
              <li>{data.organization.location}</li>
              <li>{data.organization.websiteUrl}</li>
            </ul>
          </div>
        </div>
        <div>
          <Members members={data.organization.membersWithRole.nodes} />
          <Repositories repos={data.organization.repositories.nodes} />
        </div>
      </>
    )}
  </div>
);

export default Org;
