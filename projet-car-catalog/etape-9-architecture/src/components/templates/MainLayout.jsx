import { Header } from "./Header";
import { Footer } from "./Footer";

// La mise en page commune : en-tête, contenu de la page (children), pied de page
export function MainLayout({ userName, isLoggedIn, onLogout, children }) {
  return (
    <div className="app-layout">
      <Header userName={userName} isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
