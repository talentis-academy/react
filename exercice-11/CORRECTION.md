> **Exercice 11 · Correction**

# Page Comments avec un custom hook

*Le hook useFetchApi et la page Comments qui l’utilise.*

| | |
|---|---|
| **Énoncé** | Exercice_11_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Source** | Code du formateur : Formation/hooks/custom-hooks (Code_004). |

## Le custom hook

**`src/hooks/useFetchApi.js`**

```jsx
import { useEffect, useState } from "react";

// Custom hook useFetchApi : la logique de fetch (data, loading, error), réutilisable : seule l'URL change
function useFetchApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect avec [url] : le fetch se relance si l'URL change
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        // on vérifie la réponse avant de lire le JSON
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useFetchApi;
```

## La page Comments avec le hook

**`src/components/Comments.jsx`**

```jsx
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
```

## App

**`src/App.jsx`**

```jsx
import "./App.css";
import Comments from "./components/Comments";

function App() {
  return (
    <main className="page">
      <Comments />
    </main>
  );
}

export default App;
```

## Points clés

- Toute la logique de fetch est dans `useFetchApi` : la page ne garde que l’affichage
- Le même hook sert pour `Users`, `Comments`… avec une URL différente
- `data: comments` renomme `data` à la déstructuration

## Ressources utiles

- Hooks personnalisés : <https://react.dev/learn/reusing-logic-with-custom-hooks>
