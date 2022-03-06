import React from "react";
import { Wrapper } from "./InvoiceCard.style";
import { InvoiceCardTypes } from "./InvoiceCard.types";

const InvoiceCard: React.FC<InvoiceCardTypes> = ({ id, billTo, status, date, price }) => {
  return (
    <Wrapper>
      <div>
        <p>{id}</p>
        <p>{billTo}</p>
      </div>
      <div>
        <div>
          <p>{date}</p>
          <p>{price}</p>
        </div>
        <p>{status}</p>
      </div>

    </Wrapper>
  );
};

export default InvoiceCard;
