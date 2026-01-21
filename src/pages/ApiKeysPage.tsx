import { CopyButton } from "@/components/CopyButton";
import { buttonVariants } from "@/components/ui/button";
import { API_BASE_URL } from "@/config/env";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router";

export function ApiKeysPage() {
  const [searchParams] = useSearchParams();
  const apiKey = searchParams.get("appKey");

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">API Keys</h1>
      <div className="flex items-center gap-3">
        <a href={`${API_BASE_URL}/authorization/init`} className={cn(buttonVariants())}>
          Get API Key
        </a>
      </div>
      {apiKey && (
        <div className="relative mt-3 max-w-xl">
          <div className="text-muted-foreground bg-muted rounded-md border px-3 py-2">{apiKey}</div>
          <CopyButton value={apiKey} />
        </div>
      )}
    </div>
  );
}
