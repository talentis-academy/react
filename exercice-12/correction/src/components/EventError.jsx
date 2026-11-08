import { useErrorBoundary } from "react-error-boundary";

// Une erreur dans un event ou un fetch n'est pas captée par un Error Boundary.
// showBoundary permet de l'envoyer quand même à l'ErrorBoundary.
function EventError() {
  const { showBoundary } = useErrorBoundary();

  const handleClick = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/unknown");
      if (!response.ok) {
        throw new Error("Test Error (event / fetch)");
      }
    } catch (error) {
      showBoundary(error);
    }
  };

  return <button onClick={handleClick}>Throw error (event)</button>;
}

export default EventError;
