import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { isTouchDevice, prefersReducedMotion } from "../../lib/utils";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const cursorEl = e.target.closest?.("[data-cursor]");
      if (cursorEl) {
        const c = cursorEl.getAttribute("data-cursor");
        setLabel(c || "");
        setHovering(true);
      } else if (e.target.closest("a, button, input, textarea, select, [role='button']")) {
        setLabel("");
        setHovering(true);
      } else {
        setLabel("");
        setHovering(false);
      }
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y, visible]);

  if (isTouchDevice() || prefersReducedMotion()) return null;
  const ringSize = hovering || label ? 56 : 32;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-accent"
        style={{ x, y, width: 6, height: 6, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/40 flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: ringSize, height: ringSize, opacity: visible ? 1 : 0 }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono uppercase tracking-wider text-accent-light"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
