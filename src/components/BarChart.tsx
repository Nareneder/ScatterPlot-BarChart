import ReactEcharts from "echarts-for-react";

type BarProps = {
  data: { name: string; value: number }[];
};

const BarChart: React.FC<BarProps> = ({ data }) => {
  const option = {
    xAxis: {
      type: "category",
      data: data.map((d) => d.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.map((d) => d.value),
        type: "bar",
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: "500px" }} />;
};

export default BarChart;
