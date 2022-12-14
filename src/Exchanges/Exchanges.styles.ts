import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.5rem;
  border-radius: 2rem;
`;

export const Score = styled.p`
  background: #0881f0;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  color: white;
  margin-right: 0.5rem;
`;

export const Country = styled.p`
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: right;
  width: 75%;
`;

export const LinkToDetails = styled(Link)`
  text-decoration: none;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const ExchangeDetails = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`;

export const ExchangeLink = styled.a`
  font-size: 12px;
  color: gray;
`;

export const Exchange = styled.div`
  //margin-top: 2rem;
  color: white;
  background: #191b1f;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  min-height: 4rem;
  width: 90%;

  :hover {
    background: #003fc2;

    transition: 0.5s;
  }
`;

export const NameAndUrl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountryAndRank = styled.div`
  display: flex;
  width: 50%;
`;

export const SquareMain = styled.div`
  background: linear-gradient(
    90deg,
    rgba(8, 129, 240, 1) 67%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  transform: rotate(60deg);

  @media screen and (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const SquareWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  margin-left: 4rem;

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }
`;

export const MoreDetailsAboutCurrencyMain = styled.div`
  color: white;
  text-align: center;
  margin: 3rem 0rem 3rem 0rem;
`;

export const ContainerMain = styled.div`
  overflow: hidden;
`;
