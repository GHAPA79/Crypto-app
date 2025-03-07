import TableRow from "./TableRow";

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
            <TableRow coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;
