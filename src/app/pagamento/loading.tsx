import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="w-full h-full border border-solid flex justify-center items-center text-2xl">
      <LoadingSkeleton />
    </div>
  )
}