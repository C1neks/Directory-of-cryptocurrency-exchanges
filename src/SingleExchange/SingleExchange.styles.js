import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ExchangeInfo = styled.div`
  background: #191b1f;
  width: 90%;
  border-radius: 0.3rem;
  color: white;
`;

export const SocialIconLink = styled.a`
  text-decoration: none;
  width: 50%;
  text-align: center;
  border-right: 0.5px solid black;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const Score = styled.span`
  height: 40px;
  width: 40px;

  color: #003fc2;
  border-radius: 20px;
  background: white;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Square = styled.div`
  background: linear-gradient(
    90deg,
    rgba(8, 129, 240, 1) 67%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  transform: rotate(60deg);
  margin: 4rem 2rem 2rem 18rem;
`;

export const MoreDetailsAboutCurrency = styled.div`
  color: white;
  text-align: center;
  margin: 3rem 0rem 5rem 0rem;
`;

export const Icons = styled.div`
  background-color: white;
  width: 90%;

  color: blue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  margin: 1rem 0rem 1rem 0rem;
  min-height: 1.8rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoName = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 0.5rem;
  margin: 1rem;
`;

export const LogoImage = styled.img`
  width: 30px;
  border-radius: 20px;
`;

export const Name = styled.span`
  padding: 0rem 0rem 0.8rem 0.3rem;
  font-weight: 500;
`;

export const RankCountry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

export const Description = styled.div`
  margin: 1rem;

  p:first-child {
    font-size: 1.5rem;
  }
`;
export const DetailsText = styled.span`
  text-align: ${({ year }) => (year ? "right" : "left")};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const BackButton = styled.button`
  border-radius: 10px;
  color: white;
  background: #191b1f;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  :hover {
    background: rgb(8 129 240);
    transition: 0.5s;
  }
`;
