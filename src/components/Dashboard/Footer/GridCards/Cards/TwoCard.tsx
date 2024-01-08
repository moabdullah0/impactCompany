import { Card, CardContent, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TwoCard = () => {
  return (
    <div>
    
    <Card className="h-[30%] w-auto mt-10 items-center justify-center">
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col items-center sm:flex-row">
            <Typography variant="h5" className="text-blue-600 mx-5 font-bold">
              300,988.70
            </Typography>
            <Typography variant="body2" className="text-center">
              Earned Value (EV)
            </Typography>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3 sm:mt-0">
            <div className="bg-blue-600 h-2.5 rounded-full w-[70%]"></div>
            <span className="text-blue-600 font-bold block mt-1 sm:inline">
              70%
            </span>{" "}
            <Typography variant="body2" className="text-center sm:ml-2">
              left from target
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>

      {/* Second Card */}
      <Card className="h-[70%] mt-10">
      <CardContent>
        <Typography variant="h5" className="pb-5">
          Project Performance
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center border-b-2 lg:border-r-2 lg:border-b-0 lg:pb-0 pb-5">
            <Typography variant="h6" className="text-blue-600 text-lg">
              0.7
              <ArrowDropUpIcon />
            </Typography>
            <Typography variant="body2" className="text-grey-400">
              Cost Performance Index (CPI)
            </Typography>
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 lg:border-r-2 lg:border-b-0 lg:pb-0 pb-5">
            <Typography variant="h6" className="text-blue-600 text-lg">
              0.5
              <ArrowDropUpIcon />
            </Typography>
            <Typography variant="body2" className="text-grey-400">
              Schedule Performance Index (SPI)
            </Typography>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Typography variant="h6" className="text-red-600 text-lg">
              -0.1
              <ArrowDropDownIcon />
            </Typography>
            <Typography variant="body2">
              To Complete Performance Index (TCPI)
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default TwoCard;
