import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

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
}) => {
  return (
    <tr>
      <td>
        <div>
          <img src={image} alt="Coin image" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      {/* toLocaleString() method is for seperate numbers in 3 by comma(,) */}
      <td>{price_change.toFixed(2)}%</td>
      {/* toFixed(2) method means show till 2 number after point. */}
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="Chart image" />
      </td>
    </tr>
  );
};

export default TableRow;
