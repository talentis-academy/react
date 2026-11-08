import { useEffect, useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Calcul dérivé au lieu d'un état séparé
  const getFilteredTodos = (todos, filter) => {
    switch (filter) {
      case "todo":
        return todos.filter((t) => !t.completed);
      case "done":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos(todos, filter);

  // Fonction de fetch
  const fetchTodos = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Un seul useEffect pour charger les données
  useEffect(() => {
    fetchTodos();
  }, []); // Une seule fois au mount

  // useEffect avec dépendance
  useEffect(() => {
    console.log("Filter changed:", filter);
  }, [filter]);

  // Toggle pour modifier les todos
  const toggleTodo = (id) => {
    /*const nextTodos = [...todos];
    const todo = nextTodos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      setTodos(nextTodos);
    }*/

    /*setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );*/

    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
      <h2>Todo App</h2>

      {/* Filtres avec compteurs */}
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          margin: 16,
        }}
      >
        <button
          onClick={() => setFilter("all")}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          All ({todos.length})
        </button>
        <button
          onClick={() => setFilter("todo")}
          style={{ fontWeight: filter === "todo" ? "bold" : "normal" }}
        >
          Todo ({todos.filter((t) => !t.completed).length})
        </button>
        <button
          onClick={() => setFilter("done")}
          style={{ fontWeight: filter === "done" ? "bold" : "normal" }}
        >
          Done ({todos.filter((t) => t.completed).length})
        </button>
      </div>

      {/* Liste ou Loading */}
      {loading ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        <ul style={{ padding: 0 }}>
          {filteredTodos.map((todo) => (
            <li key={todo.id} style={{ listStyle: "none", margin: 12 }}>
              <label
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  style={{ marginRight: 8 }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    opacity: todo.completed ? 0.6 : 1,
                  }}
                >
                  {todo.title}
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
