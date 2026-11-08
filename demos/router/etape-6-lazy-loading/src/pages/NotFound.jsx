import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>{"Custom Not Found Page"}</h1>
      <Link to={"/"}>
        <h2>Go to home</h2>
      </Link>
    </div>
  );
}

export default NotFound;
