import useFetchApi from "../hooks/useFetchApi";

function Comments() {
  // Toute la logique de fetch est dans le custom hook useFetchApi : la page ne garde que l'affichage
  const {
    data: comments,
    isLoading,
    isError,
  } = useFetchApi("https://jsonplaceholder.typicode.com/comments?postId=1");

  return (
    <section className="card">
      <h2 className="title">Comments</h2>
      {isError && <p className="error">Erreur de chargement</p>}
      {isLoading ? (
        <p className="loading">Loading ...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Comment</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Comments;
