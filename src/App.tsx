import React, { useEffect, useState } from "react";
import Scatter from "./components/Scatter.tsx";
import wineData from "./wine-data.json";
import BarChart from "./components/BarChart.tsx";

type WineData = {
  "Alcohol": number;
  "Malic Acid": number;
  "Ash": number;
  "Alcalinity of ash": number;
  "Magnesium": number;
  "Total phenols": number;
  "Flavanoids": number;
  "Nonflavanoid phenols": string;
  "Proanthocyanins": string;
  "Color intensity": number;
  "Hue": number;
  "OD280/OD315 of diluted wines": string;
  "Unknown": number;
};

const App: React.FC = () => {
  const [scatterData, setScatterData] = useState<{ name: string; value: [number, number] }[]>([]);
  const [barData, setBarData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const processedScatterData = wineData.map((d: WineData) => ({
      name: `Wine ${d.Alcohol}`,
      value: [d["Malic Acid"], d.Ash],
    }));
    setScatterData(processedScatterData);

    const processedBarData = Object.entries(wineData[0]).slice(1).map(([key, value]) => ({
      name: key,
      value: value as number,
    }));
    setBarData(processedBarData);
  }, []);

  return (
    <div>
      <h1>Scatter Plot</h1>
      <Scatter data={scatterData} />
      <h1>Bar Chart</h1>
      <BarChart data={barData} />
    </div>
  );
};

export default App;
