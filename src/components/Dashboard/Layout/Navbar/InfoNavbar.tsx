import { Box } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {  useTheme } from "@mui/material/styles";


const Navbar = () => {
  const theme=useTheme()
  return (
    <>
      <Box className={`flex flex-row justify-between w-full ${theme.palette.mode=='light'?'text-black':'text-white'}  `}>
        <div className="mt-5">
         
        </div>
        <div className="flex flex-row">
          <div className="mt-2 ">
            <NotificationsActiveIcon />
          </div>
          <div className="flex ml-4  flex-row">
            <div className="mr-4">
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
              />
            </div>
            <div className="mr-4">
              <p className="font-bold ">Mohamad Alibrahim</p>
              <p>Project officer</p>
            </div>
            <div className="mt-2">
              <ExpandMoreIcon />
    
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
