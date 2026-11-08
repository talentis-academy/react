> **Exercice 11 · Correction**

# Page Comments avec un custom hook

*Le hook useFetchApi et la page Comments qui l’utilise.*

| | |
|---|---|
| **Énoncé** | Exercice_11_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Source** | Code du formateur : Formation/hooks/custom-hooks (Code_004). CommentsWithHook.jsx = sa page Comments branchée sur son hook useFetchApi |

## Le custom hook

**`src/hooks/useFetchApi.ts`**

```
import { useEffect, useState } from "react";

function useFetchApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setData(json);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, isError };
}

export default useFetchApi;
```

## La page Comments avec le hook

**`src/components/CommentsWithHook.jsx`**

```jsx
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
```

## Avant : la page Comments sans hook

Pour comparer : toute la logique de fetch (3 states, `getData`, `useEffect`) était dans le composant.

**`src/components/Comments.jsx`**

```jsx
import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      );
      const json = await response.json();
      setComments(json);
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

export default Comments;
```

## App

**`src/App.jsx`**

```jsx
import "./App.css";
import ToggleBtn from "./components/ToggleBtn";
import ToggleCheckbox from "./components/ToggleCheckbox";
import Layout from "./components/Layout";
import Users from "./components/Users";
import Comments from "./components/Comments";
import CommentsWithHook from "./components/CommentsWithHook";

import BadExample from "./components/BadExample";

function App() {
  return <CommentsWithHook />;
}

export default App;
```

## Points clés

- Toute la logique de fetch est dans `useFetchApi` : la page ne garde que l’affichage
- Le même hook sert pour `Users`, `Comments`… avec une URL différente
- `data: comments` renomme `data` à la déstructuration

## Ressources utiles

- Hooks personnalisés : <https://react.dev/learn/reusing-logic-with-custom-hooks>
