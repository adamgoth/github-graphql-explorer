import "./Members.scss";

const Members = ({ members }) => {
  return (
    <div className="Members">
      {members.map(m => {
        return (
          <div className="Members-avatar" key={m.avatarUrl}>
            <img src={m.avatarUrl} alt={m.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Members;
