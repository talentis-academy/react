import useFetchApi from "../hooks/useFetchApi";

function Users() {
  // Toute la logique de fetch (data, loading, error) est dans le custom hook useFetchApi
  const {
    data: users,
    isLoading,
    isError,
  } = useFetchApi("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2 className="container">Welcome to users page</h2>
      {isLoading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="header">Id</th>
              <th className="header">Name</th>
              <th className="header">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="item">{user.id}</td>
                  <td className="item">{user.name}</td>
                  <td className="item">{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
