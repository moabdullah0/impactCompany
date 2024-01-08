import { TEChart } from "tw-elements-react";

const LineChart = () => {
    return (
        <TEChart
        type="bubble"
        data={{
          datasets: [
            {
              label: "from donor:",
              data: [
                {
                  x: 3,
                  y: 7,
                  r: 10,
                },
              ],
            },
            {
              label: "Expenses",
              data: [
                {
                  x: 5,
                  y: 7,
                  r: 10,
                },
              ],
              backgroundColor: "rgba(66, 133, 244, 0.2)",
            },
            {
              label: "Remaining",
              data: [
                {
                  x: 7,
                  y: 7,
                  r: 10,
                },
              ],
              backgroundColor: "rgba(66, 133, 244, 0.8)",
            },
          ],
        }}
      />
    );
}

export default LineChart
