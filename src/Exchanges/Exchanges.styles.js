import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0px 0.5rem;
  border-radius: 2rem;
`;

export const Score = styled.p`
  background: #01a0bb;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
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
  width: 100%;
  display: flex;
  justify-content: center;
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
  margin-top: 2rem;
  color: white;
  background: #191b1f;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  min-height: 4rem;
  width: 90%;

  :hover {
    background: #003fc2;
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