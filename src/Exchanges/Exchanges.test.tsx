import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Exchanges from "./Exchanges";
import { ExchangeContext } from "../App";
import { BrowserRouter } from "react-router-dom";

const exchanges = [
  {
    id: "okex",
    image: "okex.jpg",
    name: "OKX",
    url: "http://okx.com",
    trust_score_rank: 2,
    country: "Belize",
    year_established: 2013,
    description: "",
  },
  {
    id: "binance",
    image: "binance.jpg",
    name: "Binance",
    url: "http://binance.com",
    trust_score_rank: 1,
    country: "Cayman Islands",
    year_established: 2017,
    description: "",
  },
];

test("render page title", async () => {
  render(<Exchanges />);

  await screen.findByText("Directory of Cryptocurrency Exchanges");
});

test("render all exchanges", async () => {
  render(
    <BrowserRouter>
      <ExchangeContext.Provider value={{ exchanges }}>
        <Exchanges />
      </ExchangeContext.Provider>
    </BrowserRouter>
  );

  await screen.findByText("Belize");
  await screen.findByText("2");
  await screen.findByAltText("OKX");

  await screen.findByText("Cayman Islands");
  await screen.findByText("1");
  await screen.findByAltText("Binance");
});
