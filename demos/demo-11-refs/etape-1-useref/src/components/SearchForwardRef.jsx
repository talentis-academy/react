import { forwardRef, useRef } from "react";

function SearchInput(props, ref) {
  return (
    <div>
      <input ref={ref} type="text" placeholder="" />
    </div>
  );
}

const SearchInputForwarded = forwardRef(SearchInput);

function SearchForwardRef() {
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

export default SearchForwardRef;
