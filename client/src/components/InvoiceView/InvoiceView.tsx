import React from "react";
import { Wrapper } from "./InvoiceView.style";
import data from "./data.json";
import InvoiceCard from "../InvoiceCard/InvoiceCard";

const InvoiceView: React.FC = () => {
  return (
    <Wrapper>
      {data.map((item) => (
        <InvoiceCard
          id={item.id}
          billTo={item.BillTo}
          date={item.date}
          price={item.price}
          status={item.status}
        />
      ))}
    </Wrapper>
  );
};

export default InvoiceView;
