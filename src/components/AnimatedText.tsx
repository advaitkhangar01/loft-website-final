"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", delay = 0, once = true, style }: AnimatedTextProps) {
  // Split text into words for staggered animation
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
