"use client";

import React from "react";
import { Typography } from "@/components/typography";
import { main_class } from "../utils/styles/javascript/main";
import { useAppStore } from "@/stores/app-store";

const Loading = () => {
  const darkMode = useAppStore((state) => state.darkMode);
  const theClass = main_class();
  return darkMode ? (
    <section
      style={{
        background: "#121212",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        style={{ color: "#F4EEFF", fontFamily: "Comforter" }}
        id="loading"
        className={theClass.animTypewriter}
      >
        {`<Loading.../>`}
      </Typography>
      <Typography
        style={{ fontSize: 30, color: "#F4EEFF", fontFamily: "Comforter" }}
        id="loading"
        className={theClass.blink}
      >
        _
      </Typography>
    </section>
  ) : (
    <>
      <section
        style={{
          background: "#fafafa",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            color: "#370665",
            fontFamily: "Comforter",
          }}
          className={theClass.animTypewriter}
        >
          {`<Loading.../>`}
        </Typography>
        <Typography
          style={{
            fontSize: "30px",
            color: "#370665",
            fontFamily: "Comforter",
          }}
          className={theClass.blink}
        >
          _
        </Typography>
      </section>
    </>
  );
};

export default Loading;
