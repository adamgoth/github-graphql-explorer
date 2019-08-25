import PropTypes from "prop-types";

import "./Members.scss";

const Members = ({ members }) => {
  return (
    <div className="Members">
      {members.map(m => {
        return (
          <div className="Members-avatar" key={m.avatarUrl}>
            <a href={m.url} target="_blank" rel="noreferrer">
              <img src={m.avatarUrl} alt={m.name} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

Members.propTypes = {
  members: PropTypes.array
};

export default Members;
