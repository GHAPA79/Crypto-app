import { useEffect } from "react";
import { useState } from "react";
import TableCoins from "../modules/TableCoins";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&x_cg_demo_api_key=CG-usZXxCYCwoRSvQpq81ac3LsZ"
    )
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return <TableCoins coins={coins} />;
};

export default HomePage;
