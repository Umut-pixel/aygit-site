"use client";

import * as React from "react";
import { CircleIcon } from "lucide-react";
import { cn } from "./utils";

// RadioGroup Context
interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

function useRadioGroup() {
  const context = React.useContext(RadioGroupContext);
  if (!context) {
    throw new Error("useRadioGroup must be used within a RadioGroup component");
  }
  return context;
}

// RadioGroup Root Component
interface RadioGroupProps extends Omit<React.ComponentProps<"div">, "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  orientation?: "horizontal" | "vertical";
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ 
    className, 
    value, 
    defaultValue,
    onValueChange,
    disabled = false,
    required = false,
    name,
    orientation = "vertical",
    children,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleValueChange = React.useCallback((newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    }, [isControlled, onValueChange]);

    return (
      <RadioGroupContext.Provider 
        value={{ 
          value: currentValue, 
          onValueChange: handleValueChange, 
          disabled,
          required,
          name 
        }}
      >
        <div
          ref={ref}
          data-slot="radio-group"
          role="radiogroup"
          aria-required={required}
          aria-disabled={disabled}
          data-orientation={orientation}
          className={cn(
            "grid gap-3",
            orientation === "horizontal" && "grid-flow-col auto-cols-max",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

// RadioGroup Item Component
interface RadioGroupItemProps extends Omit<React.ComponentProps<"button">, "value"> {
  value: string;
  disabled?: boolean;
  id?: string;
}

const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className, value, disabled: itemDisabled, id, ...props }, ref) => {
    const { 
      value: groupValue, 
      onValueChange, 
      disabled: groupDisabled, 
      name 
    } = useRadioGroup();
    
    const isDisabled = groupDisabled || itemDisabled;
    const isChecked = groupValue === value;
    const itemId = id || `radio-${value}`;

    const handleClick = () => {
      if (!isDisabled && onValueChange) {
        onValueChange(value);
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
        role="radio"
        id={itemId}
        data-slot="radio-group-item"
        aria-checked={isChecked}
        aria-disabled={isDisabled}
        data-state={isChecked ? "checked" : "unchecked"}
        data-disabled={isDisabled}
        value={value}
        disabled={isDisabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
          "hover:border-primary/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary/10",
          className
        )}
        {...props}
      >
        <span
          data-slot="radio-group-indicator"
          className="relative flex items-center justify-center"
        >
          {isChecked && (
            <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
          )}
        </span>
        {/* Hidden input for form submission */}
        <input
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={() => {}} // Controlled by button click
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
      </button>
    );
  }
);

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem, type RadioGroupProps, type RadioGroupItemProps };