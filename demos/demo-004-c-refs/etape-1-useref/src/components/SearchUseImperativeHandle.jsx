import { useImperativeHandle, useRef } from "react";

// React 19 : ref est une prop normale, plus besoin de forwardRef
// correction : Ajout d'une ref interne pour l'input
const SearchInput = ({ ref }) => {
  // IMPORTANT : Créer une ref INTERNE pour l'input
  const inputRef = useRef(null);

  // useImperativeHandle expose des méthodes custom au parent
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current?.focus(); // Utilise inputRef, pas ref
      },
      clear: () => {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
      getValue: () => inputRef.current?.value || "", // Bonus : méthode ajoutée
    }),
    []
  ); // [] : Pas de dépendances, on crée les méthodes une fois

  return (
    <div>
      {/* Utilise inputRef interne, pas ref du parent */}
      <input ref={inputRef} type="text" placeholder="" />
    </div>
  );
};

function SearchUseImperativeHandle() {
  // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Welcome to the Search Page</h1>
      <div className="container">
        <SearchInput ref={inputRef} />
        <div>
          <button
            className="btn"
            onClick={() => {
              inputRef.current?.focus();
            }}
          >
            Focus input
          </button>
          <button
            className="btn"
            onClick={() => {
              inputRef.current?.clear();
            }}
          >
            Clear input
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchUseImperativeHandle;
