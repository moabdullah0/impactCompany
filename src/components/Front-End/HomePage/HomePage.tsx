
import Navbar from './Navbar/Navbar'

import { ThemeProviders } from "../../../App";
import { CssBaseline } from '@mui/material';
import AboutCompany from './Main/AboutCompany';
import { useTheme } from "@mui/material/styles";
const HomePage = ({setMode,mode,theme}:ThemeProviders) => {
const themes=useTheme();
  return (
  <div className={`${themes.palette.mode==='light'?'bg-gray-200':''} h-screen`}>
     <CssBaseline/>
<Navbar setMode={setMode} theme={theme} mode={mode}/>
<AboutCompany/>
  </div>
      
  
      

  )
}

export default HomePage
