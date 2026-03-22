import React from "react";
import { motion, useAnimation } from "framer-motion";

const ButtonAnimation = ({
  children,
  href,
  className = "",
  fillColor = "#212121",
  textColor = "inherit",
  hoverTextColor = "#ffffff",
}) => {
  const fillControls = useAnimation();
  const textControls = useAnimation();

  const handleHoverStart = async () => {
    fillControls.start({
      y: "0%",
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    });
    textControls.start({
      color: hoverTextColor,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    });
  };

  const handleHoverEnd = async () => {
    fillControls.start({
      y: "-100%",
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    });
    textControls.start({
      color: textColor,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
    });
    setTimeout(() => {
      fillControls.set({ y: "100%" });
    }, 400);
  };

  return (
    <motion.a
      href={href}
      className={className}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "transparent",
        textDecoration: "none",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.span
        animate={fillControls}
        initial={{ y: "100%" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: fillColor,
          zIndex: 0,
        }}
      />
      <motion.span
        animate={textControls}
        initial={{ color: textColor }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
};

export default ButtonAnimation;
