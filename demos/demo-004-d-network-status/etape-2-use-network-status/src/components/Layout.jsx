import useNetworkStatus from "../hooks/useNetworkStatus";

function Layout() {
  const { isOnline } = useNetworkStatus();

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
