import "./RandomOrgButton.scss";

const RandomOrgButton = ({ getOrg, setInitialLoad }) => {
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
    "alibaba"
  ];

  const randomOrg = () => {
    const index = Math.floor(Math.random() * Math.floor(randomOrgs.length));
    return randomOrgs[index];
  };

  const getRandomOrg = e => {
    e.preventDefault();
    getOrg({ variables: { org: randomOrg() } });
    setInitialLoad(false);
  };
  return <button onClick={e => getRandomOrg(e)}>View Random Org</button>;
};

export default RandomOrgButton;
