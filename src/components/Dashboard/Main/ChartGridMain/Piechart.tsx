import { TEChart } from "tw-elements-react";

const Pieechart = () => {
  return (
    <TEChart
    type="pie"
    data={{
      labels: [
        "Remaining",
        "Expenses",
       
      ],
      datasets: [
        {
          label: "Traffic",
          data: [2112, 2343],
          backgroundColor: [
            "rgb(169,169,169)",
            "rgb(34,139,34)",
          
          ],
        },
      ],
    }}
  />
  )
}

export default Pieechart
