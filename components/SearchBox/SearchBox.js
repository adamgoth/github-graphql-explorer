import { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "../";

import "./SearchBox.scss";

const SearchBox = () => {
  const router = useRouter();
  const [org, setOrg] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    router.push("/[org]", `/${org}`);
  };

  return (
    <section>
      <form className="SearchBox" onSubmit={e => handleSearch(e)}>
        <Input
          placeholder="Search Organizations"
          onChange={e => setOrg(e.target.value)}
          value={org}
          type="text"
        />
        <button
          className="SearchBox-button"
          type="submit"
          onClick={handleSearch}
        >
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
