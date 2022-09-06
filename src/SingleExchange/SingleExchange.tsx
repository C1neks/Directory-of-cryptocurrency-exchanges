import React, { useContext, useEffect, useState } from "react";

import { ExchangeContext } from "../App";
import { SocialUrls } from "../models";
import {
  BsFacebook,
  BsReddit,
  BsSlack,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import {
  BackButton,
  ButtonWrapper,
  Container,
  Description,
  DescriptionTitle,
  DetailsText,
  ExchangeInfo,
  Icons,
  IconsWrapper,
  LogoImage,
  LogoName,
  MoreDetailsAboutCurrency,
  Name,
  RankCountry,
  Score,
  SocialIconLink,
  Square,
  Wrapper,
} from "./SingleExchange.styles";
import { IconContext } from "react-icons";
import { useParams } from "react-router-dom";
import { SquareWrapper } from "../Exchanges/Exchanges.styles";

const SingleExchange: React.FC = ({}) => {
  let { exchangeID } = useParams();

  const context = useContext(ExchangeContext);
  const [socialLink, setSocialLinks] = useState<SocialUrls>();
  const exchangeDetails = context.exchanges.find(
    (exchange) => exchange.id === exchangeID
  );

  const getSocialMediaLinks = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/exchanges/${exchangeID}`
    );

    return response.json();
  };

  useEffect(() => {
    (async () => {
      const result = await getSocialMediaLinks();

      setSocialLinks(result);
    })();
  }, []);

  const facebookIcon = socialLink?.facebook_url ? (
    <SocialIconLink href={socialLink.facebook_url} data-testid="social-icon">
      {" "}
      <BsFacebook />
    </SocialIconLink>
  ) : null;

  const redditIcon = socialLink?.reddit_url ? (
    <SocialIconLink href={socialLink.reddit_url} data-testid="social-icon">
      {" "}
      <BsReddit />
    </SocialIconLink>
  ) : null;

  const slackIcon = socialLink?.slack_url ? (
    <SocialIconLink href={socialLink.slack_url} data-testid="social-icon">
      {" "}
      <BsSlack />
    </SocialIconLink>
  ) : null;

  const telegramIcon = socialLink?.telegram_url ? (
    <SocialIconLink href={socialLink.telegram_url} data-testid="social-icon">
      {" "}
      <BsTelegram />
    </SocialIconLink>
  ) : null;

  const twitterIcon = socialLink?.twitter_handle ? (
    <SocialIconLink
      href={"https://twitter.com/" + socialLink.twitter_handle}
      data-testid="social-icon"
    >
      {" "}
      <BsTwitter />
    </SocialIconLink>
  ) : null;

  return (
    <>
      <MoreDetailsAboutCurrency>
        <h4>Directory of Cryptocurrency</h4>
      </MoreDetailsAboutCurrency>
      <Wrapper>
        <ExchangeInfo>
          <LogoName>
            <LogoImage src={exchangeDetails?.image} alt="" />
            <Name>{exchangeDetails?.name}</Name>
            <Container>
              <Score data-testid="score_rank">
                {exchangeDetails?.trust_score_rank}
              </Score>
            </Container>
          </LogoName>
          <RankCountry>
            <DetailsText>
              <p>Country</p>
              <p>{exchangeDetails?.country}</p>
            </DetailsText>

            <DetailsText year>
              <p>Year of Establishment</p>
              <p>{exchangeDetails?.year_established}</p>
            </DetailsText>
          </RankCountry>

          <Description>
            <DescriptionTitle>Description</DescriptionTitle>
            <p>
              {exchangeDetails?.description === ""
                ? "No description"
                : exchangeDetails?.description}
            </p>
          </Description>
          <IconContext.Provider value={{ color: "#003fc2", size: "20" }}>
            <IconsWrapper>
              <Icons>
                {facebookIcon}
                {redditIcon}
                {slackIcon}
                {telegramIcon}
                {twitterIcon}
              </Icons>
            </IconsWrapper>
          </IconContext.Provider>
        </ExchangeInfo>
      </Wrapper>
      <ButtonWrapper>
        <BackButton
          data-testid="back-button"
          onClick={() => window.history.back()}
        >
          Go Back
        </BackButton>
      </ButtonWrapper>
      <SquareWrapper single>
        <Square />
      </SquareWrapper>
    </>
  );
};

export default SingleExchange;
