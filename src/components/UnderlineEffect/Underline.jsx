import React from "react";
import { motion, useAnimation } from "framer-motion";

const Underline = ({ children }) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start({
      scaleX: 0,
      transformOrigin: "right center",
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    });
    controls.set({ transformOrigin: "left center" });
    await controls.start({
      scaleX: 1,
      transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
    });
  };

  return (
    <motion.span
      onHoverStart={handleHoverStart}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children} {/* ← was "appreciation", now dynamic */}
      <motion.span
        animate={controls}
        initial={{ scaleX: 1 }}
        style={{
          position: "absolute",
          bottom: -4,
          left: 0,
          height: 3,
          width: "100%",
          background: "black",
          display: "block",
          transformOrigin: "left center",
        }}
      />
    </motion.span>
  );
};

export default Underline;
