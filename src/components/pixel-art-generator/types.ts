export const COLOUR_PALETTES = {
  vibrant: [
    "#FF5252",
    "#FF7752",
    "#FFBD52",
    "#FFE352",
    "#C9FF52",
    "#52FF8C",
    "#52FFEA",
    "#52BDFF",
    "#5275FF",
    "#8C52FF",
    "#EA52FF",
    "#FF52C9",
  ],
  pastel: [
    "#FFB3BA",
    "#FFDFBA",
    "#FFFFBA",
    "#BAFFC9",
    "#BAE1FF",
    "#D3BAFF",
    "#FFBAED",
    "#FFBAB3",
    "#BAFFE1",
    "#BAC9FF",
  ],
  monochrome: ["#FFFFFF", "#E0E0E0", "#C0C0C0", "#A0A0A0", "#808080", "#606060", "#404040", "#202020", "#000000"],
  ocean: ["#05445E", "#189AB4", "#75E6DA", "#D4F1F9", "#0A1931", "#185ADB", "#FFC947", "#EFEFEF"],
  forest: ["#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2", "#B7E4C7", "#D8F3DC", "#081C15"],
};

export type ColourPalette = keyof typeof COLOUR_PALETTES;

// types for pixel gen
export type PatternType = "random" | "checker" | "stripes" | "gradient";

// settings for the pixel art generator
export interface PixelSettings {
  pixelSize: number;
  randomness: number;
  selectedPalette: ColourPalette;
  patternType: PatternType;
}

export const defaultSettings: PixelSettings = {
  pixelSize: 20,
  randomness: 50,
  selectedPalette: "vibrant",
  patternType: "random",
};
