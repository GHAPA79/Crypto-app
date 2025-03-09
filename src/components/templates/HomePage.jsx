import { useEffect } from "react";
import { useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import PaginationPart from "../modules/PaginationPart";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      <TableCoins coins={coins} isLoading={isLoading} />
      <PaginationPart />
    </>
  );
};

export default HomePage;
