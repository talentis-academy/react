import { useEffect, useState } from "react";

function Layout() {
  // navigator.onLine : true si le navigateur est connecté
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);

    // Listeners : le navigateur nous prévient quand la connexion revient ou se coupe
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    // Nettoyage : on retire les écouteurs quand le composant disparaît
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  return (
    <>
      {!isOnline && (
        <div style={{ padding: 10, background: "#ffdddd", color: "#900" }}>
          Vous êtes hors ligne
        </div>
      )}

      {isOnline && (
        <div style={{ padding: 10, background: "#ddffdd", color: "#090" }}>
          Vous êtes connecté
        </div>
      )}
    </>
  );
}

export default Layout;
