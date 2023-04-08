import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface WineData {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number;
  "Nonflavanoid phenols": string;
  Proanthocyanins: string;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": string;
  Unknown: number;
}

interface ScatterPlotProps {
  data: WineData[];
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {

  // transform the data into ECharts format
  const chartData = data.map((item) => {
    return [item["Color intensity"], item.Hue];
  });

  const option = {
    xAxis: {
      type: 'value',
      name: 'Color intensity',
    },
    yAxis: {
      type: 'value',
      name: 'Hue',
    },
    series: [{
      data: chartData,
      type: 'scatter',
    }]
  };

  return (
    <ReactEcharts option={option} />
  );
};

export default ScatterPlot;
