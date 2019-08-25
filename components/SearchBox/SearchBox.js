import { useState } from "react";
import { Input } from "../";

import "./SearchBox.scss";

const SearchBox = ({ getOrg }) => {
  const [org, setOrg] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    if (org === "") return;
    getOrg({ variables: { org } });
    setOrg("");
  };

  return (
    <section>
      <form className="SearchBox" onSubmit={handleSearch}>
        <Input
          placeholder="Search Organizations"
          onChange={e => setOrg(e.target.value)}
          value={org}
          type="text"
        />
        <button className="SearchBox-button" type="submit">
          <img
            alt="search icon"
            src="../../static/search.svg"
            width="20px"
            height="20px"
          />
        </button>
      </form>
    </section>
  );
};

export default SearchBox;
