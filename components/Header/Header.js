import { SearchBox, RandomOrgButton } from "../";

import "./Header.scss";

const Header = ({ getOrg, orgLoading }) => {
  return (
    <header className="Header">
      <SearchBox className="Header-searchBox" getOrg={getOrg} />
      <RandomOrgButton getOrg={getOrg} orgLoading={orgLoading} />
    </header>
  );
};

export default Header;
