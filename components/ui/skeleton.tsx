import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted bg-light-700/50 dark:bg-dark-500/50",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
