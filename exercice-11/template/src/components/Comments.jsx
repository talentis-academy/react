// Exercice 11 · template : la page Comments s'affiche avec de fausses données, à vous de les remplacer par celles de l'API (les TODO)
// TODO 1 : créer le custom hook useFetchApi(url) dans src/hooks/useFetchApi.js
//          il fait le fetch dans un useEffect et retourne { data, isLoading, isError }
// TODO 2 : importer useFetchApi ici

function Comments() {
  // TODO 3 : remplacer ces fausses données par l'appel au hook (voir l'URL dans l'énoncé)
  const comments = [
    { id: 1, name: "Premier commentaire", email: "alice@mail.com" },
    { id: 2, name: "Deuxième commentaire", email: "bob@mail.com" },
    { id: 3, name: "Troisième commentaire", email: "chloe@mail.com" },
  ];

  return (
    <section className="card">
      <h2 className="title">Comments</h2>

      {/* TODO 4 : afficher <p className="loading">Loading ...</p> pendant le chargement, et <p className="error">…</p> si erreur */}
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
    </section>
  );
}

export default Comments;
