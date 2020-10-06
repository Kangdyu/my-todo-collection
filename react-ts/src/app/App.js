import React from "react";
import reset from "styled-reset";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import TodoContainer from "../features/todo/TodoContainer";
import Footer from "../common/Footer";
import Header from "../common/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.white};
  }
  
  body {
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.palette.background};
  }

  input, button {
    font: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.main};
  width: 600px;
  height: fit-content;
  margin: 100px 0;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          white: "#eee",
          background: "#ddd",
          main: "#393e46",
          mainStrong: "#222831",
          highlight: "#00adb5",
        },
      }}
    >
      <GlobalStyle />
      <Container>
        <Header title="TODO" subtitle="with React + Redux" />
        <TodoContainer />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
