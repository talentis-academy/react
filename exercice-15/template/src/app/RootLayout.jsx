import { Outlet } from "react-router-dom";
import { MainLayout } from "@/components/templates";
import { useCurrentUser } from "@/features/auth/hooks";

// Fait le lien entre la feature auth (l'utilisateur connecté) et le template, qui ne reçoit que des props
export default function RootLayout() {
  const { user, logout } = useCurrentUser();

  return (
    <MainLayout userName={user?.userName || "Guest"} isLoggedIn={Boolean(user)} onLogout={logout}>
      <Outlet />
    </MainLayout>
  );
}
