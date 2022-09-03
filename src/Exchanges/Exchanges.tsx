import React, { useContext } from "react";
import { ExchangesType } from "../models";
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

import { ExchangeContext } from "../App";
import { MoreDetailsAboutCurrency } from "../SingleExchange/SingleExchange.styles";

const Exchanges: React.FC = () => {
  const context = useContext(ExchangeContext);

  const stopEvent = (event: { stopPropagation: () => any }) =>
    event.stopPropagation();

  return (
    <>
      <MoreDetailsAboutCurrency>
        <h1>Directory of Cryptocurrency Exchanges</h1>
      </MoreDetailsAboutCurrency>
      <Wrapper>
        {" "}
        {context.exchanges.map((exchange: ExchangesType) => (
          <LinkToDetails to={"exchange/" + exchange.id} key={exchange.id}>
            <Exchange>
              <ExchangeDetails>
                <Image src={exchange.image} />
                <NameAndUrl>
                  <h4>{exchange.name}</h4>
                  <ExchangeLink href={exchange.url} onClick={stopEvent}>
                    {exchange.name}
                  </ExchangeLink>
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
    </>
  );
};

export default Exchanges;
