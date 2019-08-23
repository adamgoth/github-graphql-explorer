import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { ORG_QUERY } from "../queries";
import { App, Org, SearchBox } from "../components";

const Index = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  const {
    loading: initialLoading,
    error: initialError,
    data: initialData
  } = useQuery(ORG_QUERY, {
    variables: { org: "sprucelabsai" }
  });
  const [getOrg, { loading, error, data }] = useLazyQuery(ORG_QUERY, {});

  console.log(data);
  return (
    <App>
      <SearchBox getOrg={getOrg} setInitialLoad={setInitialLoad} />
      <Org
        data={initialLoad ? initialData : data}
        error={initialLoad ? initialError : error}
        loading={initialLoad ? initialLoading : loading}
      />
    </App>
  );
};

export default Index;
