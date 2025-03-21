import { useState, useEffect, useRef } from "react";
import styles from "./EvolutionForm.module.css";

// utils functions

function genRanPixelPattern(width: number, height: number) {
  const pixels = [];
  for (let i = 0; i < width * height; i++) {
    pixels.push([Math.random() * 255, Math.random() * 255, Math.random() * 255]);
  }
  return pixels;
}

function calculateFitnessForPixels(individual: number[][], target: number[][]) {
  let score = 0;
  for (let i = 0; i < individual.length; i++) {
    const [r1, g1, b1] = individual[i];
    const [r2, g2, b2] = target[i];
    const distance = Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
    score += 1 / (1 + distance);
  }
  return score / individual.length;
}

const renderPixelGrid = (pixels: number[][]) => {
  const canvas = document.createElement("canvas");
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");

  // getContext("2d") may return null
  if (ctx) {
    pixels.forEach((pixel, index) => {
      const x = index % canvas.width;
      const y = Math.floor(index / canvas.width);
      ctx.fillStyle = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      ctx.fillRect(x, y, 1, 1); // draw each pixel
    });
  } else {
    console.error("Failed to get 2d context");
  }
  document.body.appendChild(canvas); // Or add it to your component
};
