import { apiKeyTableColumns } from "@/components/api-key/ApiKeyTableColumns";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table/data-table";
import { DataTableProvider } from "@/components/ui/data-table/data-table-provider";
import { API_BASE_URL } from "@/config/env";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router";

import { ApiKeyAlertDialog } from "@/components/api-key/ApiKeyAlertDialog";

const apiKeys = [
  {
    id: "1",
    key: "abcd1234efgh5678ijkl9012mnop3456",
    name: "My First API Key",
    subAccount: "default",
    tier: "free",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    key: "qrst7890uvwx1234yzab5678cdef9012",
    name: "Analytics Key",
    subAccount: "analytics",
    tier: "pro",
    createdAt: "2024-02-20T14:45:00Z",
  },
  {
    id: "3",
    key: "ghij3456klmn7890opqr1234stuv5678",
    name: "Backup Key",
    subAccount: "backup",
    tier: "enterprise",
    createdAt: "2024-03-10T09:15:00Z",
  },
];

export function ApiKeysPage() {
  const [searchParams] = useSearchParams();
  const apiKey = searchParams.get("appKey");

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold">API Keys</h1>
        <div className="flex items-center gap-3">
          <a href={`${API_BASE_URL}/authorization/init`} className={cn(buttonVariants())}>
            Get API Key
          </a>
        </div>
      </div>
      {apiKey && <ApiKeyAlertDialog apiKey={apiKey} />}

      <div className="mt-5">
        <DataTableProvider columns={apiKeyTableColumns} data={apiKeys}>
          <DataTable />
        </DataTableProvider>
      </div>
    </div>
  );
}
