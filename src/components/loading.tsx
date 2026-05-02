"use client";

import React from "react";
import { Typography } from "@/components/typography";
import { main_class } from "../utils/styles/javascript/main";
import { useAppStore } from "@/stores/app-store";

const Loading = () => {
  const theClass = main_class();
  const darkMode = useAppStore((state) => state.darkMode);

  return (
    <section
      className={`flex h-screen w-full items-center justify-center bg-background ${
        darkMode ? "text-primary" : "text-secondary"
      }`}
    >
      <Typography
        id="loading"
        className={`${theClass.animTypewriter} font-montez text-[clamp(2rem,8vw,4rem)] text-current`}
      >
        {`<Loading.../>`}
      </Typography>
      <Typography
        id="loading-cursor"
        className={`${theClass.blink} font-montez text-[clamp(2rem,8vw,4rem)] text-current`}
      >
        _
      </Typography>
    </section>
  );
};

export default Loading;
