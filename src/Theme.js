import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    white: "#FFF",
    darkGreen: "#00474B",
    strongGreen: "#26C2AE",
    lightCyan: "#F3F9FA",
    darkCyan: "#9EBBBD",
    mintGreen: "#9FE8DF",
    lightGreen: "#7F9D9F",
    red: "#E17457",
    gray: "#5E7A7D",
  },
  fontSizes: {
    xSmall: "13px",
    small: "16px",
    medium: "24px",
    large: "28px",
  },
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

    *{
        font-weight: 700;
        font-family: "Space Mono", monospace;
        margin: 0;
        box-sizing: border-box;
    }

    body{
      height: 100vh;
      display: grid;
      place-items:center;
      background-color: #d1edef;
    }
`;

export { theme, GlobalStyle };
