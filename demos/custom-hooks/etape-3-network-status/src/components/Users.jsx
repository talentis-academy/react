import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
