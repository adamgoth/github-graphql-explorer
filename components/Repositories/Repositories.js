import "./Repositories.scss";

const Repositories = ({ repos }) => {
  return (
    <>
      {repos.map(repo => {
        const { name, stargazers, primaryLanguage, pullRequests } = repo;
        return (
          <div className="Repository" key={repo.name}>
            <h4>{name}</h4>
            <ul>
              <li>{stargazers.totalCount}</li>
              <li>{(primaryLanguage && primaryLanguage.name) || ""}</li>
              <li>{pullRequests.totalCount}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Repositories;
