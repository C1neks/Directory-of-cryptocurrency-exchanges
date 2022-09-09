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
  MoreDetailsAboutCurrencyMain,
  NameAndUrl,
  Score,
  SquareMain,
  SquareWrapper,
  Wrapper,
} from "./Exchanges.styles";

import { ExchangeContext } from "../App";

const Exchanges: React.FC = () => {
  const context = useContext(ExchangeContext);

  const stopEvent = (event: { stopPropagation: () => any }) =>
    event.stopPropagation();

  return (
    <>
      <MoreDetailsAboutCurrencyMain>
        <h1>Directory of Cryptocurrency Exchanges</h1>
      </MoreDetailsAboutCurrencyMain>
      <SquareWrapper>
        <SquareMain />
      </SquareWrapper>

      <Wrapper>
        {" "}
        {context.exchanges.map((exchange: ExchangesType) => (
          <LinkToDetails to={"exchange/" + exchange.id} key={exchange.id}>
            <Exchange>
              <ExchangeDetails>
                <Image src={exchange.image} alt={exchange.name} />
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
