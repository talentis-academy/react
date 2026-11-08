import { Spinner } from "../atoms";

// Le chargement pleine page : un spinner et un texte
export function Loading({ text = "Loading..." }) {
  return (
    <div className="center-page">
      <Spinner />
      <p>{text}</p>
    </div>
  );
}
