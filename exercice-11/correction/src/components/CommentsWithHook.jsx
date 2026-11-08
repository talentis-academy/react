import useFetchApi from "../hooks/useFetchApi";

function CommentsWithHook() {
  const {
    data: comments,
    isLoading,
    isError,
  } = useFetchApi("https://jsonplaceholder.typicode.com/comments?postId=1");

  return (
    <div>
      <h2 className="container">Welcome to comments page</h2>
      {isLoading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="header">Id</th>
              <th className="header">Comment</th>
              <th className="header">Email</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => {
              return (
                <tr key={comment.id}>
                  <td className="item">{comment.id}</td>
                  <td className="item">{comment.name}</td>
                  <td className="item">{comment.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CommentsWithHook;
