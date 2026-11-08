import { Link } from "react-router-dom";

// Classes CSS d'un bouton : "btn", puis "btn-sm" et/ou "btn-success" / "btn-danger"
const buttonClassName = (size, variant) => ["btn", size && `btn-${size}`, variant && `btn-${variant}`].filter(Boolean).join(" ");

// Un vrai <button> (action)
export function Button({ size, variant, type = "button", children, ...props }) {
  return (
    <button type={type} className={buttonClassName(size, variant)} {...props}>
      {children}
    </button>
  );
}

// Un lien qui a l'apparence d'un bouton (navigation)
export function ButtonLink({ to, size, variant, children }) {
  return (
    <Link to={to} className={buttonClassName(size, variant)}>
      {children}
    </Link>
  );
}
