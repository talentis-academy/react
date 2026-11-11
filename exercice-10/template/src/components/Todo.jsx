import { useEffect, useState } from "react";

// Exercice 10 · template : la Todo App faite ensemble (10 todos, sans loading ni filtre)
// TODO 1 : les filtres All / Todo / Done, avec le nombre de todos sur chaque bouton
// TODO 2 : un state loading, et afficher « Loading... » pendant le chargement
// TODO 3 : une checkbox devant chaque todo pour la cocher / décocher (completed)
// TODO 4 : une todo terminée est barrée, avec une opacité plus faible

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
