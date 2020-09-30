import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoContainer from "./components/todo/TodoContainer";

function App() {
  return (
    <>
      <Header title="TODO" subtitle="with React" />
      <TodoContainer />
      <Footer />
    </>
  );
}

export default App;
