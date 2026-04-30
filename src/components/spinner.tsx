export function Spinner() {
  return (
    <span
      aria-label="Loading"
      className="size-9 animate-[spin_0.8s_linear_infinite] rounded-full border-4 border-border border-t-primary"
      role="status"
    />
  );
}
