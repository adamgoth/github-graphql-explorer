import { useState } from "react";
import { Input } from "../shared";

import "./SearchBox.scss";

const SearchBox = ({ getOrg, setInitialLoad }) => {
  const [org, setOrg] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    setInitialLoad(false);
    getOrg({ variables: { org } });
  };

  return (
    <section className="SearchBox">
      <Input
        placeholder="GitHub Organization"
        onChange={e => setOrg(e.target.value)}
        value={org}
        type="text"
      />
      <button className="SearchBox-button" onClick={e => handleSearch(e)}>
        <img
          alt="search icon"
          src="../../static/search.svg"
          width="20px"
          height="20px"
        />
      </button>
    </section>
  );
};

export default SearchBox;
