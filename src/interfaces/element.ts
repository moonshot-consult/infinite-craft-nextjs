import mongoose from "mongoose";

export interface Element {
  text: string;
  emoji: string;
  discovered: boolean;
}

export interface PlacedElement extends Element {
  x: number;
  y: number;
}

const ElementSchema = new mongoose.Schema(
  {
    word1: String,
    word2: String,
    text: String,
    emoji: String,
  },
  {
    timestamps: true,
  }
);

export const ElementModel =
  mongoose.models.Element || mongoose.model("Element", ElementSchema);
