import * as React from "react";
import clsx from "clsx";

type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: SpanProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
        "bg-white/10 text-slate-100",
        className
      )}
      {...props}
    />
  );
}
