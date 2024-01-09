import { Box, Card, CardContent, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import TimeLine from "./TimeLine/TimeLine";
import {  useTheme } from "@mui/material/styles";
const Projectmilestones = () => {
  const theme=useTheme();
  return (
    <div>
      <Card>
        <CardContent>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            fontSize={"15px"}
          >
            <div >
              <Box>Project milestones</Box>
              <div className={` w-[100%] justify-center items-center p-3 rounded-lg mt-5 ${theme.palette.mode=='dark'?'text-white bg-blue-700':'text-black bg-blue-100'}`}>
                <h5 className="text-blue-400 font-bold">milestone 2</h5>
                <small className={`text-sm  ${theme.palette.mode=='dark'?'text-white ':'text-black'}`}>
                  Simple description Simple description Simple description
                </small>
              </div>
            </div>
            <div>
              <Box display={"flex"} fontSize={"5px"} alignItems={"center"}>
                <Typography
                  color={grey[600]}
                  marginRight={"50px"}
                  bgcolor={yellow[200]}
                  fontSize={"10px"}
                >
                  Start date : 23/11/2023
                </Typography>
                <Typography
                  color={grey[500]}
                  marginRight={"30px"}
                  bgcolor={yellow[200]}
                  fontSize={"10px"}
                >
                  End date : 23/11/2023
                </Typography>
                <Box fontSize={"1px"}>
                  <a className="text-gray-400">
                    <ControlPointOutlinedIcon />
                  </a>
                  <a className="text-gray-400">
                    <RemoveCircleOutlineOutlinedIcon />
                  </a>

                  <a className="text-gray-400">
                    <MouseOutlinedIcon />
                  </a>
                  <a className="text-gray-400">
                    <FormatListBulletedOutlinedIcon />
                  </a>
                </Box>
              </Box>
            </div>
          </Box>

          <div>
            <TimeLine />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projectmilestones;
