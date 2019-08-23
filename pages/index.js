import { App, Org, OrgSearchQuery } from "../components";

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
        return (
          <>
            <Org
              data={initialLoad ? initialData : data}
              error={initialLoad ? initialError : error}
              loading={initialLoad ? initialLoading : loading}
            />
          </>
        );
      }}
    </OrgSearchQuery>
  </App>
);

export default Index;
