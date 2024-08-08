import { ReactNode } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

// const icon = (name: string) => (
//   // <SvgColor
//   //   src={`/assets/icons/navbar/${name}.svg`}
//   //   sx={{ width: 1, height: 1 }}
//   // />
//   <p>k</p>
// );
interface Item {
  title: string;
  path: string;
  icon: ReactNode;
}
export interface INavConfig {
  item: Item;
}

const navConfig = [
  {
    title: "dashboard",
    path: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "kontakt",
    path: "/contact",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "kalendar",
    path: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "faq",
    path: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
];

export default navConfig;
