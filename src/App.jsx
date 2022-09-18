import React from "react";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Main from "./components/layout/main";
import * as C from "./styles/styles";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <>
      <C.Container>
        <Header />
        <Main />
      </C.Container>
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
