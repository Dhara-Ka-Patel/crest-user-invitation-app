// theme.ts
export interface IThemeInterface {
  primaryColor?: string;
  primaryColorInverted?: string;
  breakpoints?: string[];
  colors?: IColors;
  space?: number[];
  fonts?: any;
  fontSizes?: number[];
  lineHeights?: number[];
  fontWeights?: IFontWeights;
  letterSpacings?: ILetterSpacing;
  radii?: number[];
  borders?: any[];
  shadows?: any[];
  injectGlobal: any;
}

// Breakpoints
const breakpoints = ['576px', '768px', '992px', '1200px'];
// @media screen and (min-width: 40em) @media screen and (min-width: 52em)
// @media screen and (min-width: 64em) Other units work as well, but em units
// are recommended const breakpoints = [ '300px', '600px', '1200px' ] FontFamily
interface IFonts {
  default: string;
  title: string;
}
const fonts = {
  default: 'Helvetica',
  title: 'Helvetica Nue',
};

// Typographic Scale numbers are converted to px values
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

// Spacing Scale used for margin and padding
const space = [0, 8, 16, 32, 64];
interface IColors {
  text: string;
  primary: string;
  secondary: string;
  gray: string[];
}
const colors: IColors = {
  text: '#024',
  primary: '#25914f',
  secondary: '#eda907',
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6'],
};

const lineHeights = [1, 1.125, 1.25, 1.5];

interface IFontWeights {
  normal: number;
  bold: number;
}
const fontWeights: IFontWeights = {
  normal: 500,
  bold: 700,
};

interface ILetterSpacing {
  normal: string;
  caps: string;
}
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};

const radii = [0, 2, 4, 8];

const borders = [0, '1px solid', '2px solid'];

const shadows = [`0 1px 2px 0 ${colors.text}`, `0 1px 4px 0 ${colors.text}`];

export default {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
};
