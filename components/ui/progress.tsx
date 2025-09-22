"use client";

import * as React from "react";
import { cn } from "./utils";

interface ProgressProps extends React.ComponentProps<"div"> {
  value?: number;
  max?: number;
  getValueLabel?: (value: number, max: number) => string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, getValueLabel, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const ariaValueText = getValueLabel ? getValueLabel(value, max) : undefined;

    return (
      <div
        ref={ref}
        data-slot="progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={ariaValueText}
        className={cn(
          "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        <div
          data-slot="progress-indicator"
          className="bg-primary h-full flex-1 transition-all duration-300 ease-in-out"
          style={{ 
            width: `${percentage}%`,
            transform: "translateZ(0)" // Force hardware acceleration
          }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress, type ProgressProps };