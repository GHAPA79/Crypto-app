import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

const TableCoins = ({ coins }) => {
  console.log(coins);
  return (
    <div>
      <table>
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
            <tr key={coin.id}>
              <td>
                <div>
                  <img src={coin.image} alt="Coin image" />
                  <span>{coin.symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>{coin.name}</td>
              <td>${coin.current_price.toLocaleString()}</td>
              {/* toLocaleString() method is for seperate numbers in 3 by comma(,) */}
              <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
              {/* toFixed(2) method means show till 2 number after point. */}
              <td>{coin.total_volume.toLocaleString()}</td>
              <td>
                <img
                  src={
                    coin.price_change_percentage_24h > 0 ? chartUp : chartDown
                  }
                  alt="Chart image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;
