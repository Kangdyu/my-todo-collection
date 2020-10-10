import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      white: string;
      background: string;
      main: string;
      mainStrong: string;
      highlight: string;
      [key: string]: string;
    }
  }
}