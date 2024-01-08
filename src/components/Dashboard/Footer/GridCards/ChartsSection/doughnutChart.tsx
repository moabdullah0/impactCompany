import { TEChart } from "tw-elements-react";
const doughnutChart = () => {
  return (
    <div>
      <TEChart
        type="doughnut"
        data={{
          datasets: [
            {
              label: "Traffic",
              data: [9112, 2343],
              backgroundColor: ["	rgb(138,43,226)", "rgb(211,211,211)"],
            },
          ],
        }}
      />
    </div>
  );
};

export default doughnutChart;
