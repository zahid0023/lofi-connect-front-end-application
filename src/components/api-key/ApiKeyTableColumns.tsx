import type { ColumnDef } from "@tanstack/react-table";

import type { ApiKey } from "@/types/api-key";
import { CopyButton } from "@/components/CopyButton";

export const apiKeyTableColumns: ColumnDef<ApiKey>[] = [
  {
    accessorKey: "appKey",
    header: "App Key",
    cell: ({ row }) => <span className="">{row.original.key.slice(0, 3)}...</span>,
    enableSorting: false,
  },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "subAccount", header: "Sub Account" },
  {
    accessorKey: "createdAt",
    header: "Created on",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
  },
  {
    accessorKey: "tier",
    header: "Tier",
    cell: ({ row }) => row.original.tier,
    enableSorting: false,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <CopyButton value={row.original.key} />,
    enableSorting: false,
  },
];
