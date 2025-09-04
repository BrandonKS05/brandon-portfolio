import * as React from "react";
import clsx from "clsx";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type HProps = React.HTMLAttributes<HTMLHeadingElement>;
type PProps = React.HTMLAttributes<HTMLParagraphElement>;

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return <div className={clsx("p-5 pb-0", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HProps) {
  return <h3 className={clsx("text-xl font-semibold", className)} {...props} />;
}

export function CardDescription({ className, ...props }: PProps) {
  return <p className={clsx("text-sm text-slate-300", className)} {...props} />;
}

export function CardContent({ className, ...props }: DivProps) {
  return <div className={clsx("p-5 pt-3", className)} {...props} />;
}
