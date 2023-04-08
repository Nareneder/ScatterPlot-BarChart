import ReactEcharts from "echarts-for-react";

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

interface BarChartProps {
  data: WineData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = data.map((item) => {
    return [item.Alcohol, item["Malic Acid"]];
  });
  const options = {
    xAxis: {
      type: 'category',
      name: 'Alcohol',
      data: data.map(({ Alcohol }) => Alcohol),
    },
    yAxis: {
      type: 'value',
      name: 'Malic Acid',
    },
    series: [
      {
        data: chartData,
        type: 'bar',
      },
    ],
  };

  return <ReactEcharts option={options} />;
};

export default BarChart;
