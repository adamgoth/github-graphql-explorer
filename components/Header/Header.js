import { SearchBox, RandomOrgButton } from "../";

import "./Header.scss";

const Header = ({ loading }) => {
  return (
    <header className="Header">
      <SearchBox />
      <RandomOrgButton loading={loading} />
    </header>
  );
};

export default Header;
