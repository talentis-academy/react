import { ButtonLink } from "@/components/atoms";

// Page 404 : aucune donnée, donc pas de View ni d'adapter, la Scene suffit
export function NotFoundScreenScene() {
  return (
    <div className="center-page">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Page not found</p>
      <ButtonLink to="/">Go Home</ButtonLink>
    </div>
  );
}
