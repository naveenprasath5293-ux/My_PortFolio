export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void">
      <div
        aria-label="Loading"
        role="status"
        className="h-8 w-8 animate-spin rounded-full border-2 border-border-soft border-t-cyan"
      />
    </div>
  );
}
