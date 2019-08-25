import { Header } from "../";
import Head from "next/head";

import "./App.scss";

export default props => {
  return (
    <>
      <Head>
        <title>GitHub API Explorer</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header getOrg={props.getOrg} orgLoading={props.orgLoading} />
      <main>{props.children}</main>
    </>
  );
};
