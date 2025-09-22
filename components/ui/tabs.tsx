"use client";

import * as React from "react";
import { cn } from "./utils";

// Tabs Context
interface TabsContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  orientation: "horizontal" | "vertical";
  disabled: boolean;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a Tabs component");
  }
  return context;
}

// Tabs Root Component
interface TabsProps extends React.ComponentProps<"div"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    className,
    value,
    defaultValue,
    onValueChange,
    orientation = "horizontal",
    disabled = false,
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
      <TabsContext.Provider
        value={{
          value: currentValue,
          onValueChange: handleValueChange,
          orientation,
          disabled,
        }}
      >
        <div
          ref={ref}
          data-slot="tabs"
          data-orientation={orientation}
          className={cn(
            "flex gap-2",
            orientation === "vertical" ? "flex-row" : "flex-col",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = "Tabs";

// Tabs List Component
interface TabsListProps extends React.ComponentProps<"div"> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const { orientation } = useTabs();

    return (
      <div
        ref={ref}
        data-slot="tabs-list"
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          "bg-muted text-muted-foreground inline-flex items-center justify-center rounded-xl p-[3px]",
          orientation === "horizontal" ? "h-9 w-fit flex-row" : "h-fit w-9 flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsList.displayName = "TabsList";

// Tabs Trigger Component
interface TabsTriggerProps extends React.ComponentProps<"button"> {
  value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, disabled: buttonDisabled, ...props }, ref) => {
    const { value: selectedValue, onValueChange, orientation, disabled } = useTabs();
    const isSelected = selectedValue === value;
    const isDisabled = disabled || buttonDisabled;

    const handleClick = () => {
      if (!isDisabled) {
        onValueChange?.(value);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (isDisabled) return;

      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        onValueChange?.(value);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        data-slot="tabs-trigger"
        data-state={isSelected ? "active" : "inactive"}
        data-orientation={orientation}
        aria-selected={isSelected}
        aria-controls={`tabs-content-${value}`}
        tabIndex={isSelected ? 0 : -1}
        disabled={isDisabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-1",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          orientation === "horizontal" ? "h-[calc(100%-1px)] flex-1" : "w-[calc(100%-1px)] flex-1",
          isSelected
            ? "bg-card text-foreground dark:text-foreground dark:border-input dark:bg-input/30"
            : "text-foreground dark:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";

// Tabs Content Component
interface TabsContentProps extends React.ComponentProps<"div"> {
  value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: selectedValue } = useTabs();
    const isSelected = selectedValue === value;

    if (!isSelected) return null;

    return (
      <div
        ref={ref}
        id={`tabs-content-${value}`}
        data-slot="tabs-content"
        data-state={isSelected ? "active" : "inactive"}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`tabs-trigger-${value}`}
        className={cn("flex-1 outline-none", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = "TabsContent";

export { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps,
};