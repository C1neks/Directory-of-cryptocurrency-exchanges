import React, { useContext } from "react";

import { ExchangeContext } from "./App";

interface Props {
  exchangeID: string;
}

const SingleExchange: React.FC<Props> = ({ exchangeID }) => {
  const context = useContext(ExchangeContext);

  const exchangeDetails = context.exchanges.find(
    (exchange) => exchange.id === exchangeID
  );

  console.log(exchangeDetails);
  return (
    <>
      <div style={{ color: "white" }}>{exchangeID}</div>
      <div style={{ color: "white" }}>{exchangeDetails?.name}</div>
      <div style={{ color: "white" }}>{exchangeDetails?.country}</div>
      <div style={{ color: "white" }}>{exchangeDetails?.trust_score_rank}</div>
      <img src={exchangeDetails?.image} alt="" />
      <div style={{ color: "white" }}>{exchangeDetails?.year_established}</div>
      <div style={{ color: "white" }}>
        Description:
        {exchangeDetails?.description === ""
          ? "No description"
          : exchangeDetails?.description}
      </div>
    </>
  );
};

export default SingleExchange;
