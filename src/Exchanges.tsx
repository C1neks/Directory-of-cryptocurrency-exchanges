import React, { useContext, useEffect, useState } from "react";
import { ExchangesType } from "./models";
import {
  Country,
  CountryAndRank,
  Exchange,
  ExchangeDetails,
  ExchangeLink,
  Image,
  LinkToDetails,
  NameAndUrl,
  Score,
  Wrapper,
} from "./Exchanges.styles";

import { ExchangeContext } from "./App";

interface Props {
  setExchangeID: React.Dispatch<React.SetStateAction<string>>;
}

const Exchanges: React.FC<Props> = ({ setExchangeID }) => {
  const context = useContext(ExchangeContext);

  return (
    <Wrapper>
      {" "}
      {context.exchanges.map((exchange: ExchangesType) => (
        <LinkToDetails
          to="/exchange"
          onClick={() => setExchangeID(exchange.id)}
          key={exchange.id}
        >
          <Exchange>
            <ExchangeDetails>
              <Image src={exchange.image} />
              <NameAndUrl>
                <h4>{exchange.name}</h4>
                <ExchangeLink href={exchange.url}>{exchange.name}</ExchangeLink>
              </NameAndUrl>
            </ExchangeDetails>

            <CountryAndRank>
              <Score>{exchange.trust_score_rank}</Score>
              <Country>{exchange.country}</Country>
            </CountryAndRank>
          </Exchange>
        </LinkToDetails>
      ))}
    </Wrapper>
  );
};

export default Exchanges;
