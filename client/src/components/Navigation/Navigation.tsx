import React from "react";
import { Wrapper, ActionWrapper } from "./Navigation.style";

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <h1>Invoices</h1>
        <p>7 invoices</p>
      </div>
      <ActionWrapper>
        <p>Filter</p>
        <button>New</button>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Navigation;
