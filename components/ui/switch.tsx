"use client";

import * as React from "react";
import { cn } from "./utils";

// Switch Component
interface SwitchProps extends Omit<React.ComponentProps<"button">, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  required?: boolean;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({
    className,
    checked,
    defaultChecked = false,
    onCheckedChange,
    disabled = false,
    name,
    value,
    required = false,
    ...props
  }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleClick = () => {
      if (disabled) return;
      
      const newChecked = !isChecked;
      
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      onCheckedChange?.(newChecked);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        handleClick();
      }
    };

    return (
      <>
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-disabled={disabled}
          data-slot="switch"
          data-state={isChecked ? "checked" : "unchecked"}
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={cn(
            "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            isChecked 
              ? "bg-primary" 
              : "bg-switch-background dark:bg-input/80",
            className
          )}
          {...props}
        >
          <span
            data-slot="switch-thumb"
            data-state={isChecked ? "checked" : "unchecked"}
            className={cn(
              "pointer-events-none block size-4 rounded-full ring-0 transition-transform",
              "bg-card dark:bg-card-foreground",
              isChecked 
                ? "translate-x-[calc(100%-2px)] dark:bg-primary-foreground" 
                : "translate-x-0"
            )}
          />
        </button>
        
        {/* Hidden input for form submission */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={value || (isChecked ? "on" : "off")}
            disabled={disabled}
            required={required && isChecked}
          />
        )}
      </>
    );
  }
);

Switch.displayName = "Switch";

export { Switch, type SwitchProps };