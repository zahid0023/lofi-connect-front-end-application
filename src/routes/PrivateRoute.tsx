import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/hooks/useAuth";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layout/dashboard/AppSidebar";
import { SiteHeader } from "@/layout/dashboard/SiteHeader";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="m-4 lg:ml-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  ) : (
    <Navigate to="/login" />
  );
}
