import React, { useMemo, useRef } from "react";
import { useDimensions } from "../../hooks/use-debounced-dimensions";
import { cn } from "../../lib/utils";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height) * 0.8,
    [dimensions.width, dimensions.height]
  );

  const blurClass = blur === "light" ? "blur-2xl" : blur === "medium" ? "blur-3xl" : "blur-[100px]";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden opacity-50">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
            style={
              {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                "--background-gradient-speed": `${20}s`,
                "--tx-1": (Math.random() - 0.5) * 0.5,
                "--ty-1": (Math.random() - 0.5) * 0.5,
                "--tx-2": (Math.random() - 0.5) * 0.5,
                "--ty-2": (Math.random() - 0.5) * 0.5,
                "--tx-3": (Math.random() - 0.5) * 0.5,
                "--ty-3": (Math.random() - 0.5) * 0.5,
                "--tx-4": (Math.random() - 0.5) * 0.5,
                "--ty-4": (Math.random() - 0.5) * 0.5,
                "--background-gradient-delay": `${-index * 5}s`
              } as React.CSSProperties
            }
            width={circleSize}
            height={circleSize}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill={color}
              style={{ opacity: 0.4 }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGradient;