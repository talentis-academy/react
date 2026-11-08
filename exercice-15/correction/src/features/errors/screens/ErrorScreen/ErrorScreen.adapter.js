export const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred";

// L'erreur levée par une route (Error, Response, valeur quelconque) -> message à afficher
export const getErrorMessage = (error) => error?.message || DEFAULT_ERROR_MESSAGE;
