import PropTypes from "prop-types";
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

Header.propTypes = {
  loading: PropTypes.bool
};

export default Header;
