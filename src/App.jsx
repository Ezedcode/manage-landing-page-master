import React from "react";
import Home from "./components/pages/home/index";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import * as C from "./styles/styles";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <>
      <C.Container>
        <Header />
        <Home />
      </C.Container>
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
