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
  ExchangeInfo,
  Icons,
  IconsWrapper,
  LogoName,
  RankCountry,
  SocialIconLink,
  Wrapper,
} from "./SingleExchange.styles";

interface Props {
  exchangeID: string;
}

const SingleExchange: React.FC<Props> = ({ exchangeID }) => {
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
      const a = await getSocialMediaLinks();
      console.log(a);
      setSocialLinks(a);
    })();
  }, []);

  const facebookIcon = socialLink?.facebook_url ? (
    <SocialIconLink href={socialLink.facebook_url}>
      {" "}
      <BsFacebook />
    </SocialIconLink>
  ) : null;

  const redditIcon = socialLink?.reddit_url ? (
    <SocialIconLink href={socialLink.reddit_url}>
      {" "}
      <BsReddit />
    </SocialIconLink>
  ) : null;

  const slackIcon = socialLink?.slack_url ? (
    <SocialIconLink href={socialLink.slack_url}>
      {" "}
      <BsSlack />
    </SocialIconLink>
  ) : null;

  const telegramIcon = socialLink?.telegram_url ? (
    <SocialIconLink href={socialLink.telegram_url}>
      {" "}
      <BsTelegram />
    </SocialIconLink>
  ) : null;

  const twitterIcon = socialLink?.twitter_handle ? (
    <SocialIconLink href={"https://twitter.com/" + socialLink.twitter_handle}>
      {" "}
      <BsTwitter />
    </SocialIconLink>
  ) : null;

  return (
    <Wrapper>
      <ExchangeInfo>
        <LogoName>
          <img src={exchangeDetails?.image} alt="" />
          <div>{exchangeDetails?.name}</div>
        </LogoName>
        <RankCountry>
          <div>{exchangeDetails?.country}</div>
          <div>{exchangeDetails?.trust_score_rank}</div>

          <div>{exchangeDetails?.year_established}</div>
        </RankCountry>

        <div>
          Description:
          {exchangeDetails?.description === ""
            ? "No description"
            : exchangeDetails?.description}
        </div>
        <IconsWrapper>
          <Icons>
            {facebookIcon}
            {redditIcon}
            {slackIcon}
            {telegramIcon}
            {twitterIcon}
          </Icons>
        </IconsWrapper>
      </ExchangeInfo>
    </Wrapper>
  );
};

export default SingleExchange;
