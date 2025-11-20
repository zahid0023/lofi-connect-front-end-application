import { Logout } from "@/components/auth/Logout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DashboardPage() {
  return (
    <>
      <header className="shadow">
        <div className="container flex items-center justify-between py-4">
          {/* <div className="flex items-center justify-between"> */}
          <h2 className="text-xl font-bold">Dashboard</h2>
          <Logout />
          {/* </div> */}
        </div>
      </header>
      <main className="container py-6">
        <div className="flex flex-col gap-2">
          <p>Welcome to your dashboard!</p>
          <div className="flex items-center gap-3">
            <a
              href="https://loficonnect.lofistack.com/api/v1/authorization/init"
              className={cn(buttonVariants())}>
              Get API Token
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
