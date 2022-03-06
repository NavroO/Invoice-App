import React from 'react';
import Header from "../components/Header/Header";
import { GlobalStyle } from "../style/GlobalStyle";
import Navigation from "../components/Navigation/Navigation";
import InvoiceView from "../components/InvoiceView/InvoiceView";

const Root:React.FC = () => {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Navigation />
      <InvoiceView />
    </>

  );
}

export default Root;
