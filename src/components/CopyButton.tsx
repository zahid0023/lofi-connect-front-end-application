import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export function CopyButton({
  className,
  variant = "default",
  value,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
  src?: string;
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn(
            "absolute top-1.5 right-1.5 z-3 opacity-70 hover:opacity-100 focus-visible:opacity-100",
            className
          )}
          data-slot="copy-button"
          onClick={() => copyToClipboard(value)}
          size="icon-sm"
          variant={variant}
          {...props}>
          <span className="sr-only">Copy</span>
          {isCopied ? <IconCheck strokeWidth={2} /> : <IconCopy strokeWidth={2} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{isCopied ? "Copied" : "Copy to Clipboard"}</TooltipContent>
    </Tooltip>
  );
}
