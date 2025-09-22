"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";

interface CarouselContextProps {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

interface CarouselProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function Carousel({
  orientation = "horizontal",
  autoplay = false,
  autoplayDelay = 3000,
  loop = true,
  className,
  children,
  ...props
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [totalSlides, setTotalSlides] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Calculate total slides from children
  React.useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('[data-slot="carousel-item"]');
      setTotalSlides(items.length);
    }
  }, [children]);

  const canScrollPrev = loop || currentSlide > 0;
  const canScrollNext = loop || currentSlide < totalSlides - 1;

  const goToSlide = React.useCallback((index: number) => {
    if (loop) {
      if (index < 0) {
        setCurrentSlide(totalSlides - 1);
      } else if (index >= totalSlides) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(index);
      }
    } else {
      setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
    }
  }, [totalSlides, loop]);

  const scrollPrev = React.useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const scrollNext = React.useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  // Autoplay
  React.useEffect(() => {
    if (!autoplay || totalSlides <= 1) return;

    const interval = setInterval(() => {
      scrollNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, scrollNext, totalSlides]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  return (
    <CarouselContext.Provider
      value={{
        currentSlide,
        totalSlides,
        goToSlide,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        orientation,
      }}
    >
      <div
        ref={containerRef}
        onKeyDown={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        tabIndex={0}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation, currentSlide } = useCarousel();

  const transform = orientation === "horizontal" 
    ? `translateX(-${currentSlide * 100}%)`
    : `translateY(-${currentSlide * 100}%)`;

  return (
    <div
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex transition-transform duration-300 ease-in-out",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          className,
        )}
        style={{ transform }}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-0" : "pt-0",
        className,
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="size-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

// API type for external use
type CarouselApi = {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};