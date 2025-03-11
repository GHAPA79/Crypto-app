import { RotatingLines } from "react-loader-spinner";

import TableRow from "./TableRow";

import styles from "./TableCoins.module.css";

const TableCoins = ({ coins, isLoading, currency }) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeWidth="3" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} currency={currency} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoins;
