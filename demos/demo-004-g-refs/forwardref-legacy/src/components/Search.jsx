import { forwardRef, useRef } from "react";

function SearchInput(props, ref) {
  return (
    <div>
      <input ref={ref} type="text" placeholder="" />
    </div>
  );
}

// forwardRef : la ref du parent arrive en 2e paramètre de SearchInput (façon d'avant React 19)
const SearchInputForwarded = forwardRef(SearchInput);

function Search() {
  // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
  const inputRef = useRef(null);
  return (
    <div>
      <h1>{"Welcome to the Search Page"}</h1>
      <div className="container">
        <SearchInputForwarded ref={inputRef} />
        <div>
          <button
            className="btn"
            onClick={() => {
              inputRef.current?.focus();
            }}
          >
            Focus input
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
