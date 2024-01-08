import { Card, CardContent, Typography } from "@mui/material";
import FirstCard from "../ChartsSection/doughnutChart";
import img from "../../../../../assets/37244091-1e161088-2484-11e8-9697-80013de58ea6.png";
import PieChart from "../ChartsSection/FirstPieChart";
import SecondPieChart from "../ChartsSection/SecondPieChart";

const FourCard = () => {
  return (
    <div className="grid  lg:grid-cols-2 sm:grid-col-1 md:grid-col-1 gap-4 mt-10 w-[100%]">
      <Card>
        <CardContent>
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex flex-col items-center px-10">
                <Typography className="text-purple-700 font-bold ">
                  474,988.70€
                </Typography>
                <Typography variant="caption" className="text-center">
                  Planned Value (PV)
                </Typography>
                <Typography variant="caption" className="text-center">
                  74,988.70€
                </Typography>
              </div>
              <div className="w-[100%]">
                <FirstCard />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex flex-col items-center px-10">
                <Typography className="text-green-600 font-bold">
                  400,000.00€
                </Typography>
                <Typography variant="caption" className="text-center">
                  Actual Value(AV)
                </Typography>
              </div>
              <img
                className="w-[50%] mx-5 mt-10"
                src={img}
                alt="Your Alt Text"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center text-center justify-center">
            <div className="text-xl">
              <small className="mx-auto ">Estimate To Compete (ETC)</small>
              <h6 className="">65,500.70€</h6>
            </div>

            <div className="w-[60%] flex">
              <PieChart />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="">
            <small className="text-yellow-400 font-bold ">
              600,988.70 € <br />
            </small>
            <small className="">Estimate At Completion (EAC)</small>
            <div className="flex flex-row w-[70%]">
              <SecondPieChart />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FourCard;
