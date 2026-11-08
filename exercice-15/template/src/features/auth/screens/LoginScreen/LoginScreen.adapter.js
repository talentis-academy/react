export const DEFAULT_LOGIN_ERROR = "Login failed. Please try again.";

// Erreur axios -> message lisible : message du serveur, sinon message technique, sinon message par défaut
export const getLoginErrorMessage = (error) => {
  if (!error) return null;
  return error.response?.data?.message || error.message || DEFAULT_LOGIN_ERROR;
};
