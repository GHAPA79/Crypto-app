import { useState } from "react";
import styles from "./Chart.module.css";
import { convertData } from "../../helpers/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");
  console.log(chart);

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <div className={styles.name}>
          <div>
            <img src={chart.coin.image} alt="Coin logo" />
            <p>{chart.coin.name}</p>
          </div>
          <span className={styles.cross} onClick={() => setChart(null)}>
            X
          </span>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types}>
          <button
            onClick={() => setType("prices")}
            className={type === "prices" ? styles.selected : null}
          >
            Prices
          </button>
          <button
            onClick={() => setType("market_caps")}
            className={type === "market_caps" ? styles.selected : null}
          >
            Market Caps
          </button>
          <button
            onClick={() => setType("total_volumes")}
            className={type === "total_volumes" ? styles.selected : null}
          >
            Total Volume
          </button>
          {/* The button setState must be like this "() => setState()" */}
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.current_price.toLocaleString()}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.ath.toLocaleString()}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>${chart.coin.market_cap.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={400}
        height={400}
        data={data}
        // data must be formated by documentation
      >
        <Line type={"monotone"} dataKey={type} stroke="#3874ff" />
        <CartesianGrid stroke="#404042" strokeWidth="2px" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        {/* show the type of chart in the bottom */}
        <Tooltip />
        {/* show the buttons data in chrat by hovering */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
