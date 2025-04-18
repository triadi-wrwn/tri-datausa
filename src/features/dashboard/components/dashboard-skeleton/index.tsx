import { Skeleton } from '@/components/ui-base/skeleton';

const DashboardSkeleton = () => {
  return (
    <div className="p-6">
      <div className="my-10 flex flex-col items-center gap-4">
        <Skeleton className="w-60 h-12" />
        <Skeleton className="w-2/3 h-8" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <Skeleton className="w-2/3 h-80 lg:h-[500px]" />
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <Skeleton className="w-2/3 h-80 lg:h-[500px]" />
        </div>
      </div>
    </div>
  );
};
export default DashboardSkeleton;
