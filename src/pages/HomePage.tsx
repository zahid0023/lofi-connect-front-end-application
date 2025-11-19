import { Link } from "react-router";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold">Lofi Connect</h1>
      <div className="flex items-center gap-5">
        <Link to="/login" className={cn(buttonVariants())}>
          Login
        </Link>
        <Link to="/register" className={cn(buttonVariants())}>
          Register
        </Link>
      </div>
    </div>
  );
}
