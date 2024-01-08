import { TEChart } from "tw-elements-react";

const FirstPieChart = () => {
    return (
      
        
        <TEChart
        type="pie"
        data={{
          
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
          labels: [
            "Remaining",
            "Expenses",
           
          ],
        }}
      />
      
    
      )
}

export default FirstPieChart
