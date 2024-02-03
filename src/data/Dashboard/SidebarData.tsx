import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PortraitIcon from "@mui/icons-material/Portrait";
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
const IconsSide = [
  { icon: <AccountTreeIcon />, title: "Center Home", link: "/" },
  { icon: <AccountTreeIcon />, title: "Home Dashboard", link: "/dash" },

  { icon: <PortraitIcon />, title: "المراكز", link: "/",Items:[
    {
    title:'اضافة مركز جديد',
    link:'/addcenter',
    icon:<FilterTiltShiftIcon/>
  },
] },


 
  { icon: <SupportAgentIcon />, title: "اعدادات التدريبات", link: "/",
  Items:[
    {
    title:'اضافة تدريب جديد',
    link:'/addtraining',
    icon:<FilterTiltShiftIcon/>
  },
  
  ] },
  { icon: <SupportAgentIcon />, title: "القاعات", link: "/",
  Items:[
    {
    title:'اضافة قاعة جديدة',
    link:'/Reservations',
    icon:<FilterTiltShiftIcon/>
  },
  
  ] },
  { icon: <ReceiptLongIcon />, title: "اعدادات الفواتير", link: "/" ,Items:[
    {
    title:'اضافة فاتورة جديدة',
    link:'/Reservations',
    icon:<FilterTiltShiftIcon/>
  },
  
  ]},
  { icon: <SettingsIcon />, title: "My panel", link: "/" },
];
export default IconsSide;
