import { AlertIcon, CheckIcon, Spinner } from "../atoms";

const ICONS = {
  loading: <Spinner />,
  success: <CheckIcon />,
  error: <AlertIcon />,
};

// Un encadré de message : variant = "loading" | "success" | "error"
export function StatusMessage({ variant, children }) {
  return (
    <div className={`message-box ${variant}-box`}>
      {ICONS[variant]}
      <span>{children}</span>
    </div>
  );
}
