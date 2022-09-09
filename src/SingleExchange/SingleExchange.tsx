import React, { useEffect, useState } from "react";

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
import { SocialMediaUrls } from "./socialMediaUrls";

const SingleExchange: React.FC = ({}) => {
  let { exchangeID } = useParams();

  const [socialLink, setSocialLinks] = useState<any>();
  const [socialIcons, setSocialIcons] = useState<any>([]);

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
      const mediaUrls = await SocialMediaUrls(result);
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
            <LogoImage src={socialLink?.image} alt="" />
            <Name>{socialLink?.name}</Name>
            <Container>
              <Score data-testid="score_rank">
                {socialLink?.trust_score_rank}
              </Score>
            </Container>
          </LogoName>
          <RankCountry>
            <DetailsText>
              <p>Country</p>
              <p>{socialLink?.country}</p>
            </DetailsText>

            <DetailsText year>
              <p>Year of Establishment</p>
              <p>{socialLink?.year_established}</p>
            </DetailsText>
          </RankCountry>

          <Description>
            <DescriptionTitle>Description</DescriptionTitle>
            <p>
              {socialLink?.description === ""
                ? "No description"
                : socialLink?.description}
            </p>
          </Description>
          <IconContext.Provider value={{ color: "#003fc2", size: "20" }}>
            <IconsWrapper>
              <Icons>
                {socialIcons.map((social: any) => (
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
      <SquareWrapper single>
        <Square />
      </SquareWrapper>
    </>
  );
};

export default SingleExchange;
