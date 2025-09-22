"use client";

import * as React from "react";
import { cn } from "./utils";

function AspectRatio({
  ratio = 1,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  ratio?: number;
}) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative overflow-hidden", className)}
      style={{
        aspectRatio: ratio,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export { AspectRatio };