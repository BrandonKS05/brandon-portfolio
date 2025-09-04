"use client";

import * as React from "react";
import clsx from "clsx";

type ChildWithClassName = React.ReactElement<{ className?: string }>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function Button({ asChild, className, children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
    "bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none";

  if (asChild && React.isValidElement(children)) {
    const child = children as ChildWithClassName;
    return React.cloneElement(child, {
      className: clsx(base, child.props.className, className),
    });
  }

  return (
    <button className={clsx(base, className)} {...props}>
      {children}
    </button>
  );
}
