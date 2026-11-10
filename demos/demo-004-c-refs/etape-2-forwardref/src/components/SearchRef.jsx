import { useRef } from "react";

function SearchRef() {
  // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
  const inputRef = useRef(null);

  return (
    <div>
      <h1>{"Welcome to the Search Page"}</h1>
      <div className="container">
        <div>
          <input ref={inputRef} type="text" placeholder="" />
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              console.log("Test", inputRef);
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

export default SearchRef;
