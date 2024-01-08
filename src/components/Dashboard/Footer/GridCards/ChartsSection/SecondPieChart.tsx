import { TEChart } from "tw-elements-react";

const SecondPieChart = () => {
  return (
    <TEChart
        type="pie"
        data={{
          
          datasets: [
            {
              label: "Total project costs",
              data: [10000],
              backgroundColor: [
                
                "rgb(255,255,0)",
              
              ],
            },
          ],
          labels: [
            "Total project costs",
           
           
          ],
        }}
      />
      
  )
}

export default SecondPieChart
