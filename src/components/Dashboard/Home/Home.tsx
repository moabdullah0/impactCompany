

import { Box } from '@mui/material';



import {  useTheme } from "@mui/material/styles";
import CustomDrawerHeader from '../Layout/Navbar/DrawerNavbar';
import SecondNav from '../Layout/Navbar/SecondNav';
import Main from '../Main/Main';

const Maintest = () => {
  const theme=useTheme()
  return (
    <div className='px-10 ' >
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <CustomDrawerHeader theme={theme}/>
        <SecondNav />
        <Main />
      </Box>
    </div>
  )
}

export default Maintest
