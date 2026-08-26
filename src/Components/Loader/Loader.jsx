import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../lib/utils";

const Loader = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShow(false);
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 1600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-5xl font-bold tracking-tightest text-white"
            >
              AH
            </motion.div>
            <div className="w-32 h-[2px] bg-base-500 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
