"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "./utils";

interface CheckboxProps extends Omit<React.ComponentProps<"input">, "type"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  "aria-invalid"?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, onChange, "aria-invalid": ariaInvalid, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(false);
    
    const isControlled = checked !== undefined;
    const checkedState = isControlled ? checked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      onCheckedChange?.(newChecked);
      onChange?.(e);
    };

    return (
      <div className="relative inline-flex">
        <input
          type="checkbox"
          ref={ref}
          checked={checkedState}
          onChange={handleChange}
          className="sr-only peer"
          aria-invalid={ariaInvalid}
          {...props}
        />
        <div
          data-slot="checkbox"
          className={cn(
            "peer border bg-input-background dark:bg-input/30 size-4 shrink-0 rounded-[4px] border shadow-xs transition-all duration-200 outline-none cursor-pointer",
            "hover:border-primary/50",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary dark:peer-checked:bg-primary",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            ariaInvalid && "ring-destructive/20 dark:ring-destructive/40 border-destructive",
            "flex items-center justify-center",
            className,
          )}
        >
          {checkedState && (
            <div
              data-slot="checkbox-indicator"
              className="flex items-center justify-center text-current transition-none"
            >
              <CheckIcon className="size-3.5" />
            </div>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };