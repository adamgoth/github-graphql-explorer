import App from "../components/App";
import OrgSearchQuery from "../components/OrgSearchQuery";

const Index = () => (
  <App>
    <OrgSearchQuery>
      {({
        initialLoad = true,
        data,
        error,
        loading,
        initialData,
        initialError,
        initialLoading
      }) => {
        console.log(data);
        return initialLoad ? (
          <div>
            {initialLoading && <div>Loading</div>}
            {initialError && <ErrorMessage message="Error fetching data" />}
            {initialData && initialData.organization && (
              <>
                {initialData.organization.repositories.nodes.map(repo => (
                  <p key={repo.name}>{repo.name}</p>
                ))}
              </>
            )}
          </div>
        ) : (
          <div>
            {loading && <div>Loading</div>}
            {error && <ErrorMessage message="Error fetching data" />}
            {data && data.organization && (
              <>
                {data.organization.repositories.nodes.map(repo => (
                  <p key={repo.name}>{repo.name}</p>
                ))}
              </>
            )}
          </div>
        );
      }}
    </OrgSearchQuery>
  </App>
);

export default Index;
