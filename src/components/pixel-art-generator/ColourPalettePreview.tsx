import type React from "react";
import styles from "./ColourPalettePreview.module.css";

interface ColourPalettePreviewProps {
  palette: string[];
}

const ColourPalettePreview = ({ palette }: ColourPalettePreviewProps) => {
  return (
    <div className={styles.colourPreview}>
      {palette.map((colour, index) => (
        <div key={index} className={styles.colourSwatch} style={{ backgroundColor: colour }} title={colour} />
      ))}
    </div>
  );
};

export default ColourPalettePreview;
