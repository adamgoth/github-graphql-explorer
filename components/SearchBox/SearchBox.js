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
    <section>
      <Input
        placeholder="GitHub Organization"
        onChange={e => setOrg(e.target.value)}
        value={org}
        type="text"
      />
      <button onClick={e => handleSearch(e)}>Search</button>
    </section>
  );
};

export default SearchBox;
