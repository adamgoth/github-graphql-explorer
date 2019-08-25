import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { ORG_QUERY } from "../queries";
import { App, Org } from "../components";

const Index = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  // this will execute server-side when page loads
  const { error: initialError, data: initialData } = useQuery(ORG_QUERY, {
    variables: { org: "sprucelabsai" }
  });

  // this will execute on manual fetch
  const [getOrg, { loading, error, data }] = useLazyQuery(ORG_QUERY, {
    onCompleted: () => setInitialLoad(false),
    onError: () => setInitialLoad(false)
  });

  return (
    <App getOrg={getOrg} orgLoading={loading}>
      <Org
        data={initialLoad ? initialData : data}
        error={initialLoad ? (initialError ? initialError : error) : error}
      />
    </App>
  );
};

export default Index;
