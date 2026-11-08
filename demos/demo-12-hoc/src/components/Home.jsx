import React from "react";

function withAuth(Component) {
  // retourne un composant (wrapper)
  return function ProtectedComponent(props) {
    const isAuthorized = true;
    const isSessionExpired = false;

    if (!isAuthorized) return <div>Access denied</div>;
    if (isSessionExpired) return <div>Session expired</div>;

    // on passe les props au composant original
    return <Component {...props} />;
  };
}

function PageA() {
  /*const isAuthorized = true;
  const isSessionExpired = false;
  if (!isAuthorized) return <div>Acces denies</div>;
  if (isSessionExpired) return <div>Session expired</div>;*/

  return (
    <div>
      <div className="page">Screen A (Private Content)</div>
    </div>
  );
}

function PageB() {
  /*const isAuthorized = true;
  const isSessionExpired = false;
  if (!isAuthorized) return <div>Acces denies</div>;
  if (isSessionExpired) return <div>Session expired</div>;*/

  return (
    <div>
      <div className="page">Screen B (Private Content)</div>
    </div>
  );
}

const ProtectedPageA = withAuth(PageA);
const ProtectedPageB = withAuth(PageB);

function Home() {
  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <div className="container">
        <ProtectedPageA />
        <ProtectedPageB />
      </div>
    </div>
  );
}

export default Home;

/*function AuthWrapper({ children }) {
  const isAuthorized = true;
  const isSessionExpired = false;

  if (!isAuthorized) return <div>Access denied</div>;
  if (isSessionExpired) return <div>Session expired</div>;
  return <>{children}</>;
}*/
