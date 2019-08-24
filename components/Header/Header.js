import { SearchBox } from "../";

import "./Header.scss";

const Header = ({ getOrg, setInitialLoad }) => {
  return (
    <header className="Header">
      <SearchBox
        className="Header-searchBox"
        getOrg={getOrg}
        setInitialLoad={setInitialLoad}
      />
    </header>
  );
};

export default Header;
