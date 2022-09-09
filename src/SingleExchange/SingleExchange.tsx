import React, { useEffect, useState } from "react";

import {
  BackButton,
  ButtonWrapper,
  Container,
  Description,
  DescriptionTitle,
  DetailsText,
  DetailsTextYear,
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
  SquareWrapperSingle,
  Wrapper,
} from "./SingleExchange.styles";
import { IconContext } from "react-icons";
import { useParams } from "react-router-dom";

import { SocialMediaUrls } from "./socialMediaUrls";
import { SocialDetails, SocialLinks } from "../models";

const SingleExchange: React.FC = () => {
  let { exchangeID } = useParams();

  const [exchangeDetails, setExchangeDetails] = useState<SocialLinks>();
  const [socialIcons, setSocialIcons] = useState<Array<SocialDetails>>([]);

  const getExchangeDetails = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/exchanges/${exchangeID}`
    );

    return response.json();
  };

  useEffect(() => {
    (async () => {
      const details = await getExchangeDetails();
      setExchangeDetails(details);
      const mediaUrls = await SocialMediaUrls(details);
      setSocialIcons(mediaUrls);
    })();
  }, []);

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

            <DetailsTextYear>
              <p>Year of Establishment</p>
              <p>{exchangeDetails?.year_established}</p>
            </DetailsTextYear>
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
                {socialIcons.map((social: SocialDetails) => (
                  <SocialIconLink href={social.link} data-testid="social-icon">
                    {social.icon}
                  </SocialIconLink>
                ))}
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
      <SquareWrapperSingle>
        <Square />
      </SquareWrapperSingle>
    </>
  );
};

export default SingleExchange;
