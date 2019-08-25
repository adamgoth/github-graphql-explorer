import PropTypes from "prop-types";
import Head from "next/head";
import { Header } from "../";

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
      <Header loading={props.loading} />
      <main>{props.children}</main>
    </>
  );
};

App.propTypes = {
  loading: PropTypes.bool
};
