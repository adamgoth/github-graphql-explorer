import { SearchBox, RandomOrgButton } from "../";

import "./Header.scss";

const Header = ({ getOrg, setInitialLoad }) => {
  return (
    <header className="Header">
      <RandomOrgButton getOrg={getOrg} setInitialLoad={setInitialLoad} />
      <SearchBox
        className="Header-searchBox"
        getOrg={getOrg}
        setInitialLoad={setInitialLoad}
      />
    </header>
  );
};

export default Header;
