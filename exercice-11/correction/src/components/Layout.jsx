import useNetworkStatus from "../hooks/usetNetworkStatus";

function Layout() {
  useEffect(() => {
    // call api
    return () => {
      //
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
