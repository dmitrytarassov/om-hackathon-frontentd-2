"use client";

import React from "react";

import styles from "./styles.module.css";

type DebateProcessProps = {
  value: number;
};

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const DebateProcess: React.FC<DebateProcessProps> = ({ value = 10 }) => {
  const s = clamp(value, 0, 100);
  const backgroundImage = `linear-gradient(to right, #8bc34a, ${s}%, #ff5722)`;
  const mask = `repeating-linear-gradient(to right, #000 0 4px, transparent 4px 8px)`;

  console.log(backgroundImage);

  return (
    <div
      className="h-2"
      style={{
        backgroundImage,
        WebkitMask: mask,
        mask,
      }}
    />
  );
};

export default DebateProcess;
