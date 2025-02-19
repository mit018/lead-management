import { colors } from "./colors";

export const generateCSSVariables = () => {
  return Object.entries(colors)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("\n");
};

const style = document.createElement("style");
style.innerHTML = `:root { ${generateCSSVariables()} }`;
document.head.appendChild(style);
