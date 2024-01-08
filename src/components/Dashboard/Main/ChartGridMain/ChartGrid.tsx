import { Card, CardContent } from "@mui/material";
import Pieechart from "./Piechart";
import SquareIcon from "@mui/icons-material/Square";
import LineChart from "./LineChart";

const ChartGrid = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 mt-10">
      <Card>
          <CardContent>
            <div className="text-center">
              <h1>Project Budget</h1>
              <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-col items-center w-[50%]">
                <Pieechart />
                <div className="flex flex-col">
                  <small className="">Budget Value:</small>
                  <h5 className="text-blue-700 flex items-center font-bold">
                    <SquareIcon />474,988.70€
                  </h5>
                  <small className="">Expenses:</small>
                  <h5 className="text-green-700 flex items-center font-bold"><SquareIcon />400,000.00€</h5>
                  <small className="">Remaining:</small>
                  <h5 className="text-gray-400 flex items-center font-bold"><SquareIcon />74,988.70€</h5>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
          <div className="text-center flex flex-col w-[120%] ">
  <h1>Donor payments</h1>
  <div className="flex flex-col sm:flex-col lg:flex-row items-center w-[65%]">
    <div className="mb-4 sm:mb-0 lg:mr-4">
      <LineChart />
    </div>
    <div className="flex flex-col text-center items-center">
      <small>Total payments from donor: </small>
      <h5 className="text-blue-700 flex items-center">
        <SquareIcon />210,000.00€
      </h5>
      <small>Expenses:</small>
      <h5 className="text-green-700 flex items-center font-bold">
        <SquareIcon />400,000.00€
      </h5>
      <small>Remaining:</small>
      <h5 className="text-red-600 flex items-center font-bold">
        <SquareIcon />-190,000.00
      </h5>
    </div>
  </div>
</div>

          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ChartGrid;
