"use client";

import * as React from "react";
import { cn } from "./utils";

// Slider Context
interface SliderContextValue {
  min: number;
  max: number;
  step: number;
  orientation: "horizontal" | "vertical";
  disabled: boolean;
  values: number[];
  setValues: (values: number[]) => void;
  dragging: boolean;
  setDragging: (dragging: boolean) => void;
}

const SliderContext = React.createContext<SliderContextValue | null>(null);

function useSlider() {
  const context = React.useContext(SliderContext);
  if (!context) {
    throw new Error("useSlider must be used within a Slider component");
  }
  return context;
}

// Main Slider Component
interface SliderProps extends Omit<React.ComponentProps<"div">, "onChange" | "defaultValue"> {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  inverted?: boolean;
  name?: string;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({
    className,
    value,
    defaultValue = [50],
    onValueChange,
    onValueCommit,
    min = 0,
    max = 100,
    step = 1,
    orientation = "horizontal",
    disabled = false,
    inverted = false,
    name,
    ...props
  }, ref) => {
    const [internalValues, setInternalValues] = React.useState(defaultValue);
    const [dragging, setDragging] = React.useState(false);
    const [dragIndex, setDragIndex] = React.useState(-1);
    
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const isControlled = value !== undefined;
    const values = isControlled ? value : internalValues;

    React.useImperativeHandle(ref, () => sliderRef.current!);

    // Update values
    const updateValues = React.useCallback((newValues: number[]) => {
      const clampedValues = newValues.map(val => 
        Math.min(max, Math.max(min, Math.round(val / step) * step))
      );
      
      if (!isControlled) {
        setInternalValues(clampedValues);
      }
      onValueChange?.(clampedValues);
    }, [min, max, step, isControlled, onValueChange]);

    // Get value from mouse/touch position
    const getValueFromPosition = React.useCallback((clientX: number, clientY: number) => {
      if (!sliderRef.current) return min;

      const rect = sliderRef.current.getBoundingClientRect();
      let percentage;

      if (orientation === "horizontal") {
        const left = inverted ? rect.right - clientX : clientX - rect.left;
        percentage = Math.max(0, Math.min(1, left / rect.width));
      } else {
        const top = inverted ? clientY - rect.top : rect.bottom - clientY;
        percentage = Math.max(0, Math.min(1, top / rect.height));
      }

      return min + percentage * (max - min);
    }, [min, max, orientation, inverted]);

    // Mouse event handlers
    const handleMouseDown = React.useCallback((event: React.MouseEvent, index: number) => {
      if (disabled) return;
      
      event.preventDefault();
      setDragging(true);
      setDragIndex(index);
      
      document.body.style.userSelect = "none";
    }, [disabled]);

    const handleMouseMove = React.useCallback((event: MouseEvent) => {
      if (!dragging || dragIndex === -1) return;

      const newValue = getValueFromPosition(event.clientX, event.clientY);
      const newValues = [...values];
      newValues[dragIndex] = newValue;

      // Ensure thumbs don't cross over
      if (values.length > 1) {
        if (dragIndex > 0 && newValue < values[dragIndex - 1]) {
          newValues[dragIndex] = values[dragIndex - 1];
        }
        if (dragIndex < values.length - 1 && newValue > values[dragIndex + 1]) {
          newValues[dragIndex] = values[dragIndex + 1];
        }
      }

      updateValues(newValues);
    }, [dragging, dragIndex, values, getValueFromPosition, updateValues]);

    const handleMouseUp = React.useCallback(() => {
      setDragging(false);
      setDragIndex(-1);
      document.body.style.userSelect = "";
      onValueCommit?.(values);
    }, [values, onValueCommit]);

    // Touch event handlers
    const handleTouchStart = React.useCallback((event: React.TouchEvent, index: number) => {
      if (disabled) return;
      
      event.preventDefault();
      setDragging(true);
      setDragIndex(index);
    }, [disabled]);

    const handleTouchMove = React.useCallback((event: TouchEvent) => {
      if (!dragging || dragIndex === -1) return;

      const touch = event.touches[0];
      const newValue = getValueFromPosition(touch.clientX, touch.clientY);
      const newValues = [...values];
      newValues[dragIndex] = newValue;

      // Ensure thumbs don't cross over
      if (values.length > 1) {
        if (dragIndex > 0 && newValue < values[dragIndex - 1]) {
          newValues[dragIndex] = values[dragIndex - 1];
        }
        if (dragIndex < values.length - 1 && newValue > values[dragIndex + 1]) {
          newValues[dragIndex] = values[dragIndex + 1];
        }
      }

      updateValues(newValues);
    }, [dragging, dragIndex, values, getValueFromPosition, updateValues]);

    const handleTouchEnd = React.useCallback(() => {
      setDragging(false);
      setDragIndex(-1);
      onValueCommit?.(values);
    }, [values, onValueCommit]);

    // Keyboard event handlers
    const handleKeyDown = React.useCallback((event: React.KeyboardEvent, index: number) => {
      if (disabled) return;

      let delta = 0;
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowDown":
          delta = inverted ? step : -step;
          break;
        case "ArrowRight":
        case "ArrowUp":
          delta = inverted ? -step : step;
          break;
        case "PageDown":
          delta = inverted ? step * 10 : -step * 10;
          break;
        case "PageUp":
          delta = inverted ? -step * 10 : step * 10;
          break;
        case "Home":
          delta = min - values[index];
          break;
        case "End":
          delta = max - values[index];
          break;
        default:
          return;
      }

      event.preventDefault();
      const newValues = [...values];
      newValues[index] = Math.min(max, Math.max(min, values[index] + delta));
      
      // Ensure thumbs don't cross over
      if (values.length > 1) {
        if (index > 0 && newValues[index] < values[index - 1]) {
          newValues[index] = values[index - 1];
        }
        if (index < values.length - 1 && newValues[index] > values[index + 1]) {
          newValues[index] = values[index + 1];
        }
      }

      updateValues(newValues);
    }, [disabled, values, min, max, step, inverted, updateValues]);

