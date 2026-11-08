import { useState } from "react";
function Home() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Test Error (render)");
  }

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <button onClick={() => setCrash(true)}>Throw error</button>
    </div>
  );
}

export default Home;
