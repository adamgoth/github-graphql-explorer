import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { REPO_QUERY } from "../../shared/queries";
import { App, ErrorMessage, RepositoryDetail } from "../../components";

const RepositoryDetailPage = () => {
  const router = useRouter();

  const { data, error, loading } = useQuery(REPO_QUERY, {
    variables: { owner: router.query.org, name: router.query.name }
  });

  return (
    <App loading={loading}>
      {error && <ErrorMessage error={error} />}
      {!error && data && data.repository && (
        <RepositoryDetail repo={data.repository} org={router.query.org} />
      )}
    </App>
  );
};

export default RepositoryDetailPage;
