import { AlertIcon, Button, ButtonLink } from "@/components/atoms";

export function ErrorScreenScene({ message, onRetry }) {
  return (
    <div className="center-page error-content">
      <AlertIcon size={64} />
      <h1 className="error-title">Something went wrong!</h1>
      <p className="muted">{message}</p>
      <div className="button-group">
        <Button onClick={onRetry}>Try again</Button>
        <ButtonLink to="/">Go Home</ButtonLink>
      </div>
    </div>
  );
}
