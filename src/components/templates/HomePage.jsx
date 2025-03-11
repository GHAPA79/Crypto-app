import { useEffect } from "react";
import { useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import PaginationPart from "../modules/PaginationPart";
import Search from "../modules/Search";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };

    getData();
  }, [page, currency]);

  return (
    <>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoins coins={coins} isLoading={isLoading} currency={currency} />
      <PaginationPart setPage={setPage} />
    </>
  );
};

export default HomePage;
