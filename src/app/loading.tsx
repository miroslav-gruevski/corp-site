export default function Loading() {
  return (
    <div className="min-h-[60vh]" role="status" aria-label="Loading page content">
      {/* Hero skeleton */}
      <div className="bg-primary/5 animate-pulse h-[300px] sm:h-[400px]" />
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <div className="h-8 bg-primary/5 rounded-lg animate-pulse w-64" />
          <div className="h-4 bg-primary/5 rounded animate-pulse w-full max-w-xl" />
          <div className="h-4 bg-primary/5 rounded animate-pulse w-full max-w-lg" />
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
