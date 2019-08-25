import { useQuery } from "@apollo/react-hooks";
import { ORG_QUERY } from "../shared/queries";
import { App, ErrorMessage, Org } from "../components";

const Index = () => {
  const { data, error, loading } = useQuery(ORG_QUERY, {
    variables: { org: "sprucelabsai" }
  });

  return (
    <App loading={loading}>
      {error && <ErrorMessage error={error} />}
      {!error && data && data.organization && <Org org={data.organization} />}
    </App>
  );
};

export default Index;
