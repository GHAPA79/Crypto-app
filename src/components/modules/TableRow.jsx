import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import styles from "./TableCoins.module.css";

const TableRow = ({
  coin: {
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
    // We can change the name by this format above in destructuring.
  },
  currency,
  setChart,
}) => {
  const showHandler = () => {
    setChart(true);
  };
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="Coin image" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "eur" ? "€" : currency === "jpy" ? "¥" : "$"}
        {current_price.toLocaleString()}
      </td>
      {/* toLocaleString() method is for seperate numbers in 3 by comma(,) */}
      <td className={price_change > 0 ? styles.positive : styles.negative}>
        {price_change.toFixed(2)}%
      </td>
      {/* toFixed(2) method means show till 2 number after point. */}
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="Chart image" />
      </td>
    </tr>
  );
};

export default TableRow;
