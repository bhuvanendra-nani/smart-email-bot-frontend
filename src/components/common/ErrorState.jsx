export default function ErrorState({ onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <div className="text-6xl mb-4">
        ⚠️
      </div>

      <h2 className="text-2xl font-bold mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-500 mb-6">
        We couldn't load your emails.
      </p>

      <button
        onClick={onRetry}
        className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
      >
        Retry
      </button>

    </div>
  );
}