    // Mouse event listeners
    React.useEffect(() => {
      if (dragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };
      }
    }, [dragging, handleMouseMove, handleMouseUp]);

    // Touch event listeners
    React.useEffect(() => {
      if (dragging) {
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
        
        return () => {
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
        };
      }
    }, [dragging, handleTouchMove, handleTouchEnd]);

    // Click on track to set value
    const handleTrackClick = React.useCallback((event: React.MouseEvent) => {
      if (disabled || dragging) return;

      const newValue = getValueFromPosition(event.clientX, event.clientY);
      
      // Find closest thumb
      let closestIndex = 0;
      let closestDistance = Math.abs(values[0] - newValue);
      
      for (let i = 1; i < values.length; i++) {
        const distance = Math.abs(values[i] - newValue);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }

      const newValues = [...values];
      newValues[closestIndex] = newValue;
      updateValues(newValues);
      onValueCommit?.(newValues);
    }, [disabled, dragging, values, getValueFromPosition, updateValues, onValueCommit]);

    const contextValue: SliderContextValue = {
      min,
      max,
      step,
      orientation,
      disabled,
      values,
      setValues: updateValues,
      dragging,
      setDragging,
    };

    return (
      <SliderContext.Provider value={contextValue}>
        <div
          ref={sliderRef}
          data-slot="slider"
          data-orientation={orientation}
          data-disabled={disabled}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={values[0]}
          aria-orientation={orientation}
          className={cn(
            "relative flex touch-none select-none items-center",
            orientation === "horizontal" && "w-full",
            orientation === "vertical" && "h-full min-h-44 w-auto flex-col",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          onClick={handleTrackClick}
          {...props}
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          {values.map((value, index) => (
            <SliderThumb
              key={index}
              index={index}
              value={value}
              onMouseDown={(e) => handleMouseDown(e, index)}
              onTouchStart={(e) => handleTouchStart(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
          {/* Hidden inputs for form submission */}
          {name &&
            values.map((value, index) => (
              <input
                key={index}
                type="hidden"
                name={values.length > 1 ? `${name}[${index}]` : name}
                value={value}
              />
            ))}
        </div>
      </SliderContext.Provider>
    );
  }
);

Slider.displayName = "Slider";

// Slider Track Component
interface SliderTrackProps extends React.ComponentProps<"div"> {}

const SliderTrack = React.forwardRef<HTMLDivElement, SliderTrackProps>(
  ({ className, children, ...props }, ref) => {
    const { orientation } = useSlider();

    return (
      <div
        ref={ref}
        data-slot="slider-track"
        data-orientation={orientation}
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full",
          orientation === "horizontal" && "h-4 w-full",
          orientation === "vertical" && "h-full w-1.5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SliderTrack.displayName = "SliderTrack";

// Slider Range Component
interface SliderRangeProps extends React.ComponentProps<"div"> {}

const SliderRange = React.forwardRef<HTMLDivElement, SliderRangeProps>(
  ({ className, ...props }, ref) => {
    const { orientation, values, min, max } = useSlider();

    const rangeStart = values.length > 1 ? values[0] : min;
    const rangeEnd = values.length > 1 ? values[values.length - 1] : values[0];
    
    const startPercentage = ((rangeStart - min) / (max - min)) * 100;
    const endPercentage = ((rangeEnd - min) / (max - min)) * 100;

    const style: React.CSSProperties = {};
    
    if (orientation === "horizontal") {
      style.left = `${Math.min(startPercentage, endPercentage)}%`;
      style.width = `${Math.abs(endPercentage - startPercentage)}%`;
    } else {
      style.bottom = `${Math.min(startPercentage, endPercentage)}%`;
      style.height = `${Math.abs(endPercentage - startPercentage)}%`;
    }

    return (
      <div
        ref={ref}
        data-slot="slider-range"
        data-orientation={orientation}
        className={cn(
          "bg-primary absolute",
          orientation === "horizontal" && "h-full",
          orientation === "vertical" && "w-full",
          className
        )}
        style={style}
        {...props}
      />
    );
  }
);

SliderRange.displayName = "SliderRange";

// Slider Thumb Component
interface SliderThumbProps extends React.ComponentProps<"div"> {
  index: number;
  value: number;
  onMouseDown: (event: React.MouseEvent) => void;
  onTouchStart: (event: React.TouchEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

const SliderThumb = React.forwardRef<HTMLDivElement, SliderThumbProps>(
  ({ 
    className, 
    index, 
    value, 
    onMouseDown, 
    onTouchStart, 
    onKeyDown,
    ...props 
  }, ref) => {
    const { orientation, min, max, disabled } = useSlider();
    
    const percentage = ((value - min) / (max - min)) * 100;
    
    const style: React.CSSProperties = {};
    if (orientation === "horizontal") {
      style.left = `${percentage}%`;
    } else {
      style.bottom = `${percentage}%`;
    }

    return (
      <div
        ref={ref}
        data-slot="slider-thumb"
        data-orientation={orientation}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-orientation={orientation}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          "border-primary bg-background ring-ring/50 absolute block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] outline-none",
          "hover:ring-4 focus-visible:ring-4",
          "disabled:pointer-events-none disabled:opacity-50",
          orientation === "horizontal" && "-translate-x-1/2",
          orientation === "vertical" && "-translate-y-1/2",
          !disabled && "cursor-grab active:cursor-grabbing",
          className
        )}
        style={style}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onKeyDown={onKeyDown}
        {...props}
      />
    );
  }
);

SliderThumb.displayName = "SliderThumb";

export { 
  Slider, 
  SliderTrack, 
  SliderRange, 
  SliderThumb,
  type SliderProps,
  type SliderTrackProps,
  type SliderRangeProps,
  type SliderThumbProps,
};