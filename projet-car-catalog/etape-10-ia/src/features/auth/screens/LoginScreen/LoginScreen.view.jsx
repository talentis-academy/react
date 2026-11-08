import { useLogin } from "../../hooks";
import { getLoginErrorMessage } from "./LoginScreen.adapter";
import { LoginScreenScene } from "./LoginScreen.scene";

export function LoginScreenView() {
  const loginMutation = useLogin();

  return (
    <LoginScreenScene
      onSubmit={(credentials) => loginMutation.mutate(credentials)}
      isPending={loginMutation.isPending}
      errorMessage={getLoginErrorMessage(loginMutation.error)}
    />
  );
}
