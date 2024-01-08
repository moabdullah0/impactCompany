

import { Box } from '@mui/material';



import {  Theme } from "@mui/material/styles";
import CustomDrawerHeader from '../Layout/Navbar/DrawerNavbar';
import SecondNav from '../Layout/Navbar/SecondNav';
import Main from '../Main/Main';
interface Themes{
    theme:Theme
  }
const Maintest = ({theme}:Themes) => {
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
