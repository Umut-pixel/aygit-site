"use client";

import * as React from "react";
import { cn } from "./utils";

// Toggle variants without external dependencies
type ToggleVariant = "default" | "outline";
type ToggleSize = "default" | "sm" | "lg";

interface ToggleVariants {
  variant?: ToggleVariant;
  size?: ToggleSize;
}

// Toggle variants function (no class-variance-authority dependency)
const getToggleVariants = ({ variant = "default", size = "default" }: ToggleVariants) => {
  const baseClasses = [
    "inline-flex items-center justify-center gap-2 rounded-md",
    "text-sm font-medium transition-[color,box-shadow] outline-none whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
  ].join(" ");
  
  const variantClasses = {
    default: "bg-transparent hover:bg-muted hover:text-muted-foreground",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizeClasses = {
    default: "h-9 px-2 min-w-9",
    sm: "h-8 px-1.5 min-w-8",
    lg: "h-10 px-2.5 min-w-10",
  };

  return cn(baseClasses, variantClasses[variant], sizeClasses[size]);
};

// Toggle Component
interface ToggleProps extends Omit<React.ComponentProps<"button">, "onChange"> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  variant?: ToggleVariant;
  size?: ToggleSize;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({
    className,
    pressed,
    defaultPressed = false,
    onPressedChange,
    disabled = false,
    variant = "default",
    size = "default",
    children,
    ...props
  }, ref) => {
    const [internalPressed, setInternalPressed] = React.useState(defaultPressed);
    const isControlled = pressed !== undefined;
    const isPressed = isControlled ? pressed : internalPressed;

    const handleClick = () => {
      if (disabled) return;
      
      const newPressed = !isPressed;
      
      if (!isControlled) {
        setInternalPressed(newPressed);
      }
      
      onPressedChange?.(newPressed);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        handleClick();
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        role="button"
        aria-pressed={isPressed}
        data-slot="toggle"
        data-state={isPressed ? "on" : "off"}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(getToggleVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Toggle.displayName = "Toggle";

// Export variants function for use in toggle-group
const toggleVariants = getToggleVariants;

export { 
  Toggle, 
  toggleVariants, 
  type ToggleProps, 
  type ToggleVariants,
  type ToggleVariant,
  type ToggleSize,
};