import Skeleton from "react-loading-skeleton";

export function TodoListSkeleton() {
  return (
    <div className="m-auto w-full max-w-4xl">
      <form className="flex gap-4 p-4">
        <Skeleton
          height={40}
          baseColor="#18181b"
          containerClassName="w-full"
          highlightColor="#27272a"
        />
        <Skeleton
          width={100}
          height={40}
          baseColor="#4d7c0f"
          highlightColor="#84cc16"
        />
      </form>

      <div className="p-4">
        <Skeleton
          height={40}
          baseColor="#18181b"
          highlightColor="#27272a"
          className="mb-8 max-w-[300px]"
          containerClassName="w-full"
        />

        <div className="flex w-full gap-2">
          <Skeleton
            width={20}
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
          />
          <Skeleton
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
            containerClassName="w-full"
          />
        </div>
        <div className="flex w-full gap-2">
          <Skeleton
            width={20}
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
          />
          <Skeleton
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
            containerClassName="w-full"
          />
        </div>
        <div className="flex w-full gap-2">
          <Skeleton
            width={20}
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
          />
          <Skeleton
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
            containerClassName="w-full"
          />
        </div>
      </div>
      <div className="p-4">
        <Skeleton
          height={40}
          baseColor="#18181b"
          highlightColor="#27272a"
          containerClassName="w-full"
          className="mb-8 max-w-[300px]"
        />

        <div className="flex w-full gap-2">
          <Skeleton
            width={20}
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
          />
          <Skeleton
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
            containerClassName="w-full"
          />
        </div>
        <div className="flex w-full gap-2">
          <Skeleton
            width={20}
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
          />
          <Skeleton
            height={20}
            className="mb-2"
            baseColor="#18181b"
            highlightColor="#27272a"
            containerClassName="w-full"
          />
        </div>
      </div>
    </div>
  );
}
