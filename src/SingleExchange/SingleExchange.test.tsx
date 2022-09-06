import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { ExchangeContext } from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SingleExchange from "./SingleExchange";
import React from "react";

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

test("render only exchange with id given in url params", async () => {
  render(
    <MemoryRouter initialEntries={["/exchange/okex"]}>
      <ExchangeContext.Provider value={{ exchanges }}>
        <Routes>
          <Route path="/exchange/:exchangeID" element={<SingleExchange />} />
        </Routes>
      </ExchangeContext.Provider>
    </MemoryRouter>
  );

  await screen.findByText("OKX");
  await screen.findByText("2013");
  await screen.findByText("Belize");
  await screen.findByText("Description");
  const rank = await screen.findAllByTestId("score_rank");
  expect(rank).toHaveLength(1);
  const socialIcons = await screen.findAllByTestId("social-icon");
  expect(socialIcons).toHaveLength(2);
  const button = await screen.findByTestId("back-button");
  expect(button.innerHTML).toEqual("Go Back");
});
