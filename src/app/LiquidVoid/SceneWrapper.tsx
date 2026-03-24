"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Overlay from "../LiquidVoid/Overlay";
import Loader from "@/app/Loader/loader";

const SceneCanvas = dynamic(() => import("@/app/LiquidVoid/Scene"), {
  ssr: false,
});

export default function SceneWrapper() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <SceneCanvas />
      <Overlay />
    </>
  );
}
