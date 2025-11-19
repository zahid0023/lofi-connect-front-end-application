import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { removeAuthToken } from "@/lib/auth-token.util";
import { cn } from "@/lib/utils";

export function Logout({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAuthToken();
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className={cn("text-destructive hover:text-destructive", className)}
      {...props}>
      <LogOutIcon />
      Logout
    </Button>
  );
}
