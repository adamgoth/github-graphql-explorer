import gql from "graphql-tag";

export const ORG_QUERY = gql`
  query($org: String!) {
    organization(login: $org) {
      name
      login
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
          url
        }
      }
    }
  }
`;

export const REPO_QUERY = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      url
      createdAt
      updatedAt
      pullRequests(
        first: 100
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
          id
          author {
            url
            avatarUrl
            login
          }
          url
          title
          updatedAt
        }
      }
      stargazers {
        totalCount
      }
      languages(first: 100) {
        nodes {
          name
        }
      }
    }
  }
`;
