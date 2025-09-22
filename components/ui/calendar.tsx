"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./utils";
import { buttonVariants } from "./button";

type CalendarMode = "single" | "multiple" | "range";

interface CalendarProps {
  mode?: CalendarMode;
  selected?: Date | Date[] | { from: Date; to?: Date };
  onSelect?: (date: Date | Date[] | { from: Date; to?: Date } | undefined) => void;
  disabled?: (date: Date) => boolean;
  showOutsideDays?: boolean;
  className?: string;
  classNames?: Record<string, string>;
  defaultMonth?: Date;
  month?: Date;
  onMonthChange?: (month: Date) => void;
  numberOfMonths?: number;
}

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Calendar({
  mode = "single",
  selected,
  onSelect,
  disabled,
  showOutsideDays = true,
  className,
  classNames = {},
  defaultMonth,
  month,
  onMonthChange,
  numberOfMonths = 1,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(() => {
    if (month) return month;
    if (defaultMonth) return defaultMonth;
    if (selected) {
      if (selected instanceof Date) return selected;
      if (Array.isArray(selected) && selected[0]) return selected[0];
      if (typeof selected === "object" && !Array.isArray(selected) && "from" in selected && selected.from) return selected.from;
    }
    return new Date();
  });

  const isControlled = month !== undefined;

  const handleMonthChange = (newMonth: Date) => {
    if (isControlled) {
      onMonthChange?.(newMonth);
    } else {
      setCurrentMonth(newMonth);
    }
  };

  const displayMonth = isControlled ? month! : currentMonth;

  const navigateToPreviousMonth = () => {
    const newMonth = new Date(displayMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    handleMonthChange(newMonth);
  };

  const navigateToNextMonth = () => {
    const newMonth = new Date(displayMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    handleMonthChange(newMonth);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: Date[] = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) { // 6 weeks × 7 days
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const isDateSelected = (date: Date) => {
    if (!selected) return false;
    
    if (mode === "single") {
      return selected instanceof Date && isSameDay(date, selected);
    }
    
    if (mode === "multiple") {
      return Array.isArray(selected) && selected.some(d => isSameDay(date, d));
    }
    
    if (mode === "range") {
      if (typeof selected === "object" && "from" in selected) {
        if (!selected.to) {
          return isSameDay(date, selected.from);
        }
        return date >= selected.from && date <= selected.to;
      }
    }
    
    return false;
  };

  const isDateInRange = (date: Date) => {
    if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) {
      return false;
    }
    
    if (!selected.to) return false;
    
    return date > selected.from && date < selected.to;
  };

  const isRangeStart = (date: Date) => {
    if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) {
      return false;
    }
    
    return isSameDay(date, selected.from);
  };

  const isRangeEnd = (date: Date) => {
    if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected) || !selected.to) {
      return false;
    }
    
    return isSameDay(date, selected.to);
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const isToday = (date: Date) => {
    return isSameDay(date, new Date());
  };

  const isOutsideCurrentMonth = (date: Date) => {
    return date.getMonth() !== displayMonth.getMonth();
  };

  const handleDateClick = (date: Date) => {
    if (disabled?.(date)) return;

    if (mode === "single") {
      onSelect?.(date);
    } else if (mode === "multiple") {
      const currentSelected = Array.isArray(selected) ? selected : [];
      const isAlreadySelected = currentSelected.some(d => isSameDay(date, d));
      
      if (isAlreadySelected) {
        onSelect?.(currentSelected.filter(d => !isSameDay(date, d)));
      } else {
        onSelect?.([...currentSelected, date]);
      }
    } else if (mode === "range") {
      const currentRange = typeof selected === "object" && "from" in selected ? selected : { from: date };
      
      if (!currentRange.to || (currentRange.from && currentRange.to)) {
        // Start new range
        onSelect?.({ from: date });
      } else if (currentRange.from && date < currentRange.from) {
        // Click before start date, make it new start
        onSelect?.({ from: date });
      } else {
        // Complete the range
        onSelect?.({ from: currentRange.from, to: date });
      }
    }
  };

  const days = getDaysInMonth(displayMonth);

  return (
    <div
      className={cn("p-3", className)}
      {...props}
    >
      <div className={cn("flex flex-col gap-4", classNames.month)}>
        {/* Header */}
        <div className={cn("flex justify-center pt-1 relative items-center w-full", classNames.caption)}>
          <button
            type="button"
            onClick={navigateToPreviousMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1",
              classNames.nav_button,
              classNames.nav_button_previous
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
          
          <div className={cn("text-sm font-medium", classNames.caption_label)}>
            {MONTHS[displayMonth.getMonth()]} {displayMonth.getFullYear()}
          </div>
          
          <button
            type="button"
            onClick={navigateToNextMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1",
              classNames.nav_button,
              classNames.nav_button_next
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        {/* Calendar Grid */}
        <table className={cn("w-full border-collapse space-x-1", classNames.table)}>
          {/* Days of week header */}
          <thead>
            <tr className={cn("flex", classNames.head_row)}>
              {DAYS_OF_WEEK.map((day) => (
                <th
                  key={day}
                  className={cn(
                    "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                    classNames.head_cell
                  )}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Calendar days */}
          <tbody>
            {Array.from({ length: 6 }, (_, weekIndex) => (
              <tr key={weekIndex} className={cn("flex w-full mt-2", classNames.row)}>
                {days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((date, dayIndex) => {
                  const isSelected = isDateSelected(date);
                  const isInRange = isDateInRange(date);
                  const isStart = isRangeStart(date);
                  const isEnd = isRangeEnd(date);
                  const isCurrentToday = isToday(date);
                  const isOutside = isOutsideCurrentMonth(date);
                  const isDisabled = disabled?.(date);

                  if (isOutside && !showOutsideDays) {
                    return (
                      <td
                        key={`${weekIndex}-${dayIndex}`}
                        className={cn(
                          "relative p-0 text-center text-sm",
                          classNames.cell
                        )}
                      >
                        <div className="size-8" />
                      </td>
                    );
                  }

                  return (
                    <td
                      key={`${weekIndex}-${dayIndex}`}
                      className={cn(
                        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
                        isSelected && "[&:has([aria-selected])]:bg-accent",
                        mode === "range" && "[&:has([aria-selected].day-range-end)]:rounded-r-md",
                        mode === "range" && "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
                        mode !== "range" && "[&:has([aria-selected])]:rounded-md",
                        classNames.cell
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => handleDateClick(date)}
                        disabled={isDisabled}
                        aria-selected={isSelected}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "size-8 p-0 font-normal aria-selected:opacity-100",
                          isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                          isStart && "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
                          isEnd && "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
                          isCurrentToday && !isSelected && "bg-accent text-accent-foreground",
                          isOutside && "day-outside text-muted-foreground aria-selected:text-muted-foreground",
                          isDisabled && "text-muted-foreground opacity-50 cursor-not-allowed",
                          isInRange && "aria-selected:bg-accent aria-selected:text-accent-foreground",
                          classNames.day,
                          isSelected && classNames.day_selected,
                          isStart && classNames.day_range_start,
                          isEnd && classNames.day_range_end,
                          isCurrentToday && classNames.day_today,
                          isOutside && classNames.day_outside,
                          isDisabled && classNames.day_disabled,
                          isInRange && classNames.day_range_middle
                        )}
                      >
                        {date.getDate()}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { Calendar };
export type { CalendarProps };