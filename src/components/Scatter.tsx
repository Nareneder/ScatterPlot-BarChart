import ReactEcharts from "echarts-for-react";

type ScatterProps = {
  data: { name: string; value: [number, number] }[];
};

const Scatter: React.FC<ScatterProps> = ({ data }) => {
  const option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: data,
        type: "scatter",
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: "500px" }} />;
};

export default Scatter;
