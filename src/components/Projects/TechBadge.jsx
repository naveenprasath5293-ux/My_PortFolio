import { memo } from "react";

function TechBadge({ label }) {
  return (
    <span className="rounded-md border border-border-soft px-2.5 py-1 font-mono text-xs text-muted transition-colors">
      {label}
    </span>
  );
}

export default memo(TechBadge);
