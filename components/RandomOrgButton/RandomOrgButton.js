import PropTypes from "prop-types";
import Link from "next/link";
import { LoadingSpinner } from "../";

import "./RandomOrgButton.scss";

const RandomOrgButton = ({ loading }) => {
  const randomOrgs = [
    "adobe",
    "netflix",
    "square",
    "twitter",
    "guardian",
    "yelp",
    "shopify",
    "ibm",
    "microsoft",
    "cloudflare",
    "alibaba",
    "facebook",
    "google",
    "waymo-research",
    "ethereum",
    "apache",
    "bitcoin",
    "unicef",
    "dropbox",
    "sendgrid",
    "twilio",
    "atlassian",
    "sprucelabsai"
  ];

  const randomOrg = () => {
    const index = Math.floor(Math.random() * Math.floor(randomOrgs.length));
    return randomOrgs[index];
  };

  return (
    <section className="RandomOrgButton">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Link href={"/[org]"} as={`/${randomOrg()}`}>
          View Random Organization
        </Link>
      )}
    </section>
  );
};

RandomOrgButton.propTypes = {
  loading: PropTypes.bool
};

export default RandomOrgButton;
