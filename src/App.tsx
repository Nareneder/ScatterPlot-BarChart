import React, { useEffect, useState } from "react";
import ScatterPlot from "./components/Scatter.tsx";
import wineData from "./wine-data.json";
import BarChart from "./components/BarChart.tsx";

const App: React.FC = () => {

  return (
    <div>
      <h1>Scatter Plot</h1>
      <ScatterPlot data={wineData} />
      <h1>Bar Chart</h1>
      <BarChart data={wineData} />
    </div>
  );
};

export default App;
