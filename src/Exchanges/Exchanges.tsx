import React, { useContext } from "react";
import { ExchangesType } from "../models";
import {
  ContainerMain,
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
    <ContainerMain>
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
            <Score>{exchange.trust_score_rank}</Score>
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
                <Country>{exchange.country}</Country>
              </CountryAndRank>
            </Exchange>
          </LinkToDetails>
        ))}
      </Wrapper>
    </ContainerMain>
  );
};

export default Exchanges;
