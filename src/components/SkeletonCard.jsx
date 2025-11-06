export default function SkeletonCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/70 to-gray-900/80 border border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 animate-pulse">
      <div className="h-48 bg-gray-700/60" />
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 bg-gray-700/60 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-700/60 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-700/60 rounded"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]"></div>
    </div>
  );
}
