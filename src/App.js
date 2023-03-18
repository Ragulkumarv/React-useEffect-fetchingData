import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [btcData, setBtcData] = useState({});
  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((resp) => resp.json())
      .then((data) => setBtcData(data.bpi.EUR))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return Object.keys(btcData).length > 0 ? (
    <>
      <h1>Current BTC/{btcData.code} data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
