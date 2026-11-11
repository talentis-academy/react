import { useEffect, useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

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
    }
  };

  // Un seul useEffect pour charger les données
  useEffect(() => {
    fetchTodos();
  }, []); // Une seule fois au mount

  return (
    <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
      <h2>Todo App</h2>

      {/* inline-block : la liste est centrée dans la page, le texte reste à gauche */}
      <ul style={{ padding: 0, display: "inline-block", textAlign: "left" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ listStyle: "none", margin: 12 }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
