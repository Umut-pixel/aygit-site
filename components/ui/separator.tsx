"use client";

import * as React from "react";
import { cn } from "./utils";

// Separator Component
interface SeparatorProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ 
    className, 
    orientation = "horizontal", 
    decorative = true, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="separator-root"
        data-orientation={orientation}
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation}
        className={cn(
          "bg-border shrink-0",
          orientation === "horizontal" && "h-px w-full",
          orientation === "vertical" && "h-full w-px",
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator, type SeparatorProps };