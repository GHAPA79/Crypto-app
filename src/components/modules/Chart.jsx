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
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
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
