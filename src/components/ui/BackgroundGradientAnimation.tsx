import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function BackgroundGradientAnimation({
  variant = "default",
}: {
  variant?: "default" | "home";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0, width: 0, height: 0 };
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const colors = variant === "home" ? [
    { color: "rgba(46, 148, 82, 0.15)", x: -100, y: -100 },
    { color: "rgba(77, 178, 116, 0.1)", x: 100, y: 100 },
    { color: "rgba(30, 107, 58, 0.12)", x: 0, y: 0 }
  ] : [
    { color: "rgba(46, 148, 82, 0.08)", x: -50, y: -50 },
    { color: "rgba(77, 178, 116, 0.05)", x: 50, y: 50 }
  ];

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 backdrop-blur-[100px] ${variant === "home" ? "bg-background-light/40" : "bg-background-light/60"}`} />

      {/* Gradient Blobs */}
      {colors.map((color, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            x: useTransform(mouseX, [0, 1], [-color.x, color.x]),
            y: useTransform(mouseY, [0, 1], [-color.y, color.y]),
            width: variant === "home" ? "50vw" : "35vw",
            height: variant === "home" ? "50vh" : "35vh",
            background: `radial-gradient(circle at center, ${color.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated Lines */}
      {variant === "home" && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              style={{ top: `${25 + i * 25}%` }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 8 + i * 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:url('/noise.png')]" />
    </div>
  );
}