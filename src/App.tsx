import React, { useEffect, useState } from "react";
import "./App.css";
import Exchanges from "./Exchanges/Exchanges";
import { Routes, Route, Link } from "react-router-dom";
import SingleExchange from "./SingleExchange/SingleExchange";
import { ExchangesContextType } from "./models";

export const ExchangeContext = React.createContext<ExchangesContextType>({
  exchanges: [],
});

function App() {
  const [exchanges, setExchanges] = useState([]);
  const getExchanges = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/exchanges?per_page=10"
    );

    return response.json();
  };

  useEffect(() => {
    (async () => {
      const a = await getExchanges();
      console.log(a);
      setExchanges(a);
    })();
  }, []);

  const [exchangeID, setExchangeID] = useState("");
  return (
    <div>
      <ExchangeContext.Provider value={{ exchanges }}>
        <Routes>
          <Route
            path="/"
            element={<Exchanges setExchangeID={setExchangeID} />}
          />
          <Route
            path="/exchange"
            element={<SingleExchange exchangeID={exchangeID} />}
          />
        </Routes>
      </ExchangeContext.Provider>
    </div>
  );
}

export default App;