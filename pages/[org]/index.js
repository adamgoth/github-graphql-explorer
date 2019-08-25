import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { ORG_QUERY } from "../../queries";
import { App, ErrorMessage, Org } from "../../components";

const Index = () => {
  const router = useRouter();

  const { data, error, loading } = useQuery(ORG_QUERY, {
    variables: { org: router.query.org }
  });

  return (
    <App loading={loading}>
      {error && <ErrorMessage error={error} />}
      {!error && data && data.organization && <Org org={data.organization} />}
    </App>
  );
};

export default Index;
