export function stockImageSrcSet(src: string, widths = [800, 1200, 1600]) {
  const base = src.replace(/\.jpg$/i, "");
  return widths.map((width) => `${base}-${width}.webp ${width}w`).join(", ");
}
