import gql from "graphql-tag";

export const ORG_QUERY = gql`
  query($org: String!) {
    organization(login: $org) {
      name
      avatarUrl
      url
      description
      location
      websiteUrl
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          name
          description
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
      membersWithRole(first: 100) {
        nodes {
          avatarUrl
          name
        }
      }
    }
  }
`;
