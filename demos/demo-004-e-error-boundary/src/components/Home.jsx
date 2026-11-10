import { useState } from "react";
function Home() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    // Erreur lancée pendant le render : c'est ce que l'Error Boundary attrape (pas les erreurs d'un onClick)
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
