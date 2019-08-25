# GitHub GraphQL API Explorer

This [Next.js](https://nextjs.org/) application uses [Apollo Client](https://www.apollographql.com/docs/react/) to explore GitHub's [GraphQL API](https://developer.github.com/v4/).

Features include being able to:

- Search for a GitHub organization by name
- Fetch a random open-source organization
- View repository details

![](https://media.giphy.com/media/WOqzAcNSbZlX4cDad1/giphy.gif)

## Running locally

To run locally you will need to authenticate with GitHub by generating a personal access token. Detailed instructions can be found [here](https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql). Once you have a personal access token, complete the following steps:

1. Clone the repo.
2. In the project directory, run `npm install`.
3. Rename the `config-defaults.json` file to `config.json` and copy your token value into the `accessToken` property.
4. Run `npm run dev` to start the application. By default, the application will run on `localhost:3000`.
