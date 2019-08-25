import { LoadingSpinner } from "../";

import "./RandomOrgButton.scss";

const RandomOrgButton = ({ getOrg, orgLoading }) => {
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
    "atlassian"
  ];

  const randomOrg = () => {
    const index = Math.floor(Math.random() * Math.floor(randomOrgs.length));
    return randomOrgs[index];
  };

  const getRandomOrg = e => {
    e.preventDefault();
    getOrg({
      variables: { org: randomOrg() }
    });
  };
  return (
    <section className="RandomOrgButton">
      {orgLoading ? (
        <LoadingSpinner />
      ) : (
        <button onClick={e => getRandomOrg(e)}>View Random Organization</button>
      )}
    </section>
  );
};

export default RandomOrgButton;
