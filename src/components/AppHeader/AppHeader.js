import "./AppHeader.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app__header d-flex justify-content-between align-items-center">
      <h1>Abdulboriy</h1>
      <h2>
        {allPosts} posts, like {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
