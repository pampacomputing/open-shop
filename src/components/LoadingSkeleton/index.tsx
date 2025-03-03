import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="w-full flex flex-col space-y-4 p-4 ">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-16 w-full" />
    </div>
  );
}
