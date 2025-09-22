"use client";

import * as React from "react";
import { cn } from "./utils";
import { toggleVariants, type ToggleVariants, type ToggleVariant, type ToggleSize } from "./toggle";

// Toggle Group Context
interface ToggleGroupContextValue extends ToggleVariants {
  type: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(null);

function useToggleGroup() {
  const context = React.useContext(ToggleGroupContext);
  if (!context) {
    throw new Error("useToggleGroup must be used within a ToggleGroup component");
  }
  return context;
}

// Toggle Group Root Component
interface ToggleGroupSingleProps extends ToggleVariants {
  type: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

interface ToggleGroupMultipleProps extends ToggleVariants {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

type ToggleGroupProps = (ToggleGroupSingleProps | ToggleGroupMultipleProps) & 
  Omit<React.ComponentProps<"div">, "onChange"> & {
    disabled?: boolean;
    orientation?: "horizontal" | "vertical";
  };

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({
    className,
    type,
    value,
    defaultValue,
    onValueChange,
    variant = "default",
    size = "default",
    disabled = false,
    orientation = "horizontal",
    children,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || (type === "multiple" ? [] : ""));
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleValueChange = React.useCallback((newValue: string | string[]) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue as any);
    }, [isControlled, onValueChange]);

    const contextValue: ToggleGroupContextValue = {
      type,
      value: currentValue,
      onValueChange: handleValueChange,
      variant,
      size,
      disabled,
    };

    return (
      <ToggleGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-slot="toggle-group"
          data-variant={variant}
          data-size={size}
          data-orientation={orientation}
          role={type === "single" ? "radiogroup" : "group"}
          className={cn(
            "group/toggle-group flex w-fit items-center rounded-md",
            orientation === "horizontal" ? "flex-row" : "flex-col",
            variant === "outline" && "shadow-xs",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  }
);

ToggleGroup.displayName = "ToggleGroup";

// Toggle Group Item Component
interface ToggleGroupItemProps extends Omit<React.ComponentProps<"button">, "onChange"> {
  value: string;
  variant?: ToggleVariant;
  size?: ToggleSize;
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({
    className,
    value: itemValue,
    variant: itemVariant,
    size: itemSize,
    disabled: itemDisabled,
    children,
    ...props
  }, ref) => {
    const context = useToggleGroup();
    const { 
      type, 
      value, 
      onValueChange, 
      variant: contextVariant, 
      size: contextSize, 
      disabled: contextDisabled 
    } = context;

    const finalVariant = itemVariant || contextVariant || "default";
    const finalSize = itemSize || contextSize || "default";
    const isDisabled = contextDisabled || itemDisabled;

    // Determine if this item is pressed
    const isPressed = React.useMemo(() => {
      if (type === "single") {
        return value === itemValue;
      } else {
        return Array.isArray(value) && value.includes(itemValue);
      }
    }, [type, value, itemValue]);

    const handleClick = () => {
      if (isDisabled) return;

      if (type === "single") {
        // For single selection, set the value or clear it if clicking the same item
        const newValue = isPressed ? "" : itemValue;
        onValueChange?.(newValue);
      } else {
        // For multiple selection, toggle the item in the array
        const currentArray = Array.isArray(value) ? value : [];
        const newValue = isPressed
          ? currentArray.filter(v => v !== itemValue)
          : [...currentArray, itemValue];
        onValueChange?.(newValue);
      }
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
        role={type === "single" ? "radio" : "checkbox"}
        aria-checked={isPressed}
        aria-disabled={isDisabled}
        data-slot="toggle-group-item"
        data-state={isPressed ? "on" : "off"}
        data-variant={finalVariant}
        data-size={finalSize}
        disabled={isDisabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          toggleVariants({ variant: finalVariant, size: finalSize }),
          "min-w-0 flex-1 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10",
          "first:rounded-l-md last:rounded-r-md",
          finalVariant === "outline" && "border-l-0 first:border-l",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ToggleGroupItem.displayName = "ToggleGroupItem";

export { 
  ToggleGroup, 
  ToggleGroupItem,
  type ToggleGroupProps,
  type ToggleGroupItemProps,
  type ToggleGroupSingleProps,
  type ToggleGroupMultipleProps,
};