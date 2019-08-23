import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ORG_QUERY = gql`
  query($org: String!) {
    organization(login: $org) {
      name
      avatarUrl
      url
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          name
          stargazers {
            totalCount
          }
          primaryLanguage {
            name
          }
          pullRequests {
            totalCount
          }
          url
        }
      }
    }
  }
`;

const OrgSearchQuery = props => {
  const [org, setOrg] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const {
    loading: initialLoading,
    error: initialError,
    data: initialData
  } = useQuery(ORG_QUERY, {
    variables: { org: "sprucelabsai" }
  });
  const [getOrg, { loading, error, data }] = useLazyQuery(ORG_QUERY, {});

  const handleSearch = e => {
    e.preventDefault();
    setInitialLoad(false);
    getOrg({ variables: { org } });
  };

  return (
    <>
      <section>
        <input
          placeholder="GitHub Organization"
          onChange={e => setOrg(e.target.value)}
          value={org}
          type="text"
        />
        <button onClick={e => handleSearch(e)}>Search</button>
      </section>
      {props.children({
        initialLoad,
        data,
        error,
        loading,
        initialData,
        initialError,
        initialLoading
      })}
    </>
  );
};

export default OrgSearchQuery;
