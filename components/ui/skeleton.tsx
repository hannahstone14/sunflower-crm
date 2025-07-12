import { cn } from "@/lib/utils"

<<<<<<< HEAD
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
=======
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
      {...props}
    />
  )
}

export { Skeleton }
