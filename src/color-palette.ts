
import { globalColorPalette1 } from "@gago/frame/es/colors/default";
import { GlobalColorPalette, generatorDerivativeColors } from "@gago/frame";

export const colorPalette: GlobalColorPalette = { ...globalColorPalette1, mainColor: generatorDerivativeColors("#00a2b9") };
