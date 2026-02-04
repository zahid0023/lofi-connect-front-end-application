import { CopyButton } from "@/components/CopyButton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function ApiKeyAlertDialog({ apiKey }: { apiKey: string }) {
  return (
    <AlertDialog defaultOpen={!!apiKey}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>API Key Created</AlertDialogTitle>
          <AlertDialogDescription>
            Please copy and store your API key securely. You won't be able to view it again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="relative mt-3 max-w-xl">
          <div className="text-muted-foreground bg-muted rounded-md border px-3 py-2">{apiKey}</div>
          <CopyButton
            value={apiKey}
            variant="outline"
            className="absolute top-1/2 right-1.5 z-30 -translate-y-1/2"
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogAction>I have copied my API key</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
