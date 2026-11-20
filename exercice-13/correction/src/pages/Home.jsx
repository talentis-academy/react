// Page Home (protégée par le loader requireAuthLoader)
function Home() {
  return (
    <div className="card">
      <h1>Bienvenue sur Car App</h1>
      <p className="card-text">
        Vous êtes connecté. Cette page est protégée : sans connexion, vous
        seriez redirigé vers la page de login.
      </p>
    </div>
  );
}

export default Home;
