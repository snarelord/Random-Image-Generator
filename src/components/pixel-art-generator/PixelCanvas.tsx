"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type PixelSettings, COLOUR_PALETTES } from "./types";
import styles from "./PixelCanvas.module.css";

interface PixelCanvasProps {
  settings: PixelSettings;
  regenTrigger: boolean;
}

const PixelCanvas = ({ settings, regenTrigger }: PixelCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // function to DL image
  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `pixel-art-${new Date().getTime()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // canvas sizing and art gen handled by effect
  useEffect(() => {
    // function to update size of canvas and regen art
    // make canvas square and fit in container
  });

  // main function to gen pixel art

  // gen a random pattern

  // gen a random checker pattern

  // gen a gradient ish pattern

  // gen a striped pattern
};
